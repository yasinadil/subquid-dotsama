import assert from 'assert'
import {EvmLog, getEvmLog} from '@subsquid/frontier'
import { TypeormDatabase} from '@subsquid/typeorm-store'
import * as dotsama from '../abi/dotsama'
import {CancelAllOrders, CancelMultipleOrders,TakerAsk, TakerBid, RoyaltyPayment} from '../model'
import {
    processor,
    DOTSAMA_ADDRESS,
    Context, Event
} from './processor'
import { CancelAllOrdersData, CancelMultipleOrdersData, TakerBidData, TakerAskData, RoyaltyPaymentData } from '../types/dataTypes'


processor.run(new TypeormDatabase({supportHotBlocks: true, stateSchema: "astar_processor"}), async (ctx) => {
    const cancelMultipleOrdersData: CancelMultipleOrdersData[] = []
    const cancelAllOrdersData: CancelAllOrdersData[] = []
    const takerBidData : TakerBidData[] = []
    const takerAskData: TakerAskData[]= []
    const royaltyPaymentData: RoyaltyPaymentData[]= []

    for (const block of ctx.blocks) {
        assert(block.header.timestamp, `Block ${block.header.height} arrived without a timestamp`)
        for (const event of block.events) {
            if (event.name === 'EVM.Log') {
                assert(event.extrinsic, `Event ${event} arrived without a parent extrinsic`)
                // EVM log extracted from the substrate event
                const evmLog = getEvmLog(event)
                if (evmLog.address !== DOTSAMA_ADDRESS) {
                    ctx.log.error(`Got a EVM.Log from a non-requested address ${evmLog.address}`)
                    continue
                }
                if(evmLog.topics[0] == dotsama.events.CancelAllOrders.topic && evmLog.address == DOTSAMA_ADDRESS){
                    let cancelledAllOrdersData = getCancelAllOrders(evmLog, event, BigInt(block.header.timestamp))
                    cancelAllOrdersData.push(cancelledAllOrdersData)
                }

                if(evmLog.topics[0] == dotsama.events.CancelMultipleOrders.topic && evmLog.address == DOTSAMA_ADDRESS){
                    let cancelledMultipleOrders = getCancelMultipleOrders(evmLog, event , BigInt(block.header.timestamp))
                    cancelMultipleOrdersData.push(cancelledMultipleOrders)
                }

                if(evmLog.topics[0] == dotsama.events.TakerBid.topic && evmLog.address == DOTSAMA_ADDRESS){
                   let taker_bids = getTakerBids(evmLog, event, BigInt(block.header.timestamp), BigInt(block.header.height), event.extrinsic.hash);
                   takerBidData.push(taker_bids)
                }

                if(evmLog.topics[0] == dotsama.events.TakerAsk.topic && evmLog.address == DOTSAMA_ADDRESS){
                   let taker_asks = getTakerAsks(evmLog, event, BigInt(block.header.timestamp), BigInt(block.header.height), event.extrinsic.hash);
                   takerAskData.push(taker_asks)
                }

                if(evmLog.topics[0] == dotsama.events.RoyaltyPayment.topic && evmLog.address == DOTSAMA_ADDRESS){
                    let royalty_payments = getRoyaltyPayments(evmLog, event, BigInt(block.header.timestamp));
                    royaltyPaymentData.push(royalty_payments)
                 }
            }
        }
    }


    await saveCancelAllOrders(ctx, cancelAllOrdersData)
    await saveCancelMultipleOrders(ctx, cancelMultipleOrdersData)
    await saveTakerBids(ctx, takerBidData)
    await saveTakerAsks(ctx, takerAskData)
    await saveRoyaltyPayments(ctx, royaltyPaymentData)
})


function getCancelAllOrders(evmLog: EvmLog, event: Event, timestamp: bigint): CancelAllOrdersData {
    const {user, newMinNonce} = dotsama.events.CancelAllOrders.decode(evmLog)
    return {
        id: event.id,
        user,
        newMinNonce,
        timestamp,
        chainId: "592"
    }
}

function getCancelMultipleOrders(evmLog: EvmLog, event: Event, timestamp: bigint): CancelMultipleOrdersData{
    const {user, orderNonces} = dotsama.events.CancelMultipleOrders.decode(evmLog)
    const serializedNonces = orderNonces.map((value: bigint, index: number) => {
        return Number(value)
    })
    return {
        id: event.id,
        user,
        orderNonces: serializedNonces,
        timestamp,
        chainId: "592"
    }
}

