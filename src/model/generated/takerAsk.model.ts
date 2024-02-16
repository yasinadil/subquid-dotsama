import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class TakerAsk {
    constructor(props?: Partial<TakerAsk>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    orderHash!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    orderNonce!: bigint

    @Column_("text", {nullable: false})
    taker!: string

    @Column_("text", {nullable: false})
    maker!: string

    @Column_("text", {nullable: false})
    strategy!: string

    @Column_("text", {nullable: false})
    currency!: string

    @Column_("text", {nullable: false})
    collection!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    price!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint

    @Column_("text", {nullable: false})
    chainId!: string
}
