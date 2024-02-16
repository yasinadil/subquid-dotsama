import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './dotsama.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    CancelAllOrders: new LogEvent<([user: string, newMinNonce: bigint] & {user: string, newMinNonce: bigint})>(
        abi, '0x1e7178d84f0b0825c65795cd62e7972809ad3aac6917843aaec596161b2c0a97'
    ),
    CancelMultipleOrders: new LogEvent<([user: string, orderNonces: Array<bigint>] & {user: string, orderNonces: Array<bigint>})>(
        abi, '0xfa0ae5d80fe3763c880a3839fab0294171a6f730d1f82c4cd5392c6f67b41732'
    ),
    EIP712DomainChanged: new LogEvent<[]>(
        abi, '0x0a6387c9ea3628b88a633bb4f3b151770f70085117a15f9bf3787cda53f13d31'
    ),
    NewCurrencyManager: new LogEvent<([currencyManager: string] & {currencyManager: string})>(
        abi, '0xb4f5db40df3aced29e88a4babbc3b46e305e07d34098525d18b1497056e63838'
    ),
    NewExecutionManager: new LogEvent<([executionManager: string] & {executionManager: string})>(
        abi, '0x36e2a376eabc3bc60cb88f29c288f53e36874a95a7f407330ab4f166b0905698'
    ),
    NewProtocolFeeRecipient: new LogEvent<([protocolFeeRecipient: string] & {protocolFeeRecipient: string})>(
        abi, '0x8cffb07faa2874440346743bdc0a86b06c3335cc47dc49b327d10e77b73ceb10'
    ),
    NewRoyaltyFeeManager: new LogEvent<([royaltyFeeManager: string] & {royaltyFeeManager: string})>(
        abi, '0x80e3874461ebbd918ac3e81da0a92e5e51387d70f337237c9123e48d20e5a508'
    ),
    NewTransferSelectorNFT: new LogEvent<([transferSelectorNFT: string] & {transferSelectorNFT: string})>(
        abi, '0x205d78ab41afe80bd6b6aaa5d7599d5300ff8690da3ab1302c1b552f7baf7d8c'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    RoyaltyPayment: new LogEvent<([collection: string, tokenId: bigint, royaltyRecipient: string, currency: string, amount: bigint] & {collection: string, tokenId: bigint, royaltyRecipient: string, currency: string, amount: bigint})>(
        abi, '0x27c4f0403323142b599832f26acd21c74a9e5b809f2215726e244a4ac588cd7d'
    ),
    TakerAsk: new LogEvent<([orderHash: string, orderNonce: bigint, taker: string, maker: string, strategy: string, currency: string, collection: string, tokenId: bigint, amount: bigint, price: bigint] & {orderHash: string, orderNonce: bigint, taker: string, maker: string, strategy: string, currency: string, collection: string, tokenId: bigint, amount: bigint, price: bigint})>(
        abi, '0x68cd251d4d267c6e2034ff0088b990352b97b2002c0476587d0c4da889c11330'
    ),
    TakerBid: new LogEvent<([orderHash: string, orderNonce: bigint, taker: string, maker: string, strategy: string, currency: string, collection: string, tokenId: bigint, amount: bigint, price: bigint] & {orderHash: string, orderNonce: bigint, taker: string, maker: string, strategy: string, currency: string, collection: string, tokenId: bigint, amount: bigint, price: bigint})>(
        abi, '0x95fb6205e23ff6bda16a2d1dba56b9ad7c783f67c96fa149785052f47696f2be'
    ),
}