function getTakerBids(evmLog: EvmLog, event: Event, timestamp: bigint, block: bigint, txHash: string): TakerBidData{
    const { orderHash,
        orderNonce,
        taker,
        maker,
        strategy,
        currency,
        collection,
        tokenId,
        amount,
        price
        
    } = dotsama.events.TakerBid.decode(evmLog)
   
    return {
        id: event.id,
        orderHash,
        orderNonce,
        taker,
        maker,
        strategy,
        currency,
        collection,
        tokenId,
        amount,
        price,
        timestamp,
        block,
        transactionHash: txHash,
        chainId: "592"
    }
}

function getTakerAsks(evmLog: EvmLog, event: Event, timestamp: bigint, block: bigint, txHash: string): TakerAskData{
    const { orderHash,
        orderNonce,
        taker,
        maker,
        strategy,
        currency,
        collection,
        tokenId,
        amount,
        price
        
    } = dotsama.events.TakerAsk.decode(evmLog)
   
    return {
        id: event.id,
        orderHash,
        orderNonce,
        taker,
        maker,
        strategy,
        currency,
        collection,
        tokenId,
        amount,
        price,
        timestamp,
        block,
        transactionHash: txHash,
        chainId: "592"
    }
}


function getRoyaltyPayments(evmLog: EvmLog, event: Event, timestamp: bigint): RoyaltyPayment {
    const { collection, tokenId, royaltyRecipient, currency, amount} = dotsama.events.RoyaltyPayment.decode(evmLog)
   
    return {
        id: event.id,
        collection,
        tokenId,
        royaltyRecipient,
        currency,
        amount,
        timestamp,
        chainId: "592"
    }
}

async function saveRoyaltyPayments(ctx: Context, royaltyPayments: RoyaltyPaymentData[]) {
    let royalty_payments: RoyaltyPaymentData[] = []
    for( let data of royaltyPayments){
        const {
            id, 
            collection,
            tokenId,
            currency,
            royaltyRecipient,
            amount,
            timestamp,
            chainId
        } = data;
        
        let royalty = new RoyaltyPayment({
            id,
            royaltyRecipient,
            currency,
            collection,
            tokenId,
            amount,
            timestamp,
            chainId
        })
        royalty_payments.push(royalty)
    }
    await ctx.store.save(royalty_payments)
}


async function saveTakerAsks(ctx: Context, takerAsks: TakerAskData[]) {
    let takerasks: TakerAskData[] = []
    for( let data of takerAsks){
        const {id, orderHash,
            orderNonce,
            taker,
            maker,
            strategy,
            currency,
            collection,
            tokenId,
            amount,
            price,
            timestamp,
            block,
            transactionHash,
            chainId
        } = data;
        
        let bid = new TakerAsk({
            id,
        orderHash,
        orderNonce,
        taker,
        maker,
        strategy,
        currency,
        collection,
        tokenId,
        amount,
        price,
        timestamp,
            block,
            transactionHash,
            chainId
        })
        takerasks.push(bid)
    }
    await ctx.store.save(takerasks)
}


async function saveTakerBids(ctx: Context, takerBids: TakerBidData[]) {
    let takerbids: TakerBidData[] = []
    for( let data of takerBids){
        const {id, orderHash,
            orderNonce,
            taker,
            maker,
            strategy,
            currency,
            collection,
            tokenId,
            amount,
            price,
            timestamp,
            block,
            transactionHash,
            chainId
        } = data;
        
        let bid = new TakerBid({
            id,
        orderHash,
        orderNonce,
        taker,
        maker,
        strategy,
        currency,
        collection,
        tokenId,
        amount,
        price,
        timestamp,
        block,
        transactionHash,
        chainId
        })
        takerbids.push(bid)
    }
    await ctx.store.save(takerbids)
}

async function saveCancelMultipleOrders(ctx: Context, cancelMultipleData: CancelMultipleOrdersData[]) {
    let cancelMultiple: CancelMultipleOrdersData[] = []
    for( let data of cancelMultipleData){
        const {id, user, orderNonces, chainId} = data;
        
        let order = new CancelMultipleOrders({
            id,
            user, 
            orderNonces,
            chainId
        })
        cancelMultiple.push(order)
    }
    await ctx.store.save(cancelMultiple)
}

async function saveCancelAllOrders(ctx: Context, cancelAllData: CancelAllOrdersData[]) {
    let cancelAll: CancelAllOrders[] = []
    for( let data of cancelAllData){
        const {id, user, newMinNonce,chainId} = data;
        let order = new CancelAllOrders({
            id,
            user, 
            newMinNonce,
            chainId
        })
        cancelAll.push(order)
    }
    await ctx.store.save(cancelAll)
}
