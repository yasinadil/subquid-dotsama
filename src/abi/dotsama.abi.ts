export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_currencyManager"
            },
            {
                "type": "address",
                "name": "_executionManager"
            },
            {
                "type": "address",
                "name": "_royaltyFeeManager"
            },
            {
                "type": "address",
                "name": "_WETH"
            },
            {
                "type": "address",
                "name": "_protocolFeeRecipient"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "type": "address",
                "name": "target"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressInsufficientBalance",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidShortString",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ]
    },
    {
        "type": "error",
        "name": "StringTooLong",
        "inputs": [
            {
                "type": "string",
                "name": "str"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CancelAllOrders",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newMinNonce",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CancelMultipleOrders",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256[]",
                "name": "orderNonces"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EIP712DomainChanged",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewCurrencyManager",
        "inputs": [
            {
                "type": "address",
                "name": "currencyManager",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewExecutionManager",
        "inputs": [
            {
                "type": "address",
                "name": "executionManager",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewProtocolFeeRecipient",
        "inputs": [
            {
                "type": "address",
                "name": "protocolFeeRecipient",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewRoyaltyFeeManager",
        "inputs": [
            {
                "type": "address",
                "name": "royaltyFeeManager",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewTransferSelectorNFT",
        "inputs": [
            {
                "type": "address",
                "name": "transferSelectorNFT",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoyaltyPayment",
        "inputs": [
            {
                "type": "address",
                "name": "collection",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "royaltyRecipient",
                "indexed": true
            },
            {
                "type": "address",
                "name": "currency",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TakerAsk",
        "inputs": [
            {
                "type": "bytes32",
                "name": "orderHash",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "orderNonce",
                "indexed": false
            },
            {
                "type": "address",
                "name": "taker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "maker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "strategy",
                "indexed": true
            },
            {
                "type": "address",
                "name": "currency",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collection",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "price",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TakerBid",
        "inputs": [
            {
                "type": "bytes32",
                "name": "orderHash",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "orderNonce",
                "indexed": false
            },
            {
                "type": "address",
                "name": "taker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "maker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "strategy",
                "indexed": true
            },
            {
                "type": "address",
                "name": "currency",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collection",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "price",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "WETH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "cancelAllOrdersForSender",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "minNonce"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelMultipleMakerOrders",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "orderNonces"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "currencyManager",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "eip712Domain",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes1",
                "name": "fields"
            },
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "version"
            },
            {
                "type": "uint256",
                "name": "chainId"
            },
            {
                "type": "address",
                "name": "verifyingContract"
            },
            {
                "type": "bytes32",
                "name": "salt"
            },
            {
                "type": "uint256[]",
                "name": "extensions"
            }
        ]
    },
    {
        "type": "function",
        "name": "executionManager",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isUserOrderNonceExecutedOrCancelled",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user"
            },
            {
                "type": "uint256",
                "name": "orderNonce"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "matchAskWithTakerBid",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "takerBid",
                "components": [
                    {
                        "type": "bool",
                        "name": "isOrderAsk"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "minPercentageToAsk"
                    },
                    {
                        "type": "bytes",
                        "name": "params"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerAsk",
                "components": [
                    {
                        "type": "bool",
                        "name": "isOrderAsk"
                    },
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "collection"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "address",
                        "name": "strategy"
                    },
                    {
                        "type": "address",
                        "name": "currency"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    },
                    {
                        "type": "uint256",
                        "name": "minPercentageToAsk"
                    },
                    {
                        "type": "bytes",
                        "name": "params"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "matchAskWithTakerBidUsingETHAndWETH",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "takerBid",
                "components": [
                    {
                        "type": "bool",
                        "name": "isOrderAsk"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "minPercentageToAsk"
                    },
                    {
                        "type": "bytes",
                        "name": "params"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerAsk",
                "components": [
                    {
                        "type": "bool",
                        "name": "isOrderAsk"
                    },
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "collection"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "address",
                        "name": "strategy"
                    },
                    {
                        "type": "address",
                        "name": "currency"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    },
                    {
                        "type": "uint256",
                        "name": "minPercentageToAsk"
                    },
                    {
                        "type": "bytes",
                        "name": "params"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "matchBidWithTakerAsk",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "takerAsk",
                "components": [
                    {
                        "type": "bool",
                        "name": "isOrderAsk"
                    },
                    {
                        "type": "address",
                        "name": "taker"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "minPercentageToAsk"
                    },
                    {
                        "type": "bytes",
                        "name": "params"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "makerBid",
                "components": [
                    {
                        "type": "bool",
                        "name": "isOrderAsk"
                    },
                    {
                        "type": "address",
                        "name": "signer"
                    },
                    {
                        "type": "address",
                        "name": "collection"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "address",
                        "name": "strategy"
                    },
                    {
                        "type": "address",
                        "name": "currency"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "endTime"
                    },
                    {
                        "type": "uint256",
                        "name": "minPercentageToAsk"
                    },
                    {
                        "type": "bytes",
                        "name": "params"
                    },
                    {
                        "type": "uint8",
                        "name": "v"
                    },
                    {
                        "type": "bytes32",
                        "name": "r"
                    },
                    {
                        "type": "bytes32",
                        "name": "s"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "protocolFeeRecipient",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "royaltyFeeManager",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferSelectorNFT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "updateCurrencyManager",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_currencyManager"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateExecutionManager",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_executionManager"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateProtocolFeeRecipient",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_protocolFeeRecipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateRoyaltyFeeManager",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_royaltyFeeManager"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateTransferSelectorNFT",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_transferSelectorNFT"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "userMinOrderNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    }
]