export const functions = {
    WETH: new Func<[], {}, string>(
        abi, '0xad5c4648'
    ),
    cancelAllOrdersForSender: new Func<[minNonce: bigint], {minNonce: bigint}, []>(
        abi, '0xcbd2ec65'
    ),
    cancelMultipleMakerOrders: new Func<[orderNonces: Array<bigint>], {orderNonces: Array<bigint>}, []>(
        abi, '0x9e53a69a'
    ),
    currencyManager: new Func<[], {}, string>(
        abi, '0x0f747d74'
    ),
    eip712Domain: new Func<[], {}, ([fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>] & {fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>})>(
        abi, '0x84b0196e'
    ),
    executionManager: new Func<[], {}, string>(
        abi, '0x483abb9f'
    ),
    isUserOrderNonceExecutedOrCancelled: new Func<[user: string, orderNonce: bigint], {user: string, orderNonce: bigint}, boolean>(
        abi, '0x31e27e27'
    ),
    matchAskWithTakerBid: new Func<[takerBid: ([isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string] & {isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string}), makerAsk: ([isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string] & {isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string})], {takerBid: ([isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string] & {isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string}), makerAsk: ([isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string] & {isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string})}, []>(
        abi, '0x38e29209'
    ),
    matchAskWithTakerBidUsingETHAndWETH: new Func<[takerBid: ([isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string] & {isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string}), makerAsk: ([isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string] & {isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string})], {takerBid: ([isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string] & {isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string}), makerAsk: ([isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string] & {isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string})}, []>(
        abi, '0xb4e4b296'
    ),
    matchBidWithTakerAsk: new Func<[takerAsk: ([isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string] & {isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string}), makerBid: ([isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string] & {isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string})], {takerAsk: ([isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string] & {isOrderAsk: boolean, taker: string, price: bigint, tokenId: bigint, minPercentageToAsk: bigint, params: string}), makerBid: ([isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string] & {isOrderAsk: boolean, signer: string, collection: string, price: bigint, tokenId: bigint, amount: bigint, strategy: string, currency: string, nonce: bigint, startTime: bigint, endTime: bigint, minPercentageToAsk: bigint, params: string, v: number, r: string, s: string})}, []>(
        abi, '0x3b6d032e'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    protocolFeeRecipient: new Func<[], {}, string>(
        abi, '0x64df049e'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    royaltyFeeManager: new Func<[], {}, string>(
        abi, '0x87e4401f'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    transferSelectorNFT: new Func<[], {}, string>(
        abi, '0x5e14f68e'
    ),
    updateCurrencyManager: new Func<[_currencyManager: string], {_currencyManager: string}, []>(
        abi, '0x5ce052d7'
    ),
    updateExecutionManager: new Func<[_executionManager: string], {_executionManager: string}, []>(
        abi, '0xd4ff41dc'
    ),
    updateProtocolFeeRecipient: new Func<[_protocolFeeRecipient: string], {_protocolFeeRecipient: string}, []>(
        abi, '0x1df47f80'
    ),
    updateRoyaltyFeeManager: new Func<[_royaltyFeeManager: string], {_royaltyFeeManager: string}, []>(
        abi, '0xc5498769'
    ),
    updateTransferSelectorNFT: new Func<[_transferSelectorNFT: string], {_transferSelectorNFT: string}, []>(
        abi, '0xf75ff53f'
    ),
    userMinOrderNonce: new Func<[_: string], {}, bigint>(
        abi, '0x4266581e'
    ),
}

export class Contract extends ContractBase {

    WETH(): Promise<string> {
        return this.eth_call(functions.WETH, [])
    }

    currencyManager(): Promise<string> {
        return this.eth_call(functions.currencyManager, [])
    }

    eip712Domain(): Promise<([fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>] & {fields: string, name: string, version: string, chainId: bigint, verifyingContract: string, salt: string, extensions: Array<bigint>})> {
        return this.eth_call(functions.eip712Domain, [])
    }

    executionManager(): Promise<string> {
        return this.eth_call(functions.executionManager, [])
    }

    isUserOrderNonceExecutedOrCancelled(user: string, orderNonce: bigint): Promise<boolean> {
        return this.eth_call(functions.isUserOrderNonceExecutedOrCancelled, [user, orderNonce])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    protocolFeeRecipient(): Promise<string> {
        return this.eth_call(functions.protocolFeeRecipient, [])
    }

    royaltyFeeManager(): Promise<string> {
        return this.eth_call(functions.royaltyFeeManager, [])
    }

    transferSelectorNFT(): Promise<string> {
        return this.eth_call(functions.transferSelectorNFT, [])
    }

    userMinOrderNonce(arg0: string): Promise<bigint> {
        return this.eth_call(functions.userMinOrderNonce, [arg0])
    }
}
