export type CancelMultipleOrdersData = {
    id: string;
    user: string;
    orderNonces: number[] | null | undefined;
    timestamp:bigint
    chainId: string
  }

  export type CancelAllOrdersData = {
    id: string;
    user: string;
    newMinNonce: bigint;
    timestamp: bigint;
       chainId: string
  }

  export type RoyaltyPaymentData = {
    id: string;
    collection: string;
    tokenId: bigint;
    royaltyRecipient: string;
    currency: string;
    amount: bigint
    timestamp: bigint
       chainId: string
  }

  export type TakerBidData =  {
    id: string
    orderHash: string;
    orderNonce: bigint;
    taker: string;
    maker: string;
    strategy: string;
    currency: string;
    collection: string;
    tokenId: bigint;
    amount: bigint;
    price: bigint;
    timestamp: bigint
    transactionHash: string
    block: bigint
       chainId: string
}

export type TakerAskData =  {
    id: string
    orderHash: string;
    orderNonce: bigint;
    taker: string;
    maker: string;
    strategy: string;
    currency: string;
    collection: string;
    tokenId: bigint;
    amount: bigint;
    price: bigint;
    timestamp: bigint;
    transactionHash: string;
    block: bigint;
       chainId: string
    
}