import {assertNotNull} from '@subsquid/util-internal'
import {lookupArchive} from '@subsquid/archive-registry'

import {Store} from '@subsquid/typeorm-store'

import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'
import * as dotsama from '../abi/dotsama'

export const DOTSAMA_ADDRESS = "0xF0161A8aeBB4BE70cB82b544d7CCF05Aa07a7e95".toLowerCase()
export const processor = new SubstrateBatchProcessor()
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/evm-indexing/supported-networks/
    .setGateway(lookupArchive('astar', {type: "Substrate", release: "ArrowSquid"}))
    // Chain RPC endpoint is required for
    //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
    //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
    .setRpcEndpoint({
        // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
        // https://docs.subsquid.io/deploy-squid/env-variables/
        url: assertNotNull(process.env.RPC_ENDPOINT_ASTAR),
        // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
        rateLimit: 10
    })
    .setFields({
        block: {
            timestamp: true
        },
        extrinsic: {
            hash: true
        },
        log: {
             data: true,
             topics: true
        }
    })
    .setBlockRange({
        from: 5273665
       
        
    })
     
    .addEvmLog( {
        address: [DOTSAMA_ADDRESS],
        topic0: [dotsama.events.CancelMultipleOrders.topic],
        extrinsic: true,
       
    })
    .addEvmLog({
        address: [DOTSAMA_ADDRESS],
        topic0: [dotsama.events.CancelAllOrders.topic],
        extrinsic: true,
    })
    .addEvmLog({
        address: [DOTSAMA_ADDRESS],
        topic0: [dotsama.events.RoyaltyPayment.topic],
        extrinsic: true,
    })
    .addEvmLog({
        address: [DOTSAMA_ADDRESS],
        topic0: [dotsama.events.TakerAsk.topic],
        extrinsic: true,
    })
    .addEvmLog({
        address: [DOTSAMA_ADDRESS],
        topic0: [dotsama.events.TakerBid.topic],
        extrinsic: true,
    })

    export type Fields = SubstrateBatchProcessorFields<typeof processor>
    export type Block = BlockHeader<Fields>
    export type Event = _Event<Fields>
    export type Call = _Call<Fields>
    export type Extrinsic = _Extrinsic<Fields>
    export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
    export type Context = DataHandlerContext<Store, Fields>
