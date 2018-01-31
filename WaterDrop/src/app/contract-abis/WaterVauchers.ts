export const WaterVauchers = {
	"contractName": "WaterVouchers",
	"abi": [
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"name": "intermediariesAddresses",
		"outputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "_meter",
			"type": "address"
		  },
		  {
			"name": "_timestampEnd",
			"type": "uint256"
		  }
		],
		"name": "getLastVoucherLitersInMonth",
		"outputs": [
		  {
			"name": "liters",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_newIntermediary",
			"type": "address"
		  }
		],
		"name": "addIntermediary",
		"outputs": [
		  {
			"name": "success",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_intermediaryToRemove",
			"type": "address"
		  }
		],
		"name": "removeIntermediary",
		"outputs": [
		  {
			"name": "success",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "",
			"type": "address"
		  },
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"name": "meterVouchers",
		"outputs": [
		  {
			"name": "",
			"type": "bytes32"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "",
			"type": "uint256"
		  }
		],
		"name": "voucherIds",
		"outputs": [
		  {
			"name": "",
			"type": "bytes32"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_waterGoverningContractAddress",
			"type": "address"
		  }
		],
		"name": "setWaterGoverningContractAddress",
		"outputs": [
		  {
			"name": "success",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"name": "intermediaries",
		"outputs": [
		  {
			"name": "isActive",
			"type": "bool"
		  },
		  {
			"name": "intermediariesArrayIndex",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "waterGoverningContractAddress",
		"outputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_priceEstimatorContractAddress",
			"type": "address"
		  }
		],
		"name": "setPriceEstimatorContractAddress",
		"outputs": [
		  {
			"name": "success",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "priceEstimatorContractAddress",
		"outputs": [
		  {
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "",
			"type": "bytes32"
		  }
		],
		"name": "vouchers",
		"outputs": [
		  {
			"name": "issuer",
			"type": "address"
		  },
		  {
			"name": "liters",
			"type": "uint256"
		  },
		  {
			"name": "meter",
			"type": "address"
		  },
		  {
			"name": "totalPrice",
			"type": "uint256"
		  },
		  {
			"name": "timestamp",
			"type": "uint256"
		  },
		  {
			"name": "voucherIdsArrayIndex",
			"type": "uint256"
		  },
		  {
			"name": "isActive",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"name": "_meter",
			"type": "address"
		  },
		  {
			"name": "_liters",
			"type": "uint256"
		  }
		],
		"name": "estimatePrice",
		"outputs": [
		  {
			"name": "price",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "_voucherId",
			"type": "bytes32"
		  },
		  {
			"name": "_meter",
			"type": "address"
		  },
		  {
			"name": "_liters",
			"type": "uint256"
		  }
		],
		"name": "purchaseVoucher",
		"outputs": [
		  {
			"name": "success",
			"type": "bool"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"name": "_newIntermediary",
			"type": "address"
		  }
		],
		"name": "LogAddIntermediary",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"name": "_intermediaryToRemove",
			"type": "address"
		  }
		],
		"name": "LogRemoveIntermediary",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"name": "_issuer",
			"type": "address"
		  },
		  {
			"indexed": false,
			"name": "_meter",
			"type": "address"
		  },
		  {
			"indexed": false,
			"name": "_voucherId",
			"type": "bytes32"
		  },
		  {
			"indexed": false,
			"name": "_liters",
			"type": "uint256"
		  }
		],
		"name": "LogPurchaseVoucher",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"name": "previousOwner",
			"type": "address"
		  },
		  {
			"indexed": true,
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "OwnershipTransferred",
		"type": "event"
	  }
	],
	"bytecode": "0x6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a0319909116179055610d608061003b6000396000f3006060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630fb4052f81146100ea5780633fba58111461011c5780634356f35b146101505780634d0234041461018357806367609d99146101a25780638da5cb5b146101c4578063ab34ee4f146101d7578063c51c20ff146101ed578063d32b0c451461020c578063da334c5814610245578063db5373ab14610258578063e1556b3314610277578063e4c96ac41461028a578063e5730ffe146102ec578063e6c51f201461030e578063f2fde38b14610333575b600080fd5b34156100f557600080fd5b610100600435610354565b604051600160a060020a03909116815260200160405180910390f35b341561012757600080fd5b61013e600160a060020a036004351660243561037c565b60405190815260200160405180910390f35b341561015b57600080fd5b61016f600160a060020a0360043516610445565b604051901515815260200160405180910390f35b341561018e57600080fd5b61016f600160a060020a0360043516610574565b34156101ad57600080fd5b61013e600160a060020a03600435166024356106ea565b34156101cf57600080fd5b610100610718565b34156101e257600080fd5b61013e600435610727565b34156101f857600080fd5b61016f600160a060020a0360043516610746565b341561021757600080fd5b61022b600160a060020a0360043516610792565b604051911515825260208201526040908101905180910390f35b341561025057600080fd5b6101006107b1565b341561026357600080fd5b61016f600160a060020a03600435166107c0565b341561028257600080fd5b61010061080e565b341561029557600080fd5b6102a060043561081d565b604051600160a060020a0397881681526020810196909652939095166040808601919091526060850192909252608084015260a0830193909352151560c082015260e001905180910390f35b34156102f757600080fd5b61013e600160a060020a036004351660243561086a565b341561031957600080fd5b61016f600435600160a060020a0360243516604435610907565b341561033e57600080fd5b610352600160a060020a0360043516610c4f565b005b600380548290811061036257fe5b600091825260209091200154600160a060020a0316905081565b600160a060020a03821660009081526007602052604081208054829190829015156103aa576000935061043c565b508054600019015b846006600084848154811015156103c557fe5b600091825260208083209091015483528201929092526040019020600401541115610438576006600083838154811015156103fc57fe5b60009182526020808320909101548352820192909252604001902060010154929092019180151561042f5782935061043c565b600019016103b2565b8293505b50505092915050565b6000805433600160a060020a0390811691161461046157600080fd5b600160a060020a038216600090815260046020526040902054829060ff161561048957600080fd5b600160a060020a038316151561049e57600080fd5b60408051908101604090815260018252600354602080840191909152600160a060020a03861660009081526004909152208151815460ff19169015151781556020820151600191820155600380549092509081016104fc8382610cea565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0385161790557fae2b2f8bfc19149992ac6068089b09f0a257ff4eeedb0166d0e4e2d1ba4d63c683604051600160a060020a03909116815260200160405180910390a150600192915050565b60008054819033600160a060020a0390811691161461059257600080fd5b600160a060020a038316600090815260046020526040902054839060ff1615156105bb57600080fd5b600160a060020a03841615156105d057600080fd5b6003805460001981019081106105e257fe5b6000918252602080832090910154600160a060020a038781168452600490925260409092206001015460038054929093169450849291811061062057fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556003805490610669906000198301610cea565b50600160a060020a0380851660008181526004602052604080822060018082015495881684528284200194909455919052815460ff19169091557fd839ffa61d3ed910b7337a017f935faf5be02bd5a69967f30e026f010782110690859051600160a060020a03909116815260200160405180910390a15060019392505050565b60076020528160005260406000208181548110151561070557fe5b6000918252602090912001549150829050565b600054600160a060020a031681565b600580548290811061073557fe5b600091825260209091200154905081565b6000805433600160a060020a0390811691161461076257600080fd5b5060018054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116178155919050565b6004602052600090815260409020805460019091015460ff9091169082565b600154600160a060020a031681565b6000805433600160a060020a039081169116146107dc57600080fd5b5060028054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff199091161790556001919050565b600254600160a060020a031681565b60066020819052600091825260409091208054600182015460028301546003840154600485015460058601549590960154600160a060020a03948516969395949092169390929160ff1687565b600254600090600160a060020a03168063a04bdb64858585604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156108e557600080fd5b6102c65a03f115156108f657600080fd5b505050604051805195945050505050565b600160a060020a0333166000908152600460205260408120548190819060ff16151561093257600080fd5b60008681526006602081905260409091200154869060ff161561095457600080fd5b600160a060020a038616151561096957600080fd5b6000851161097657600080fd5b30600160a060020a031663e5730ffe87876000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156109ec57600080fd5b6102c65a03f115156109fd57600080fd5b50505060405180519050925060e06040519081016040908152600160a060020a0333811683526020808401899052908916828401526060830186905242608084015260055460a0840152600160c084015260008a81526006909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055606082015181600301556080820151816004015560a0820151816005015560c0820151600691909101805460ff1916911515919091179055506005805460018101610b0c8382610cea565b506000918252602080832091909101899055600160a060020a03881682526007905260409020805460018101610b428382610cea565b5060009182526020822001889055600154600160a060020a031692508290633135728a9088908890604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610bcd57600080fd5b6102c65a03f11515610bde57600080fd5b50505060405180519050507f6afcb4971247cd34784ec146e49d413487bc730e60f90879eb0cf32a223a81cf33878988604051600160a060020a0394851681529290931660208301526040808301919091526060820192909252608001905180910390a15060019695505050505050565b60005433600160a060020a03908116911614610c6a57600080fd5b600160a060020a0381161515610c7f57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b815481835581811511610d0e57600083815260209020610d0e918101908301610d13565b505050565b610d3191905b80821115610d2d5760008155600101610d19565b5090565b905600a165627a7a7230582068a06f4b88534fd35bdef4c9f8b1046dc3ef8fb55e9f28d4a6d75028ec4f262d0029",
	"deployedBytecode": "0x6060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630fb4052f81146100ea5780633fba58111461011c5780634356f35b146101505780634d0234041461018357806367609d99146101a25780638da5cb5b146101c4578063ab34ee4f146101d7578063c51c20ff146101ed578063d32b0c451461020c578063da334c5814610245578063db5373ab14610258578063e1556b3314610277578063e4c96ac41461028a578063e5730ffe146102ec578063e6c51f201461030e578063f2fde38b14610333575b600080fd5b34156100f557600080fd5b610100600435610354565b604051600160a060020a03909116815260200160405180910390f35b341561012757600080fd5b61013e600160a060020a036004351660243561037c565b60405190815260200160405180910390f35b341561015b57600080fd5b61016f600160a060020a0360043516610445565b604051901515815260200160405180910390f35b341561018e57600080fd5b61016f600160a060020a0360043516610574565b34156101ad57600080fd5b61013e600160a060020a03600435166024356106ea565b34156101cf57600080fd5b610100610718565b34156101e257600080fd5b61013e600435610727565b34156101f857600080fd5b61016f600160a060020a0360043516610746565b341561021757600080fd5b61022b600160a060020a0360043516610792565b604051911515825260208201526040908101905180910390f35b341561025057600080fd5b6101006107b1565b341561026357600080fd5b61016f600160a060020a03600435166107c0565b341561028257600080fd5b61010061080e565b341561029557600080fd5b6102a060043561081d565b604051600160a060020a0397881681526020810196909652939095166040808601919091526060850192909252608084015260a0830193909352151560c082015260e001905180910390f35b34156102f757600080fd5b61013e600160a060020a036004351660243561086a565b341561031957600080fd5b61016f600435600160a060020a0360243516604435610907565b341561033e57600080fd5b610352600160a060020a0360043516610c4f565b005b600380548290811061036257fe5b600091825260209091200154600160a060020a0316905081565b600160a060020a03821660009081526007602052604081208054829190829015156103aa576000935061043c565b508054600019015b846006600084848154811015156103c557fe5b600091825260208083209091015483528201929092526040019020600401541115610438576006600083838154811015156103fc57fe5b60009182526020808320909101548352820192909252604001902060010154929092019180151561042f5782935061043c565b600019016103b2565b8293505b50505092915050565b6000805433600160a060020a0390811691161461046157600080fd5b600160a060020a038216600090815260046020526040902054829060ff161561048957600080fd5b600160a060020a038316151561049e57600080fd5b60408051908101604090815260018252600354602080840191909152600160a060020a03861660009081526004909152208151815460ff19169015151781556020820151600191820155600380549092509081016104fc8382610cea565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0385161790557fae2b2f8bfc19149992ac6068089b09f0a257ff4eeedb0166d0e4e2d1ba4d63c683604051600160a060020a03909116815260200160405180910390a150600192915050565b60008054819033600160a060020a0390811691161461059257600080fd5b600160a060020a038316600090815260046020526040902054839060ff1615156105bb57600080fd5b600160a060020a03841615156105d057600080fd5b6003805460001981019081106105e257fe5b6000918252602080832090910154600160a060020a038781168452600490925260409092206001015460038054929093169450849291811061062057fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556003805490610669906000198301610cea565b50600160a060020a0380851660008181526004602052604080822060018082015495881684528284200194909455919052815460ff19169091557fd839ffa61d3ed910b7337a017f935faf5be02bd5a69967f30e026f010782110690859051600160a060020a03909116815260200160405180910390a15060019392505050565b60076020528160005260406000208181548110151561070557fe5b6000918252602090912001549150829050565b600054600160a060020a031681565b600580548290811061073557fe5b600091825260209091200154905081565b6000805433600160a060020a0390811691161461076257600080fd5b5060018054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116178155919050565b6004602052600090815260409020805460019091015460ff9091169082565b600154600160a060020a031681565b6000805433600160a060020a039081169116146107dc57600080fd5b5060028054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff199091161790556001919050565b600254600160a060020a031681565b60066020819052600091825260409091208054600182015460028301546003840154600485015460058601549590960154600160a060020a03948516969395949092169390929160ff1687565b600254600090600160a060020a03168063a04bdb64858585604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156108e557600080fd5b6102c65a03f115156108f657600080fd5b505050604051805195945050505050565b600160a060020a0333166000908152600460205260408120548190819060ff16151561093257600080fd5b60008681526006602081905260409091200154869060ff161561095457600080fd5b600160a060020a038616151561096957600080fd5b6000851161097657600080fd5b30600160a060020a031663e5730ffe87876000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156109ec57600080fd5b6102c65a03f115156109fd57600080fd5b50505060405180519050925060e06040519081016040908152600160a060020a0333811683526020808401899052908916828401526060830186905242608084015260055460a0840152600160c084015260008a81526006909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039190911617815560208201518160010155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055606082015181600301556080820151816004015560a0820151816005015560c0820151600691909101805460ff1916911515919091179055506005805460018101610b0c8382610cea565b506000918252602080832091909101899055600160a060020a03881682526007905260409020805460018101610b428382610cea565b5060009182526020822001889055600154600160a060020a031692508290633135728a9088908890604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610bcd57600080fd5b6102c65a03f11515610bde57600080fd5b50505060405180519050507f6afcb4971247cd34784ec146e49d413487bc730e60f90879eb0cf32a223a81cf33878988604051600160a060020a0394851681529290931660208301526040808301919091526060820192909252608001905180910390a15060019695505050505050565b60005433600160a060020a03908116911614610c6a57600080fd5b600160a060020a0381161515610c7f57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b815481835581811511610d0e57600083815260209020610d0e918101908301610d13565b505050565b610d3191905b80821115610d2d5760008155600101610d19565b5090565b905600a165627a7a7230582068a06f4b88534fd35bdef4c9f8b1046dc3ef8fb55e9f28d4a6d75028ec4f262d0029",
	"sourceMap": "149:5136:3:-;;;1692:39;;;;;;;;501:5:5;:18;;-1:-1:-1;;;;;509:10:5;501:18;-1:-1:-1;;;;;;501:18:5;;;;;;149:5136:3;;;;;;",
	"deployedSourceMap": "149:5136:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;387:40;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;387:40:3;;;;;;;;;;;;;;2456:613;;;;;;;;;;-1:-1:-1;;;;;2456:613:3;;;;;;;;;;;;;;;;;;;;;;3075:499;;;;;;;;;;-1:-1:-1;;;;;3075:499:3;;;;;;;;;;;;;;;;;;;;;;3580:725;;;;;;;;;;-1:-1:-1;;;;;3580:725:3;;;;;790:50;;;;;;;;;;-1:-1:-1;;;;;790:50:3;;;;;;;238:20:5;;;;;;;;;;;;708:27:3;;;;;;;;;;;;;;1964:221;;;;;;;;;;-1:-1:-1;;;;;1964:221:3;;;;;433:54;;;;;;;;;;-1:-1:-1;;;;;433:54:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;189:44;;;;;;;;;;;;1737:221;;;;;;;;;;-1:-1:-1;;;;;1737:221:3;;;;;239:44;;;;;;;;;;;;741:43;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;741:43:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2191:259;;;;;;;;;;-1:-1:-1;;;;;2191:259:3;;;;;;;4311:972;;;;;;;;;;;;-1:-1:-1;;;;;4311:972:3;;;;;;;832:169:5;;;;;;;;;;-1:-1:-1;;;;;832:169:5;;;;;;;387:40:3;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;387:40:3;;-1:-1:-1;387:40:3;:::o;2456:613::-;-1:-1:-1;;;;;2646:21:3;;2556:14;2646:21;;;:13;:21;;;;;2690:20;;2556:14;;2646:21;2556:14;;2690:25;2686:64;;;2738:1;2731:8;;;;2686:64;-1:-1:-1;2781:20:3;;-1:-1:-1;;2781:24:3;2760:273;2850:13;2807:8;:30;2816:13;2830:5;2816:20;;;;;;;;;;;;;;;;;;;;;;2807:30;;;;;;;;;;;;:40;;;:56;2760:273;;;2904:8;:30;2913:13;2927:5;2913:20;;;;;;;;;;;;;;;;;;;;;;2904:30;;;;;;;;;;;;:37;;;2888:53;;;;;2959:10;;2955:68;;;2996:12;2989:19;;;;2955:68;-1:-1:-1;;2865:7:3;2760:273;;;3050:12;3043:19;;2456:613;;;;;;;;:::o;3075:499::-;3206:12;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;1253:29:3;;;;;;:14;:29;;;;;:38;3180:16;;1253:38;;1252:39;1244:48;;;;;;-1:-1:-1;;;;;3243:30:3;;;;3235:39;;;;;;3320:122;;;;;;;;;;3357:4;3320:122;;3401:23;:30;3320:122;;;;;;;;-1:-1:-1;;;;;3285:32:3;;3320:122;3285:32;;;:14;:32;;;;3320:122;3285:157;;;-1:-1:-1;;3285:157:3;;;;;;;;;;;;;;;;3452:23;:46;;:23;;-1:-1:-1;3452:46:3;;;;:23;:46;;:::i;:::-;-1:-1:-1;3452:46:3;;;;;;;;;;;-1:-1:-1;;3452:46:3;-1:-1:-1;;;;;3452:46:3;;;;;3509:36;3452:46;3509:36;;-1:-1:-1;;;;;3509:36:3;;;;;;;;;;;;;;-1:-1:-1;3563:4:3;;3075:499;-1:-1:-1;;3075:499:3:o;3580:725::-;3721:12;653:5:5;;3721:12:3;;639:10:5;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;1391:29:3;;;;;;:14;:29;;;;;:38;3690:21;;1391:38;;1383:47;;;;;;;;-1:-1:-1;;;;;3758:35:3;;;;3750:44;;;;;;3830:23;3854:30;;-1:-1:-1;;3854:32:3;;;3830:57;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3921:37:3;;;;;:14;:37;;;;;;;3830:57;3921:62;;3897:23;:87;;3830:57;;;;;-1:-1:-1;3830:57:3;;3897:23;:87;;;;;;;;;;;;;;;:96;;-1:-1:-1;;3897:96:3;-1:-1:-1;;;;;3897:96:3;;;;;;;;;;4003:23;:32;;;;;-1:-1:-1;;4003:32:3;;;:::i;:::-;-1:-1:-1;;;;;;4095:37:3;;;;;;;:14;:37;;;;;;:62;;;;;4045:22;;;;;;;;:47;:112;;;;4167:37;;;:54;;-1:-1:-1;;4167:54:3;;;;4232:44;;4110:21;;4232:44;-1:-1:-1;;;;;4232:44:3;;;;;;;;;;;;;;-1:-1:-1;4294:4:3;;3580:725;-1:-1:-1;;;3580:725:3:o;790:50::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;790:50:3;;-1:-1:-1;790:50:3:o;238:20:5:-;;;-1:-1:-1;;;;;238:20:5;;:::o;708:27:3:-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;708:27:3;:::o;1964:221::-;2071:12;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;2095:29:3;:62;;-1:-1:-1;;;;;2095:62:3;;-1:-1:-1;;2095:62:3;;;;;;1964:221;;;:::o;433:54::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;189:44::-;;;-1:-1:-1;;;;;189:44:3;;:::o;1737:221::-;1844:12;653:5:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;1868:29:3;:62;;-1:-1:-1;;;;;1868:62:3;;-1:-1:-1;;1868:62:3;;;;;;;1737:221;;;:::o;239:44::-;;;-1:-1:-1;;;;;239:44:3;;:::o;741:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;741:43:3;;;;;;;;;;;;;;;;;:::o;2191:259::-;2348:29;;2264:13;;-1:-1:-1;;;;;2348:29:3;;2395:31;2427:6;2435:7;2264:13;2395:48;;;;;;;;;;;;;;-1:-1:-1;;;;;2395:48:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2191:259;-1:-1:-1;;;;;2191:259:3:o;4311:972::-;-1:-1:-1;;;;;1129:10:3;1114:26;4465:12;1114:26;;;:14;:26;;;;;:35;4465:12;;;;1114:35;;1106:44;;;;;;;;1523:18;;;;:8;:18;;;;;;;;:27;;4445:10;;1523:27;;1522:28;1514:37;;;;;;-1:-1:-1;;;;;4543:20:3;;;;4535:29;;;;;;4592:1;4582:11;;4574:20;;;;;;4628:4;-1:-1:-1;;;;;4628:18:3;;4647:6;4655:7;4628:35;;;;;;;;;;;;;;;-1:-1:-1;;;;;4628:35:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4605:58;;4697:254;;;;;;;;;;-1:-1:-1;;;;;4727:10:3;4697:254;;;;;;;;;;;;;;;;;;;;;;;;4856:3;4697:254;;;;4895:10;:17;4697:254;;;;4936:4;4697:254;;;;-1:-1:-1;4674:20:3;;;:8;:20;;;;4697:254;4674:277;;;-1:-1:-1;;4674:277:3;-1:-1:-1;;;;;4674:277:3;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4674:277:3;-1:-1:-1;;;;;4674:277:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4674:277:3;;;;;;;;;;-1:-1:-1;4962:10:3;:27;;-1:-1:-1;4962:27:3;;;:10;:27;;:::i;:::-;-1:-1:-1;4962:27:3;;;;;;;;;;;;;;;-1:-1:-1;;;;;4999:21:3;;;;:13;:21;;;;;:38;;;;;;:21;:38;;:::i;:::-;-1:-1:-1;4999:38:3;;;;;;;;;;;5095:29;;-1:-1:-1;;;;;5095:29:3;;-1:-1:-1;5095:29:3;;5135:24;;5160:6;;5168:7;;5135:41;;;;;;;;;;;;;;-1:-1:-1;;;;;5135:41:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5195:59;5214:10;5226:6;5234:10;5246:7;5195:59;;-1:-1:-1;;;;;5195:59:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5272:4:3;;4311:972;-1:-1:-1;;;;;;4311:972:3:o;832:169:5:-;653:5;;639:10;-1:-1:-1;;;;;639:19:5;;;653:5;;639:19;631:28;;;;;;-1:-1:-1;;;;;908:22:5;;;;900:31;;;;;;958:5;;-1:-1:-1;;;;;937:37:5;;;;958:5;937:37;;;;;;;;;;980:5;:16;;-1:-1:-1;;980:16:5;-1:-1:-1;;;;;980:16:5;;;;;;;;;;832:169::o;149:5136:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o",
	"source": "pragma solidity ^0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./WaterGoverning.sol\";\nimport \"./PriceEstimator.sol\";\n\ncontract WaterVouchers is Ownable {\n    address public waterGoverningContractAddress;\n    address public priceEstimatorContractAddress;\n\n    struct Intermediary {\n        bool isActive;\n        uint256 intermediariesArrayIndex;\n    }\n    address[] public intermediariesAddresses;\n    mapping(address => Intermediary) public intermediaries;\n\n    struct Voucher {\n        address issuer;\n        uint256 liters;\n        address meter;\n        uint256 totalPrice;\n        uint256 timestamp;\n        uint256 voucherIdsArrayIndex;\n        bool isActive;\n    }\n    bytes32[] public voucherIds;\n    mapping(bytes32 => Voucher) public vouchers;\n    mapping(address => bytes32[]) public meterVouchers;\n\n    event LogAddIntermediary(address _newIntermediary);\n    event LogRemoveIntermediary(address _intermediaryToRemove);\n    event LogPurchaseVoucher(address _issuer, address _meter, bytes32 _voucherId, uint256 _liters);\n\n    modifier onlyIntermediary() {\n        require(intermediaries[msg.sender].isActive);\n        _;\n    }\n\n    modifier onlyNotExistingIntermediary(address _intermediary) {\n        require(!intermediaries[_intermediary].isActive);\n        _;\n    }\n\n    modifier onlyExistingIntermediary(address _intermediary) {\n        require(intermediaries[_intermediary].isActive);\n        _;\n    }\n\n    modifier onlyNotExistingVoucher(bytes32 _voucher) {\n        require(!vouchers[_voucher].isActive);\n        _;\n    }\n\n    modifier onlyExistingVoucher(bytes32 _voucher) {\n        require(vouchers[_voucher].isActive);\n        _;\n    }\n\n    function WaterVouchers() public {\n    }\n\n    function setPriceEstimatorContractAddress(address _priceEstimatorContractAddress) public onlyOwner returns(bool success) {\n        priceEstimatorContractAddress = _priceEstimatorContractAddress;\n        return true;\n    }\n\n    function setWaterGoverningContractAddress(address _waterGoverningContractAddress) public onlyOwner returns(bool success) {\n        waterGoverningContractAddress = _waterGoverningContractAddress;\n        return true;\n    }\n\n    function estimatePrice(address _meter, uint _liters) public view returns(uint256 price) {    \n        PriceEstimator priceEstimatorContract = PriceEstimator(priceEstimatorContractAddress);\n        return priceEstimatorContract.estimate(_meter, _liters);\n    }\n\n    function getLastVoucherLitersInMonth(address _meter, uint256 _timestampEnd) public constant returns(uint256 liters) {\n        uint256 resultLiters;\n        bytes32[] storage voucherIdsLoc = meterVouchers[_meter];\n        \n        if (voucherIdsLoc.length == 0) {\n            return 0;\n        }\n\n        for (uint256 index = voucherIdsLoc.length - 1; vouchers[voucherIdsLoc[index]].timestamp > _timestampEnd; index--) {\n            resultLiters += vouchers[voucherIdsLoc[index]].liters;\n            if (index == 0) {\n                return resultLiters;\n            }\n        }\n\n        return resultLiters;\n    }\n\n    function addIntermediary(address _newIntermediary) \n        public onlyOwner onlyNotExistingIntermediary(_newIntermediary) returns(bool success) \n    {\n        require(_newIntermediary != address(0));\n\n        intermediaries[_newIntermediary] = Intermediary({\n            isActive: true,\n            intermediariesArrayIndex: intermediariesAddresses.length\n        });\n        intermediariesAddresses.push(_newIntermediary);\n\n        LogAddIntermediary(_newIntermediary);\n\n        return true;\n    }\n\n    function removeIntermediary(address _intermediaryToRemove) \n        public onlyOwner onlyExistingIntermediary(_intermediaryToRemove) returns(bool success) \n    {\n        require(_intermediaryToRemove != address(0));\n        \n        address lastId = intermediariesAddresses[intermediariesAddresses.length-1];\n        intermediariesAddresses[intermediaries[_intermediaryToRemove].intermediariesArrayIndex] = lastId;\n        intermediariesAddresses.length--;\n        intermediaries[lastId].intermediariesArrayIndex = intermediaries[_intermediaryToRemove].intermediariesArrayIndex;\n        intermediaries[_intermediaryToRemove].isActive = false;\n\n        LogRemoveIntermediary(_intermediaryToRemove);\n\n        return true;\n    }\n\n    function purchaseVoucher(bytes32 _voucherId, address _meter, uint256 _liters) \n        public onlyIntermediary onlyNotExistingVoucher(_voucherId) returns(bool success) \n    {\n        require(_voucherId.length != 0);\n        require(_meter != address(0));\n        require(_liters > 0);\n\n        uint256 currentPrice = this.estimatePrice(_meter, _liters);\n\n        vouchers[_voucherId] = Voucher({\n            issuer: msg.sender,\n            liters: _liters,\n            meter: _meter,\n            totalPrice: currentPrice,\n            timestamp: now,\n            voucherIdsArrayIndex: voucherIds.length,\n            isActive: true\n        });\n\n        voucherIds.push(_voucherId);\n        meterVouchers[_meter].push(_voucherId);\n\n        WaterGoverning waterGoverning = WaterGoverning(waterGoverningContractAddress);\n        waterGoverning.addLiters(_meter, _liters);\n        \n        LogPurchaseVoucher(msg.sender, _meter, _voucherId, _liters);\n\n        return true;\n    }\n}",
	"sourcePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterVouchers.sol",
	"ast": {
	  "attributes": {
		"absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterVouchers.sol",
		"exportedSymbols": {
		  "WaterVouchers": [
			1178
		  ]
		}
	  },
	  "children": [
		{
		  "attributes": {
			"literals": [
			  "solidity",
			  "^",
			  "0.4",
			  ".18"
			]
		  },
		  "id": 712,
		  "name": "PragmaDirective",
		  "src": "0:24:3"
		},
		{
		  "attributes": {
			"SourceUnit": 1333,
			"absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
			"file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
			"scope": 1179,
			"symbolAliases": [
			  null
			],
			"unitAlias": ""
		  },
		  "id": 713,
		  "name": "ImportDirective",
		  "src": "26:59:3"
		},
		{
		  "attributes": {
			"SourceUnit": 711,
			"absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/WaterGoverning.sol",
			"file": "./WaterGoverning.sol",
			"scope": 1179,
			"symbolAliases": [
			  null
			],
			"unitAlias": ""
		  },
		  "id": 714,
		  "name": "ImportDirective",
		  "src": "86:30:3"
		},
		{
		  "attributes": {
			"SourceUnit": 631,
			"absolutePath": "/Users/georgispasov/Development/LimeLabs/CT-hackathon/ct-hackaton-waterdrop-sol/contracts/PriceEstimator.sol",
			"file": "./PriceEstimator.sol",
			"scope": 1179,
			"symbolAliases": [
			  null
			],
			"unitAlias": ""
		  },
		  "id": 715,
		  "name": "ImportDirective",
		  "src": "117:30:3"
		},
		{
		  "attributes": {
			"contractDependencies": [
			  1332
			],
			"contractKind": "contract",
			"documentation": null,
			"fullyImplemented": true,
			"linearizedBaseContracts": [
			  1178,
			  1332
			],
			"name": "WaterVouchers",
			"scope": 1179
		  },
		  "children": [
			{
			  "attributes": {
				"arguments": [
				  null
				]
			  },
			  "children": [
				{
				  "attributes": {
					"contractScope": null,
					"name": "Ownable",
					"referencedDeclaration": 1332,
					"type": "contract Ownable"
				  },
				  "id": 716,
				  "name": "UserDefinedTypeName",
				  "src": "175:7:3"
				}
			  ],
			  "id": 717,
			  "name": "InheritanceSpecifier",
			  "src": "175:7:3"
			},
			{
			  "attributes": {
				"constant": false,
				"name": "waterGoverningContractAddress",
				"scope": 1178,
				"stateVariable": true,
				"storageLocation": "default",
				"type": "address",
				"value": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"name": "address",
					"type": "address"
				  },
				  "id": 718,
				  "name": "ElementaryTypeName",
				  "src": "189:7:3"
				}
			  ],
			  "id": 719,
			  "name": "VariableDeclaration",
			  "src": "189:44:3"
			},
			{
			  "attributes": {
				"constant": false,
				"name": "priceEstimatorContractAddress",
				"scope": 1178,
				"stateVariable": true,
				"storageLocation": "default",
				"type": "address",
				"value": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"name": "address",
					"type": "address"
				  },
				  "id": 720,
				  "name": "ElementaryTypeName",
				  "src": "239:7:3"
				}
			  ],
			  "id": 721,
			  "name": "VariableDeclaration",
			  "src": "239:44:3"
			},
			{
			  "attributes": {
				"canonicalName": "WaterVouchers.Intermediary",
				"name": "Intermediary",
				"scope": 1178,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"constant": false,
					"name": "isActive",
					"scope": 726,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "bool",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "bool",
						"type": "bool"
					  },
					  "id": 722,
					  "name": "ElementaryTypeName",
					  "src": "320:4:3"
					}
				  ],
				  "id": 723,
				  "name": "VariableDeclaration",
				  "src": "320:13:3"
				},
				{
				  "attributes": {
					"constant": false,
					"name": "intermediariesArrayIndex",
					"scope": 726,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "uint256",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "uint256",
						"type": "uint256"
					  },
					  "id": 724,
					  "name": "ElementaryTypeName",
					  "src": "343:7:3"
					}
				  ],
				  "id": 725,
				  "name": "VariableDeclaration",
				  "src": "343:32:3"
				}
			  ],
			  "id": 726,
			  "name": "StructDefinition",
			  "src": "290:92:3"
			},
			{
			  "attributes": {
				"constant": false,
				"name": "intermediariesAddresses",
				"scope": 1178,
				"stateVariable": true,
				"storageLocation": "default",
				"type": "address[] storage ref",
				"value": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"length": null,
					"type": "address[] storage pointer"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "address",
						"type": "address"
					  },
					  "id": 727,
					  "name": "ElementaryTypeName",
					  "src": "387:7:3"
					}
				  ],
				  "id": 728,
				  "name": "ArrayTypeName",
				  "src": "387:9:3"
				}
			  ],
			  "id": 729,
			  "name": "VariableDeclaration",
			  "src": "387:40:3"
			},
			{
			  "attributes": {
				"constant": false,
				"name": "intermediaries",
				"scope": 1178,
				"stateVariable": true,
				"storageLocation": "default",
				"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
				"value": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "address",
						"type": "address"
					  },
					  "id": 730,
					  "name": "ElementaryTypeName",
					  "src": "441:7:3"
					},
					{
					  "attributes": {
						"contractScope": null,
						"name": "Intermediary",
						"referencedDeclaration": 726,
						"type": "struct WaterVouchers.Intermediary storage pointer"
					  },
					  "id": 731,
					  "name": "UserDefinedTypeName",
					  "src": "452:12:3"
					}
				  ],
				  "id": 732,
				  "name": "Mapping",
				  "src": "433:32:3"
				}
			  ],
			  "id": 733,
			  "name": "VariableDeclaration",
			  "src": "433:54:3"
			},
			{
			  "attributes": {
				"canonicalName": "WaterVouchers.Voucher",
				"name": "Voucher",
				"scope": 1178,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"constant": false,
					"name": "issuer",
					"scope": 748,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "address",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "address",
						"type": "address"
					  },
					  "id": 734,
					  "name": "ElementaryTypeName",
					  "src": "519:7:3"
					}
				  ],
				  "id": 735,
				  "name": "VariableDeclaration",
				  "src": "519:14:3"
				},
				{
				  "attributes": {
					"constant": false,
					"name": "liters",
					"scope": 748,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "uint256",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "uint256",
						"type": "uint256"
					  },
					  "id": 736,
					  "name": "ElementaryTypeName",
					  "src": "543:7:3"
					}
				  ],
				  "id": 737,
				  "name": "VariableDeclaration",
				  "src": "543:14:3"
				},
				{
				  "attributes": {
					"constant": false,
					"name": "meter",
					"scope": 748,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "address",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "address",
						"type": "address"
					  },
					  "id": 738,
					  "name": "ElementaryTypeName",
					  "src": "567:7:3"
					}
				  ],
				  "id": 739,
				  "name": "VariableDeclaration",
				  "src": "567:13:3"
				},
				{
				  "attributes": {
					"constant": false,
					"name": "totalPrice",
					"scope": 748,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "uint256",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "uint256",
						"type": "uint256"
					  },
					  "id": 740,
					  "name": "ElementaryTypeName",
					  "src": "590:7:3"
					}
				  ],
				  "id": 741,
				  "name": "VariableDeclaration",
				  "src": "590:18:3"
				},
				{
				  "attributes": {
					"constant": false,
					"name": "timestamp",
					"scope": 748,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "uint256",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "uint256",
						"type": "uint256"
					  },
					  "id": 742,
					  "name": "ElementaryTypeName",
					  "src": "618:7:3"
					}
				  ],
				  "id": 743,
				  "name": "VariableDeclaration",
				  "src": "618:17:3"
				},
				{
				  "attributes": {
					"constant": false,
					"name": "voucherIdsArrayIndex",
					"scope": 748,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "uint256",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "uint256",
						"type": "uint256"
					  },
					  "id": 744,
					  "name": "ElementaryTypeName",
					  "src": "645:7:3"
					}
				  ],
				  "id": 745,
				  "name": "VariableDeclaration",
				  "src": "645:28:3"
				},
				{
				  "attributes": {
					"constant": false,
					"name": "isActive",
					"scope": 748,
					"stateVariable": false,
					"storageLocation": "default",
					"type": "bool",
					"value": null,
					"visibility": "internal"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "bool",
						"type": "bool"
					  },
					  "id": 746,
					  "name": "ElementaryTypeName",
					  "src": "683:4:3"
					}
				  ],
				  "id": 747,
				  "name": "VariableDeclaration",
				  "src": "683:13:3"
				}
			  ],
			  "id": 748,
			  "name": "StructDefinition",
			  "src": "494:209:3"
			},
			{
			  "attributes": {
				"constant": false,
				"name": "voucherIds",
				"scope": 1178,
				"stateVariable": true,
				"storageLocation": "default",
				"type": "bytes32[] storage ref",
				"value": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"length": null,
					"type": "bytes32[] storage pointer"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "bytes32",
						"type": "bytes32"
					  },
					  "id": 749,
					  "name": "ElementaryTypeName",
					  "src": "708:7:3"
					}
				  ],
				  "id": 750,
				  "name": "ArrayTypeName",
				  "src": "708:9:3"
				}
			  ],
			  "id": 751,
			  "name": "VariableDeclaration",
			  "src": "708:27:3"
			},
			{
			  "attributes": {
				"constant": false,
				"name": "vouchers",
				"scope": 1178,
				"stateVariable": true,
				"storageLocation": "default",
				"type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
				"value": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "bytes32",
						"type": "bytes32"
					  },
					  "id": 752,
					  "name": "ElementaryTypeName",
					  "src": "749:7:3"
					},
					{
					  "attributes": {
						"contractScope": null,
						"name": "Voucher",
						"referencedDeclaration": 748,
						"type": "struct WaterVouchers.Voucher storage pointer"
					  },
					  "id": 753,
					  "name": "UserDefinedTypeName",
					  "src": "760:7:3"
					}
				  ],
				  "id": 754,
				  "name": "Mapping",
				  "src": "741:27:3"
				}
			  ],
			  "id": 755,
			  "name": "VariableDeclaration",
			  "src": "741:43:3"
			},
			{
			  "attributes": {
				"constant": false,
				"name": "meterVouchers",
				"scope": 1178,
				"stateVariable": true,
				"storageLocation": "default",
				"type": "mapping(address => bytes32[] storage ref)",
				"value": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"type": "mapping(address => bytes32[] storage ref)"
				  },
				  "children": [
					{
					  "attributes": {
						"name": "address",
						"type": "address"
					  },
					  "id": 756,
					  "name": "ElementaryTypeName",
					  "src": "798:7:3"
					},
					{
					  "attributes": {
						"length": null,
						"type": "bytes32[] storage pointer"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bytes32",
							"type": "bytes32"
						  },
						  "id": 757,
						  "name": "ElementaryTypeName",
						  "src": "809:7:3"
						}
					  ],
					  "id": 758,
					  "name": "ArrayTypeName",
					  "src": "809:9:3"
					}
				  ],
				  "id": 759,
				  "name": "Mapping",
				  "src": "790:29:3"
				}
			  ],
			  "id": 760,
			  "name": "VariableDeclaration",
			  "src": "790:50:3"
			},
			{
			  "attributes": {
				"anonymous": false,
				"name": "LogAddIntermediary"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"indexed": false,
						"name": "_newIntermediary",
						"scope": 764,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 761,
						  "name": "ElementaryTypeName",
						  "src": "872:7:3"
						}
					  ],
					  "id": 762,
					  "name": "VariableDeclaration",
					  "src": "872:24:3"
					}
				  ],
				  "id": 763,
				  "name": "ParameterList",
				  "src": "871:26:3"
				}
			  ],
			  "id": 764,
			  "name": "EventDefinition",
			  "src": "847:51:3"
			},
			{
			  "attributes": {
				"anonymous": false,
				"name": "LogRemoveIntermediary"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"indexed": false,
						"name": "_intermediaryToRemove",
						"scope": 768,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 765,
						  "name": "ElementaryTypeName",
						  "src": "931:7:3"
						}
					  ],
					  "id": 766,
					  "name": "VariableDeclaration",
					  "src": "931:29:3"
					}
				  ],
				  "id": 767,
				  "name": "ParameterList",
				  "src": "930:31:3"
				}
			  ],
			  "id": 768,
			  "name": "EventDefinition",
			  "src": "903:59:3"
			},
			{
			  "attributes": {
				"anonymous": false,
				"name": "LogPurchaseVoucher"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"indexed": false,
						"name": "_issuer",
						"scope": 778,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 769,
						  "name": "ElementaryTypeName",
						  "src": "992:7:3"
						}
					  ],
					  "id": 770,
					  "name": "VariableDeclaration",
					  "src": "992:15:3"
					},
					{
					  "attributes": {
						"constant": false,
						"indexed": false,
						"name": "_meter",
						"scope": 778,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 771,
						  "name": "ElementaryTypeName",
						  "src": "1009:7:3"
						}
					  ],
					  "id": 772,
					  "name": "VariableDeclaration",
					  "src": "1009:14:3"
					},
					{
					  "attributes": {
						"constant": false,
						"indexed": false,
						"name": "_voucherId",
						"scope": 778,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bytes32",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bytes32",
							"type": "bytes32"
						  },
						  "id": 773,
						  "name": "ElementaryTypeName",
						  "src": "1025:7:3"
						}
					  ],
					  "id": 774,
					  "name": "VariableDeclaration",
					  "src": "1025:18:3"
					},
					{
					  "attributes": {
						"constant": false,
						"indexed": false,
						"name": "_liters",
						"scope": 778,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "uint256",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "uint256",
							"type": "uint256"
						  },
						  "id": 775,
						  "name": "ElementaryTypeName",
						  "src": "1045:7:3"
						}
					  ],
					  "id": 776,
					  "name": "VariableDeclaration",
					  "src": "1045:15:3"
					}
				  ],
				  "id": 777,
				  "name": "ParameterList",
				  "src": "991:70:3"
				}
			  ],
			  "id": 778,
			  "name": "EventDefinition",
			  "src": "967:95:3"
			},
			{
			  "attributes": {
				"name": "onlyIntermediary",
				"visibility": "internal"
			  },
			  "children": [
				{
				  "attributes": {
					"parameters": [
					  null
					]
				  },
				  "children": [],
				  "id": 779,
				  "name": "ParameterList",
				  "src": "1093:2:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 780,
							  "name": "Identifier",
							  "src": "1106:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "isActive",
								"referencedDeclaration": 723,
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "struct WaterVouchers.Intermediary storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 733,
										"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
										"value": "intermediaries"
									  },
									  "id": 781,
									  "name": "Identifier",
									  "src": "1114:14:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"isConstant": false,
										"isLValue": false,
										"isPure": false,
										"lValueRequested": false,
										"member_name": "sender",
										"referencedDeclaration": null,
										"type": "address"
									  },
									  "children": [
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 1344,
											"type": "msg",
											"value": "msg"
										  },
										  "id": 782,
										  "name": "Identifier",
										  "src": "1129:3:3"
										}
									  ],
									  "id": 783,
									  "name": "MemberAccess",
									  "src": "1129:10:3"
									}
								  ],
								  "id": 784,
								  "name": "IndexAccess",
								  "src": "1114:26:3"
								}
							  ],
							  "id": 785,
							  "name": "MemberAccess",
							  "src": "1114:35:3"
							}
						  ],
						  "id": 786,
						  "name": "FunctionCall",
						  "src": "1106:44:3"
						}
					  ],
					  "id": 787,
					  "name": "ExpressionStatement",
					  "src": "1106:44:3"
					},
					{
					  "id": 788,
					  "name": "PlaceholderStatement",
					  "src": "1160:1:3"
					}
				  ],
				  "id": 789,
				  "name": "Block",
				  "src": "1096:72:3"
				}
			  ],
			  "id": 790,
			  "name": "ModifierDefinition",
			  "src": "1068:100:3"
			},
			{
			  "attributes": {
				"name": "onlyNotExistingIntermediary",
				"visibility": "internal"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_intermediary",
						"scope": 804,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 791,
						  "name": "ElementaryTypeName",
						  "src": "1211:7:3"
						}
					  ],
					  "id": 792,
					  "name": "VariableDeclaration",
					  "src": "1211:21:3"
					}
				  ],
				  "id": 793,
				  "name": "ParameterList",
				  "src": "1210:23:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 794,
							  "name": "Identifier",
							  "src": "1244:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "!",
								"prefix": true,
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "isActive",
									"referencedDeclaration": 723,
									"type": "bool"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"isConstant": false,
										"isLValue": true,
										"isPure": false,
										"lValueRequested": false,
										"type": "struct WaterVouchers.Intermediary storage ref"
									  },
									  "children": [
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 733,
											"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
											"value": "intermediaries"
										  },
										  "id": 795,
										  "name": "Identifier",
										  "src": "1253:14:3"
										},
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 792,
											"type": "address",
											"value": "_intermediary"
										  },
										  "id": 796,
										  "name": "Identifier",
										  "src": "1268:13:3"
										}
									  ],
									  "id": 797,
									  "name": "IndexAccess",
									  "src": "1253:29:3"
									}
								  ],
								  "id": 798,
								  "name": "MemberAccess",
								  "src": "1253:38:3"
								}
							  ],
							  "id": 799,
							  "name": "UnaryOperation",
							  "src": "1252:39:3"
							}
						  ],
						  "id": 800,
						  "name": "FunctionCall",
						  "src": "1244:48:3"
						}
					  ],
					  "id": 801,
					  "name": "ExpressionStatement",
					  "src": "1244:48:3"
					},
					{
					  "id": 802,
					  "name": "PlaceholderStatement",
					  "src": "1302:1:3"
					}
				  ],
				  "id": 803,
				  "name": "Block",
				  "src": "1234:76:3"
				}
			  ],
			  "id": 804,
			  "name": "ModifierDefinition",
			  "src": "1174:136:3"
			},
			{
			  "attributes": {
				"name": "onlyExistingIntermediary",
				"visibility": "internal"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_intermediary",
						"scope": 817,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 805,
						  "name": "ElementaryTypeName",
						  "src": "1350:7:3"
						}
					  ],
					  "id": 806,
					  "name": "VariableDeclaration",
					  "src": "1350:21:3"
					}
				  ],
				  "id": 807,
				  "name": "ParameterList",
				  "src": "1349:23:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 808,
							  "name": "Identifier",
							  "src": "1383:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "isActive",
								"referencedDeclaration": 723,
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "struct WaterVouchers.Intermediary storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 733,
										"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
										"value": "intermediaries"
									  },
									  "id": 809,
									  "name": "Identifier",
									  "src": "1391:14:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 806,
										"type": "address",
										"value": "_intermediary"
									  },
									  "id": 810,
									  "name": "Identifier",
									  "src": "1406:13:3"
									}
								  ],
								  "id": 811,
								  "name": "IndexAccess",
								  "src": "1391:29:3"
								}
							  ],
							  "id": 812,
							  "name": "MemberAccess",
							  "src": "1391:38:3"
							}
						  ],
						  "id": 813,
						  "name": "FunctionCall",
						  "src": "1383:47:3"
						}
					  ],
					  "id": 814,
					  "name": "ExpressionStatement",
					  "src": "1383:47:3"
					},
					{
					  "id": 815,
					  "name": "PlaceholderStatement",
					  "src": "1440:1:3"
					}
				  ],
				  "id": 816,
				  "name": "Block",
				  "src": "1373:75:3"
				}
			  ],
			  "id": 817,
			  "name": "ModifierDefinition",
			  "src": "1316:132:3"
			},
			{
			  "attributes": {
				"name": "onlyNotExistingVoucher",
				"visibility": "internal"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_voucher",
						"scope": 831,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bytes32",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bytes32",
							"type": "bytes32"
						  },
						  "id": 818,
						  "name": "ElementaryTypeName",
						  "src": "1486:7:3"
						}
					  ],
					  "id": 819,
					  "name": "VariableDeclaration",
					  "src": "1486:16:3"
					}
				  ],
				  "id": 820,
				  "name": "ParameterList",
				  "src": "1485:18:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 821,
							  "name": "Identifier",
							  "src": "1514:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "!",
								"prefix": true,
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "isActive",
									"referencedDeclaration": 747,
									"type": "bool"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"isConstant": false,
										"isLValue": true,
										"isPure": false,
										"lValueRequested": false,
										"type": "struct WaterVouchers.Voucher storage ref"
									  },
									  "children": [
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 755,
											"type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
											"value": "vouchers"
										  },
										  "id": 822,
										  "name": "Identifier",
										  "src": "1523:8:3"
										},
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 819,
											"type": "bytes32",
											"value": "_voucher"
										  },
										  "id": 823,
										  "name": "Identifier",
										  "src": "1532:8:3"
										}
									  ],
									  "id": 824,
									  "name": "IndexAccess",
									  "src": "1523:18:3"
									}
								  ],
								  "id": 825,
								  "name": "MemberAccess",
								  "src": "1523:27:3"
								}
							  ],
							  "id": 826,
							  "name": "UnaryOperation",
							  "src": "1522:28:3"
							}
						  ],
						  "id": 827,
						  "name": "FunctionCall",
						  "src": "1514:37:3"
						}
					  ],
					  "id": 828,
					  "name": "ExpressionStatement",
					  "src": "1514:37:3"
					},
					{
					  "id": 829,
					  "name": "PlaceholderStatement",
					  "src": "1561:1:3"
					}
				  ],
				  "id": 830,
				  "name": "Block",
				  "src": "1504:65:3"
				}
			  ],
			  "id": 831,
			  "name": "ModifierDefinition",
			  "src": "1454:115:3"
			},
			{
			  "attributes": {
				"name": "onlyExistingVoucher",
				"visibility": "internal"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_voucher",
						"scope": 844,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bytes32",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bytes32",
							"type": "bytes32"
						  },
						  "id": 832,
						  "name": "ElementaryTypeName",
						  "src": "1604:7:3"
						}
					  ],
					  "id": 833,
					  "name": "VariableDeclaration",
					  "src": "1604:16:3"
					}
				  ],
				  "id": 834,
				  "name": "ParameterList",
				  "src": "1603:18:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 835,
							  "name": "Identifier",
							  "src": "1632:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "isActive",
								"referencedDeclaration": 747,
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "struct WaterVouchers.Voucher storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 755,
										"type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
										"value": "vouchers"
									  },
									  "id": 836,
									  "name": "Identifier",
									  "src": "1640:8:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 833,
										"type": "bytes32",
										"value": "_voucher"
									  },
									  "id": 837,
									  "name": "Identifier",
									  "src": "1649:8:3"
									}
								  ],
								  "id": 838,
								  "name": "IndexAccess",
								  "src": "1640:18:3"
								}
							  ],
							  "id": 839,
							  "name": "MemberAccess",
							  "src": "1640:27:3"
							}
						  ],
						  "id": 840,
						  "name": "FunctionCall",
						  "src": "1632:36:3"
						}
					  ],
					  "id": 841,
					  "name": "ExpressionStatement",
					  "src": "1632:36:3"
					},
					{
					  "id": 842,
					  "name": "PlaceholderStatement",
					  "src": "1678:1:3"
					}
				  ],
				  "id": 843,
				  "name": "Block",
				  "src": "1622:64:3"
				}
			  ],
			  "id": 844,
			  "name": "ModifierDefinition",
			  "src": "1575:111:3"
			},
			{
			  "attributes": {
				"constant": false,
				"implemented": true,
				"isConstructor": true,
				"modifiers": [
				  null
				],
				"name": "WaterVouchers",
				"payable": false,
				"scope": 1178,
				"stateMutability": "nonpayable",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "attributes": {
					"parameters": [
					  null
					]
				  },
				  "children": [],
				  "id": 845,
				  "name": "ParameterList",
				  "src": "1714:2:3"
				},
				{
				  "attributes": {
					"parameters": [
					  null
					]
				  },
				  "children": [],
				  "id": 846,
				  "name": "ParameterList",
				  "src": "1724:0:3"
				},
				{
				  "attributes": {
					"statements": [
					  null
					]
				  },
				  "children": [],
				  "id": 847,
				  "name": "Block",
				  "src": "1724:7:3"
				}
			  ],
			  "id": 848,
			  "name": "FunctionDefinition",
			  "src": "1692:39:3"
			},
			{
			  "attributes": {
				"constant": false,
				"implemented": true,
				"isConstructor": false,
				"name": "setPriceEstimatorContractAddress",
				"payable": false,
				"scope": 1178,
				"stateMutability": "nonpayable",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_priceEstimatorContractAddress",
						"scope": 864,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 849,
						  "name": "ElementaryTypeName",
						  "src": "1779:7:3"
						}
					  ],
					  "id": 850,
					  "name": "VariableDeclaration",
					  "src": "1779:38:3"
					}
				  ],
				  "id": 851,
				  "name": "ParameterList",
				  "src": "1778:40:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "success",
						"scope": 864,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bool",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bool",
							"type": "bool"
						  },
						  "id": 854,
						  "name": "ElementaryTypeName",
						  "src": "1844:4:3"
						}
					  ],
					  "id": 855,
					  "name": "VariableDeclaration",
					  "src": "1844:12:3"
					}
				  ],
				  "id": 856,
				  "name": "ParameterList",
				  "src": "1843:14:3"
				},
				{
				  "attributes": {
					"arguments": [
					  null
					]
				  },
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 1306,
						"type": "modifier ()",
						"value": "onlyOwner"
					  },
					  "id": 852,
					  "name": "Identifier",
					  "src": "1826:9:3"
					}
				  ],
				  "id": 853,
				  "name": "ModifierInvocation",
				  "src": "1826:9:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "=",
							"type": "address"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 721,
								"type": "address",
								"value": "priceEstimatorContractAddress"
							  },
							  "id": 857,
							  "name": "Identifier",
							  "src": "1868:29:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 850,
								"type": "address",
								"value": "_priceEstimatorContractAddress"
							  },
							  "id": 858,
							  "name": "Identifier",
							  "src": "1900:30:3"
							}
						  ],
						  "id": 859,
						  "name": "Assignment",
						  "src": "1868:62:3"
						}
					  ],
					  "id": 860,
					  "name": "ExpressionStatement",
					  "src": "1868:62:3"
					},
					{
					  "attributes": {
						"functionReturnParameters": 856
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"hexvalue": "74727565",
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"subdenomination": null,
							"token": "bool",
							"type": "bool",
							"value": "true"
						  },
						  "id": 861,
						  "name": "Literal",
						  "src": "1947:4:3"
						}
					  ],
					  "id": 862,
					  "name": "Return",
					  "src": "1940:11:3"
					}
				  ],
				  "id": 863,
				  "name": "Block",
				  "src": "1858:100:3"
				}
			  ],
			  "id": 864,
			  "name": "FunctionDefinition",
			  "src": "1737:221:3"
			},
			{
			  "attributes": {
				"constant": false,
				"implemented": true,
				"isConstructor": false,
				"name": "setWaterGoverningContractAddress",
				"payable": false,
				"scope": 1178,
				"stateMutability": "nonpayable",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_waterGoverningContractAddress",
						"scope": 880,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 865,
						  "name": "ElementaryTypeName",
						  "src": "2006:7:3"
						}
					  ],
					  "id": 866,
					  "name": "VariableDeclaration",
					  "src": "2006:38:3"
					}
				  ],
				  "id": 867,
				  "name": "ParameterList",
				  "src": "2005:40:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "success",
						"scope": 880,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bool",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bool",
							"type": "bool"
						  },
						  "id": 870,
						  "name": "ElementaryTypeName",
						  "src": "2071:4:3"
						}
					  ],
					  "id": 871,
					  "name": "VariableDeclaration",
					  "src": "2071:12:3"
					}
				  ],
				  "id": 872,
				  "name": "ParameterList",
				  "src": "2070:14:3"
				},
				{
				  "attributes": {
					"arguments": [
					  null
					]
				  },
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 1306,
						"type": "modifier ()",
						"value": "onlyOwner"
					  },
					  "id": 868,
					  "name": "Identifier",
					  "src": "2053:9:3"
					}
				  ],
				  "id": 869,
				  "name": "ModifierInvocation",
				  "src": "2053:9:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "=",
							"type": "address"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 719,
								"type": "address",
								"value": "waterGoverningContractAddress"
							  },
							  "id": 873,
							  "name": "Identifier",
							  "src": "2095:29:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 866,
								"type": "address",
								"value": "_waterGoverningContractAddress"
							  },
							  "id": 874,
							  "name": "Identifier",
							  "src": "2127:30:3"
							}
						  ],
						  "id": 875,
						  "name": "Assignment",
						  "src": "2095:62:3"
						}
					  ],
					  "id": 876,
					  "name": "ExpressionStatement",
					  "src": "2095:62:3"
					},
					{
					  "attributes": {
						"functionReturnParameters": 872
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"hexvalue": "74727565",
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"subdenomination": null,
							"token": "bool",
							"type": "bool",
							"value": "true"
						  },
						  "id": 877,
						  "name": "Literal",
						  "src": "2174:4:3"
						}
					  ],
					  "id": 878,
					  "name": "Return",
					  "src": "2167:11:3"
					}
				  ],
				  "id": 879,
				  "name": "Block",
				  "src": "2085:100:3"
				}
			  ],
			  "id": 880,
			  "name": "FunctionDefinition",
			  "src": "1964:221:3"
			},
			{
			  "attributes": {
				"constant": true,
				"implemented": true,
				"isConstructor": false,
				"modifiers": [
				  null
				],
				"name": "estimatePrice",
				"payable": false,
				"scope": 1178,
				"stateMutability": "view",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_meter",
						"scope": 902,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 881,
						  "name": "ElementaryTypeName",
						  "src": "2214:7:3"
						}
					  ],
					  "id": 882,
					  "name": "VariableDeclaration",
					  "src": "2214:14:3"
					},
					{
					  "attributes": {
						"constant": false,
						"name": "_liters",
						"scope": 902,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "uint256",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "uint",
							"type": "uint256"
						  },
						  "id": 883,
						  "name": "ElementaryTypeName",
						  "src": "2230:4:3"
						}
					  ],
					  "id": 884,
					  "name": "VariableDeclaration",
					  "src": "2230:12:3"
					}
				  ],
				  "id": 885,
				  "name": "ParameterList",
				  "src": "2213:30:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "price",
						"scope": 902,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "uint256",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "uint256",
							"type": "uint256"
						  },
						  "id": 886,
						  "name": "ElementaryTypeName",
						  "src": "2264:7:3"
						}
					  ],
					  "id": 887,
					  "name": "VariableDeclaration",
					  "src": "2264:13:3"
					}
				  ],
				  "id": 888,
				  "name": "ParameterList",
				  "src": "2263:15:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"assignments": [
						  890
						]
					  },
					  "children": [
						{
						  "attributes": {
							"constant": false,
							"name": "priceEstimatorContract",
							"scope": 902,
							"stateVariable": false,
							"storageLocation": "default",
							"type": "contract PriceEstimator",
							"value": null,
							"visibility": "internal"
						  },
						  "children": [
							{
							  "attributes": {
								"contractScope": null,
								"name": "PriceEstimator",
								"referencedDeclaration": 630,
								"type": "contract PriceEstimator"
							  },
							  "id": 889,
							  "name": "UserDefinedTypeName",
							  "src": "2293:14:3"
							}
						  ],
						  "id": 890,
						  "name": "VariableDeclaration",
						  "src": "2293:37:3"
						},
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "contract PriceEstimator",
							"type_conversion": true
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 630,
								"type": "type(contract PriceEstimator)",
								"value": "PriceEstimator"
							  },
							  "id": 891,
							  "name": "Identifier",
							  "src": "2333:14:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 721,
								"type": "address",
								"value": "priceEstimatorContractAddress"
							  },
							  "id": 892,
							  "name": "Identifier",
							  "src": "2348:29:3"
							}
						  ],
						  "id": 893,
						  "name": "FunctionCall",
						  "src": "2333:45:3"
						}
					  ],
					  "id": 894,
					  "name": "VariableDeclarationStatement",
					  "src": "2293:85:3"
					},
					{
					  "attributes": {
						"functionReturnParameters": 888
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "uint256",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  },
								  {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								  }
								],
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "estimate",
								"referencedDeclaration": 629,
								"type": "function (address,uint256) view external returns (uint256)"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 890,
									"type": "contract PriceEstimator",
									"value": "priceEstimatorContract"
								  },
								  "id": 895,
								  "name": "Identifier",
								  "src": "2395:22:3"
								}
							  ],
							  "id": 896,
							  "name": "MemberAccess",
							  "src": "2395:31:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 882,
								"type": "address",
								"value": "_meter"
							  },
							  "id": 897,
							  "name": "Identifier",
							  "src": "2427:6:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 884,
								"type": "uint256",
								"value": "_liters"
							  },
							  "id": 898,
							  "name": "Identifier",
							  "src": "2435:7:3"
							}
						  ],
						  "id": 899,
						  "name": "FunctionCall",
						  "src": "2395:48:3"
						}
					  ],
					  "id": 900,
					  "name": "Return",
					  "src": "2388:55:3"
					}
				  ],
				  "id": 901,
				  "name": "Block",
				  "src": "2279:171:3"
				}
			  ],
			  "id": 902,
			  "name": "FunctionDefinition",
			  "src": "2191:259:3"
			},
			{
			  "attributes": {
				"constant": true,
				"implemented": true,
				"isConstructor": false,
				"modifiers": [
				  null
				],
				"name": "getLastVoucherLitersInMonth",
				"payable": false,
				"scope": 1178,
				"stateMutability": "view",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_meter",
						"scope": 969,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 903,
						  "name": "ElementaryTypeName",
						  "src": "2493:7:3"
						}
					  ],
					  "id": 904,
					  "name": "VariableDeclaration",
					  "src": "2493:14:3"
					},
					{
					  "attributes": {
						"constant": false,
						"name": "_timestampEnd",
						"scope": 969,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "uint256",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "uint256",
							"type": "uint256"
						  },
						  "id": 905,
						  "name": "ElementaryTypeName",
						  "src": "2509:7:3"
						}
					  ],
					  "id": 906,
					  "name": "VariableDeclaration",
					  "src": "2509:21:3"
					}
				  ],
				  "id": 907,
				  "name": "ParameterList",
				  "src": "2492:39:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "liters",
						"scope": 969,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "uint256",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "uint256",
							"type": "uint256"
						  },
						  "id": 908,
						  "name": "ElementaryTypeName",
						  "src": "2556:7:3"
						}
					  ],
					  "id": 909,
					  "name": "VariableDeclaration",
					  "src": "2556:14:3"
					}
				  ],
				  "id": 910,
				  "name": "ParameterList",
				  "src": "2555:16:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"assignments": [
						  null
						],
						"initialValue": null
					  },
					  "children": [
						{
						  "attributes": {
							"constant": false,
							"name": "resultLiters",
							"scope": 969,
							"stateVariable": false,
							"storageLocation": "default",
							"type": "uint256",
							"value": null,
							"visibility": "internal"
						  },
						  "children": [
							{
							  "attributes": {
								"name": "uint256",
								"type": "uint256"
							  },
							  "id": 911,
							  "name": "ElementaryTypeName",
							  "src": "2582:7:3"
							}
						  ],
						  "id": 912,
						  "name": "VariableDeclaration",
						  "src": "2582:20:3"
						}
					  ],
					  "id": 913,
					  "name": "VariableDeclarationStatement",
					  "src": "2582:20:3"
					},
					{
					  "attributes": {
						"assignments": [
						  917
						]
					  },
					  "children": [
						{
						  "attributes": {
							"constant": false,
							"name": "voucherIdsLoc",
							"scope": 969,
							"stateVariable": false,
							"storageLocation": "storage",
							"type": "bytes32[] storage pointer",
							"value": null,
							"visibility": "internal"
						  },
						  "children": [
							{
							  "attributes": {
								"length": null,
								"type": "bytes32[] storage pointer"
							  },
							  "children": [
								{
								  "attributes": {
									"name": "bytes32",
									"type": "bytes32"
								  },
								  "id": 915,
								  "name": "ElementaryTypeName",
								  "src": "2612:7:3"
								}
							  ],
							  "id": 916,
							  "name": "ArrayTypeName",
							  "src": "2612:9:3"
							}
						  ],
						  "id": 917,
						  "name": "VariableDeclaration",
						  "src": "2612:31:3"
						},
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"type": "bytes32[] storage ref"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 760,
								"type": "mapping(address => bytes32[] storage ref)",
								"value": "meterVouchers"
							  },
							  "id": 918,
							  "name": "Identifier",
							  "src": "2646:13:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 904,
								"type": "address",
								"value": "_meter"
							  },
							  "id": 919,
							  "name": "Identifier",
							  "src": "2660:6:3"
							}
						  ],
						  "id": 920,
						  "name": "IndexAccess",
						  "src": "2646:21:3"
						}
					  ],
					  "id": 921,
					  "name": "VariableDeclarationStatement",
					  "src": "2612:55:3"
					},
					{
					  "attributes": {
						"falseBody": null
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "==",
							"type": "bool"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "length",
								"referencedDeclaration": null,
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 917,
									"type": "bytes32[] storage pointer",
									"value": "voucherIdsLoc"
								  },
								  "id": 922,
								  "name": "Identifier",
								  "src": "2690:13:3"
								}
							  ],
							  "id": 923,
							  "name": "MemberAccess",
							  "src": "2690:20:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"hexvalue": "30",
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"lValueRequested": false,
								"subdenomination": null,
								"token": "number",
								"type": "int_const 0",
								"value": "0"
							  },
							  "id": 924,
							  "name": "Literal",
							  "src": "2714:1:3"
							}
						  ],
						  "id": 925,
						  "name": "BinaryOperation",
						  "src": "2690:25:3"
						},
						{
						  "children": [
							{
							  "attributes": {
								"functionReturnParameters": 910
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"hexvalue": "30",
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"lValueRequested": false,
									"subdenomination": null,
									"token": "number",
									"type": "int_const 0",
									"value": "0"
								  },
								  "id": 926,
								  "name": "Literal",
								  "src": "2738:1:3"
								}
							  ],
							  "id": 927,
							  "name": "Return",
							  "src": "2731:8:3"
							}
						  ],
						  "id": 928,
						  "name": "Block",
						  "src": "2717:33:3"
						}
					  ],
					  "id": 929,
					  "name": "IfStatement",
					  "src": "2686:64:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"assignments": [
							  931
							]
						  },
						  "children": [
							{
							  "attributes": {
								"constant": false,
								"name": "index",
								"scope": 969,
								"stateVariable": false,
								"storageLocation": "default",
								"type": "uint256",
								"value": null,
								"visibility": "internal"
							  },
							  "children": [
								{
								  "attributes": {
									"name": "uint256",
									"type": "uint256"
								  },
								  "id": 930,
								  "name": "ElementaryTypeName",
								  "src": "2765:7:3"
								}
							  ],
							  "id": 931,
							  "name": "VariableDeclaration",
							  "src": "2765:13:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"commonType": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								},
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "-",
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "length",
									"referencedDeclaration": null,
									"type": "uint256"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 917,
										"type": "bytes32[] storage pointer",
										"value": "voucherIdsLoc"
									  },
									  "id": 932,
									  "name": "Identifier",
									  "src": "2781:13:3"
									}
								  ],
								  "id": 933,
								  "name": "MemberAccess",
								  "src": "2781:20:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"hexvalue": "31",
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"lValueRequested": false,
									"subdenomination": null,
									"token": "number",
									"type": "int_const 1",
									"value": "1"
								  },
								  "id": 934,
								  "name": "Literal",
								  "src": "2804:1:3"
								}
							  ],
							  "id": 935,
							  "name": "BinaryOperation",
							  "src": "2781:24:3"
							}
						  ],
						  "id": 936,
						  "name": "VariableDeclarationStatement",
						  "src": "2765:40:3"
						},
						{
						  "attributes": {
							"argumentTypes": null,
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": ">",
							"type": "bool"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "timestamp",
								"referencedDeclaration": 743,
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "struct WaterVouchers.Voucher storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 755,
										"type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
										"value": "vouchers"
									  },
									  "id": 937,
									  "name": "Identifier",
									  "src": "2807:8:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"isConstant": false,
										"isLValue": true,
										"isPure": false,
										"lValueRequested": false,
										"type": "bytes32"
									  },
									  "children": [
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 917,
											"type": "bytes32[] storage pointer",
											"value": "voucherIdsLoc"
										  },
										  "id": 938,
										  "name": "Identifier",
										  "src": "2816:13:3"
										},
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 931,
											"type": "uint256",
											"value": "index"
										  },
										  "id": 939,
										  "name": "Identifier",
										  "src": "2830:5:3"
										}
									  ],
									  "id": 940,
									  "name": "IndexAccess",
									  "src": "2816:20:3"
									}
								  ],
								  "id": 941,
								  "name": "IndexAccess",
								  "src": "2807:30:3"
								}
							  ],
							  "id": 942,
							  "name": "MemberAccess",
							  "src": "2807:40:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 906,
								"type": "uint256",
								"value": "_timestampEnd"
							  },
							  "id": 943,
							  "name": "Identifier",
							  "src": "2850:13:3"
							}
						  ],
						  "id": 944,
						  "name": "BinaryOperation",
						  "src": "2807:56:3"
						},
						{
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "--",
								"prefix": false,
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 931,
									"type": "uint256",
									"value": "index"
								  },
								  "id": 945,
								  "name": "Identifier",
								  "src": "2865:5:3"
								}
							  ],
							  "id": 946,
							  "name": "UnaryOperation",
							  "src": "2865:7:3"
							}
						  ],
						  "id": 947,
						  "name": "ExpressionStatement",
						  "src": "2865:7:3"
						},
						{
						  "children": [
							{
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"operator": "+=",
									"type": "uint256"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 912,
										"type": "uint256",
										"value": "resultLiters"
									  },
									  "id": 948,
									  "name": "Identifier",
									  "src": "2888:12:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"isConstant": false,
										"isLValue": true,
										"isPure": false,
										"lValueRequested": false,
										"member_name": "liters",
										"referencedDeclaration": 737,
										"type": "uint256"
									  },
									  "children": [
										{
										  "attributes": {
											"argumentTypes": null,
											"isConstant": false,
											"isLValue": true,
											"isPure": false,
											"lValueRequested": false,
											"type": "struct WaterVouchers.Voucher storage ref"
										  },
										  "children": [
											{
											  "attributes": {
												"argumentTypes": null,
												"overloadedDeclarations": [
												  null
												],
												"referencedDeclaration": 755,
												"type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
												"value": "vouchers"
											  },
											  "id": 949,
											  "name": "Identifier",
											  "src": "2904:8:3"
											},
											{
											  "attributes": {
												"argumentTypes": null,
												"isConstant": false,
												"isLValue": true,
												"isPure": false,
												"lValueRequested": false,
												"type": "bytes32"
											  },
											  "children": [
												{
												  "attributes": {
													"argumentTypes": null,
													"overloadedDeclarations": [
													  null
													],
													"referencedDeclaration": 917,
													"type": "bytes32[] storage pointer",
													"value": "voucherIdsLoc"
												  },
												  "id": 950,
												  "name": "Identifier",
												  "src": "2913:13:3"
												},
												{
												  "attributes": {
													"argumentTypes": null,
													"overloadedDeclarations": [
													  null
													],
													"referencedDeclaration": 931,
													"type": "uint256",
													"value": "index"
												  },
												  "id": 951,
												  "name": "Identifier",
												  "src": "2927:5:3"
												}
											  ],
											  "id": 952,
											  "name": "IndexAccess",
											  "src": "2913:20:3"
											}
										  ],
										  "id": 953,
										  "name": "IndexAccess",
										  "src": "2904:30:3"
										}
									  ],
									  "id": 954,
									  "name": "MemberAccess",
									  "src": "2904:37:3"
									}
								  ],
								  "id": 955,
								  "name": "Assignment",
								  "src": "2888:53:3"
								}
							  ],
							  "id": 956,
							  "name": "ExpressionStatement",
							  "src": "2888:53:3"
							},
							{
							  "attributes": {
								"falseBody": null
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"commonType": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									},
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"operator": "==",
									"type": "bool"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 931,
										"type": "uint256",
										"value": "index"
									  },
									  "id": 957,
									  "name": "Identifier",
									  "src": "2959:5:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"hexvalue": "30",
										"isConstant": false,
										"isLValue": false,
										"isPure": true,
										"lValueRequested": false,
										"subdenomination": null,
										"token": "number",
										"type": "int_const 0",
										"value": "0"
									  },
									  "id": 958,
									  "name": "Literal",
									  "src": "2968:1:3"
									}
								  ],
								  "id": 959,
								  "name": "BinaryOperation",
								  "src": "2959:10:3"
								},
								{
								  "children": [
									{
									  "attributes": {
										"functionReturnParameters": 910
									  },
									  "children": [
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 912,
											"type": "uint256",
											"value": "resultLiters"
										  },
										  "id": 960,
										  "name": "Identifier",
										  "src": "2996:12:3"
										}
									  ],
									  "id": 961,
									  "name": "Return",
									  "src": "2989:19:3"
									}
								  ],
								  "id": 962,
								  "name": "Block",
								  "src": "2971:52:3"
								}
							  ],
							  "id": 963,
							  "name": "IfStatement",
							  "src": "2955:68:3"
							}
						  ],
						  "id": 964,
						  "name": "Block",
						  "src": "2874:159:3"
						}
					  ],
					  "id": 965,
					  "name": "ForStatement",
					  "src": "2760:273:3"
					},
					{
					  "attributes": {
						"functionReturnParameters": 910
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"overloadedDeclarations": [
							  null
							],
							"referencedDeclaration": 912,
							"type": "uint256",
							"value": "resultLiters"
						  },
						  "id": 966,
						  "name": "Identifier",
						  "src": "3050:12:3"
						}
					  ],
					  "id": 967,
					  "name": "Return",
					  "src": "3043:19:3"
					}
				  ],
				  "id": 968,
				  "name": "Block",
				  "src": "2572:497:3"
				}
			  ],
			  "id": 969,
			  "name": "FunctionDefinition",
			  "src": "2456:613:3"
			},
			{
			  "attributes": {
				"constant": false,
				"implemented": true,
				"isConstructor": false,
				"name": "addIntermediary",
				"payable": false,
				"scope": 1178,
				"stateMutability": "nonpayable",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_newIntermediary",
						"scope": 1012,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 970,
						  "name": "ElementaryTypeName",
						  "src": "3100:7:3"
						}
					  ],
					  "id": 971,
					  "name": "VariableDeclaration",
					  "src": "3100:24:3"
					}
				  ],
				  "id": 972,
				  "name": "ParameterList",
				  "src": "3099:26:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "success",
						"scope": 1012,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bool",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bool",
							"type": "bool"
						  },
						  "id": 978,
						  "name": "ElementaryTypeName",
						  "src": "3206:4:3"
						}
					  ],
					  "id": 979,
					  "name": "VariableDeclaration",
					  "src": "3206:12:3"
					}
				  ],
				  "id": 980,
				  "name": "ParameterList",
				  "src": "3205:14:3"
				},
				{
				  "attributes": {
					"arguments": [
					  null
					]
				  },
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 1306,
						"type": "modifier ()",
						"value": "onlyOwner"
					  },
					  "id": 973,
					  "name": "Identifier",
					  "src": "3142:9:3"
					}
				  ],
				  "id": 974,
				  "name": "ModifierInvocation",
				  "src": "3142:9:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 804,
						"type": "modifier (address)",
						"value": "onlyNotExistingIntermediary"
					  },
					  "id": 975,
					  "name": "Identifier",
					  "src": "3152:27:3"
					},
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 971,
						"type": "address",
						"value": "_newIntermediary"
					  },
					  "id": 976,
					  "name": "Identifier",
					  "src": "3180:16:3"
					}
				  ],
				  "id": 977,
				  "name": "ModifierInvocation",
				  "src": "3152:45:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 981,
							  "name": "Identifier",
							  "src": "3235:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"commonType": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "!=",
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 971,
									"type": "address",
									"value": "_newIntermediary"
								  },
								  "id": 982,
								  "name": "Identifier",
								  "src": "3243:16:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"isStructConstructorCall": false,
									"lValueRequested": false,
									"names": [
									  null
									],
									"type": "address",
									"type_conversion": true
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": [
										  {
											"typeIdentifier": "t_rational_0_by_1",
											"typeString": "int_const 0"
										  }
										],
										"isConstant": false,
										"isLValue": false,
										"isPure": true,
										"lValueRequested": false,
										"type": "type(address)",
										"value": "address"
									  },
									  "id": 983,
									  "name": "ElementaryTypeNameExpression",
									  "src": "3263:7:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"hexvalue": "30",
										"isConstant": false,
										"isLValue": false,
										"isPure": true,
										"lValueRequested": false,
										"subdenomination": null,
										"token": "number",
										"type": "int_const 0",
										"value": "0"
									  },
									  "id": 984,
									  "name": "Literal",
									  "src": "3271:1:3"
									}
								  ],
								  "id": 985,
								  "name": "FunctionCall",
								  "src": "3263:10:3"
								}
							  ],
							  "id": 986,
							  "name": "BinaryOperation",
							  "src": "3243:30:3"
							}
						  ],
						  "id": 987,
						  "name": "FunctionCall",
						  "src": "3235:39:3"
						}
					  ],
					  "id": 988,
					  "name": "ExpressionStatement",
					  "src": "3235:39:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "=",
							"type": "struct WaterVouchers.Intermediary storage ref"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": true,
								"type": "struct WaterVouchers.Intermediary storage ref"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 733,
									"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
									"value": "intermediaries"
								  },
								  "id": 989,
								  "name": "Identifier",
								  "src": "3285:14:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 971,
									"type": "address",
									"value": "_newIntermediary"
								  },
								  "id": 990,
								  "name": "Identifier",
								  "src": "3300:16:3"
								}
							  ],
							  "id": 991,
							  "name": "IndexAccess",
							  "src": "3285:32:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"isStructConstructorCall": true,
								"lValueRequested": false,
								"names": [
								  "isActive",
								  "intermediariesArrayIndex"
								],
								"type": "struct WaterVouchers.Intermediary memory",
								"type_conversion": false
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 726,
									"type": "type(struct WaterVouchers.Intermediary storage pointer)",
									"value": "Intermediary"
								  },
								  "id": 992,
								  "name": "Identifier",
								  "src": "3320:12:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"hexvalue": "74727565",
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"lValueRequested": false,
									"subdenomination": null,
									"token": "bool",
									"type": "bool",
									"value": "true"
								  },
								  "id": 993,
								  "name": "Literal",
								  "src": "3357:4:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "length",
									"referencedDeclaration": null,
									"type": "uint256"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 729,
										"type": "address[] storage ref",
										"value": "intermediariesAddresses"
									  },
									  "id": 994,
									  "name": "Identifier",
									  "src": "3401:23:3"
									}
								  ],
								  "id": 995,
								  "name": "MemberAccess",
								  "src": "3401:30:3"
								}
							  ],
							  "id": 996,
							  "name": "FunctionCall",
							  "src": "3320:122:3"
							}
						  ],
						  "id": 997,
						  "name": "Assignment",
						  "src": "3285:157:3"
						}
					  ],
					  "id": 998,
					  "name": "ExpressionStatement",
					  "src": "3285:157:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "uint256",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								],
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "push",
								"referencedDeclaration": null,
								"type": "function (address) returns (uint256)"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 729,
									"type": "address[] storage ref",
									"value": "intermediariesAddresses"
								  },
								  "id": 999,
								  "name": "Identifier",
								  "src": "3452:23:3"
								}
							  ],
							  "id": 1001,
							  "name": "MemberAccess",
							  "src": "3452:28:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 971,
								"type": "address",
								"value": "_newIntermediary"
							  },
							  "id": 1002,
							  "name": "Identifier",
							  "src": "3481:16:3"
							}
						  ],
						  "id": 1003,
						  "name": "FunctionCall",
						  "src": "3452:46:3"
						}
					  ],
					  "id": 1004,
					  "name": "ExpressionStatement",
					  "src": "3452:46:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 764,
								"type": "function (address)",
								"value": "LogAddIntermediary"
							  },
							  "id": 1005,
							  "name": "Identifier",
							  "src": "3509:18:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 971,
								"type": "address",
								"value": "_newIntermediary"
							  },
							  "id": 1006,
							  "name": "Identifier",
							  "src": "3528:16:3"
							}
						  ],
						  "id": 1007,
						  "name": "FunctionCall",
						  "src": "3509:36:3"
						}
					  ],
					  "id": 1008,
					  "name": "ExpressionStatement",
					  "src": "3509:36:3"
					},
					{
					  "attributes": {
						"functionReturnParameters": 980
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"hexvalue": "74727565",
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"subdenomination": null,
							"token": "bool",
							"type": "bool",
							"value": "true"
						  },
						  "id": 1009,
						  "name": "Literal",
						  "src": "3563:4:3"
						}
					  ],
					  "id": 1010,
					  "name": "Return",
					  "src": "3556:11:3"
					}
				  ],
				  "id": 1011,
				  "name": "Block",
				  "src": "3225:349:3"
				}
			  ],
			  "id": 1012,
			  "name": "FunctionDefinition",
			  "src": "3075:499:3"
			},
			{
			  "attributes": {
				"constant": false,
				"implemented": true,
				"isConstructor": false,
				"name": "removeIntermediary",
				"payable": false,
				"scope": 1178,
				"stateMutability": "nonpayable",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_intermediaryToRemove",
						"scope": 1079,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 1013,
						  "name": "ElementaryTypeName",
						  "src": "3608:7:3"
						}
					  ],
					  "id": 1014,
					  "name": "VariableDeclaration",
					  "src": "3608:29:3"
					}
				  ],
				  "id": 1015,
				  "name": "ParameterList",
				  "src": "3607:31:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "success",
						"scope": 1079,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bool",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bool",
							"type": "bool"
						  },
						  "id": 1021,
						  "name": "ElementaryTypeName",
						  "src": "3721:4:3"
						}
					  ],
					  "id": 1022,
					  "name": "VariableDeclaration",
					  "src": "3721:12:3"
					}
				  ],
				  "id": 1023,
				  "name": "ParameterList",
				  "src": "3720:14:3"
				},
				{
				  "attributes": {
					"arguments": [
					  null
					]
				  },
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 1306,
						"type": "modifier ()",
						"value": "onlyOwner"
					  },
					  "id": 1016,
					  "name": "Identifier",
					  "src": "3655:9:3"
					}
				  ],
				  "id": 1017,
				  "name": "ModifierInvocation",
				  "src": "3655:9:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 817,
						"type": "modifier (address)",
						"value": "onlyExistingIntermediary"
					  },
					  "id": 1018,
					  "name": "Identifier",
					  "src": "3665:24:3"
					},
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 1014,
						"type": "address",
						"value": "_intermediaryToRemove"
					  },
					  "id": 1019,
					  "name": "Identifier",
					  "src": "3690:21:3"
					}
				  ],
				  "id": 1020,
				  "name": "ModifierInvocation",
				  "src": "3665:47:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 1024,
							  "name": "Identifier",
							  "src": "3750:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"commonType": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "!=",
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1014,
									"type": "address",
									"value": "_intermediaryToRemove"
								  },
								  "id": 1025,
								  "name": "Identifier",
								  "src": "3758:21:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"isStructConstructorCall": false,
									"lValueRequested": false,
									"names": [
									  null
									],
									"type": "address",
									"type_conversion": true
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": [
										  {
											"typeIdentifier": "t_rational_0_by_1",
											"typeString": "int_const 0"
										  }
										],
										"isConstant": false,
										"isLValue": false,
										"isPure": true,
										"lValueRequested": false,
										"type": "type(address)",
										"value": "address"
									  },
									  "id": 1026,
									  "name": "ElementaryTypeNameExpression",
									  "src": "3783:7:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"hexvalue": "30",
										"isConstant": false,
										"isLValue": false,
										"isPure": true,
										"lValueRequested": false,
										"subdenomination": null,
										"token": "number",
										"type": "int_const 0",
										"value": "0"
									  },
									  "id": 1027,
									  "name": "Literal",
									  "src": "3791:1:3"
									}
								  ],
								  "id": 1028,
								  "name": "FunctionCall",
								  "src": "3783:10:3"
								}
							  ],
							  "id": 1029,
							  "name": "BinaryOperation",
							  "src": "3758:35:3"
							}
						  ],
						  "id": 1030,
						  "name": "FunctionCall",
						  "src": "3750:44:3"
						}
					  ],
					  "id": 1031,
					  "name": "ExpressionStatement",
					  "src": "3750:44:3"
					},
					{
					  "attributes": {
						"assignments": [
						  1033
						]
					  },
					  "children": [
						{
						  "attributes": {
							"constant": false,
							"name": "lastId",
							"scope": 1079,
							"stateVariable": false,
							"storageLocation": "default",
							"type": "address",
							"value": null,
							"visibility": "internal"
						  },
						  "children": [
							{
							  "attributes": {
								"name": "address",
								"type": "address"
							  },
							  "id": 1032,
							  "name": "ElementaryTypeName",
							  "src": "3813:7:3"
							}
						  ],
						  "id": 1033,
						  "name": "VariableDeclaration",
						  "src": "3813:14:3"
						},
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"type": "address"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 729,
								"type": "address[] storage ref",
								"value": "intermediariesAddresses"
							  },
							  "id": 1034,
							  "name": "Identifier",
							  "src": "3830:23:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"commonType": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								},
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "-",
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "length",
									"referencedDeclaration": null,
									"type": "uint256"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 729,
										"type": "address[] storage ref",
										"value": "intermediariesAddresses"
									  },
									  "id": 1035,
									  "name": "Identifier",
									  "src": "3854:23:3"
									}
								  ],
								  "id": 1036,
								  "name": "MemberAccess",
								  "src": "3854:30:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"hexvalue": "31",
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"lValueRequested": false,
									"subdenomination": null,
									"token": "number",
									"type": "int_const 1",
									"value": "1"
								  },
								  "id": 1037,
								  "name": "Literal",
								  "src": "3885:1:3"
								}
							  ],
							  "id": 1038,
							  "name": "BinaryOperation",
							  "src": "3854:32:3"
							}
						  ],
						  "id": 1039,
						  "name": "IndexAccess",
						  "src": "3830:57:3"
						}
					  ],
					  "id": 1040,
					  "name": "VariableDeclarationStatement",
					  "src": "3813:74:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "=",
							"type": "address"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": true,
								"type": "address"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 729,
									"type": "address[] storage ref",
									"value": "intermediariesAddresses"
								  },
								  "id": 1041,
								  "name": "Identifier",
								  "src": "3897:23:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "intermediariesArrayIndex",
									"referencedDeclaration": 725,
									"type": "uint256"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"isConstant": false,
										"isLValue": true,
										"isPure": false,
										"lValueRequested": false,
										"type": "struct WaterVouchers.Intermediary storage ref"
									  },
									  "children": [
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 733,
											"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
											"value": "intermediaries"
										  },
										  "id": 1042,
										  "name": "Identifier",
										  "src": "3921:14:3"
										},
										{
										  "attributes": {
											"argumentTypes": null,
											"overloadedDeclarations": [
											  null
											],
											"referencedDeclaration": 1014,
											"type": "address",
											"value": "_intermediaryToRemove"
										  },
										  "id": 1043,
										  "name": "Identifier",
										  "src": "3936:21:3"
										}
									  ],
									  "id": 1044,
									  "name": "IndexAccess",
									  "src": "3921:37:3"
									}
								  ],
								  "id": 1045,
								  "name": "MemberAccess",
								  "src": "3921:62:3"
								}
							  ],
							  "id": 1046,
							  "name": "IndexAccess",
							  "src": "3897:87:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1033,
								"type": "address",
								"value": "lastId"
							  },
							  "id": 1047,
							  "name": "Identifier",
							  "src": "3987:6:3"
							}
						  ],
						  "id": 1048,
						  "name": "Assignment",
						  "src": "3897:96:3"
						}
					  ],
					  "id": 1049,
					  "name": "ExpressionStatement",
					  "src": "3897:96:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "--",
							"prefix": false,
							"type": "uint256"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": true,
								"member_name": "length",
								"referencedDeclaration": null,
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 729,
									"type": "address[] storage ref",
									"value": "intermediariesAddresses"
								  },
								  "id": 1050,
								  "name": "Identifier",
								  "src": "4003:23:3"
								}
							  ],
							  "id": 1052,
							  "name": "MemberAccess",
							  "src": "4003:30:3"
							}
						  ],
						  "id": 1053,
						  "name": "UnaryOperation",
						  "src": "4003:32:3"
						}
					  ],
					  "id": 1054,
					  "name": "ExpressionStatement",
					  "src": "4003:32:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "=",
							"type": "uint256"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": true,
								"member_name": "intermediariesArrayIndex",
								"referencedDeclaration": 725,
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "struct WaterVouchers.Intermediary storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 733,
										"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
										"value": "intermediaries"
									  },
									  "id": 1055,
									  "name": "Identifier",
									  "src": "4045:14:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 1033,
										"type": "address",
										"value": "lastId"
									  },
									  "id": 1056,
									  "name": "Identifier",
									  "src": "4060:6:3"
									}
								  ],
								  "id": 1057,
								  "name": "IndexAccess",
								  "src": "4045:22:3"
								}
							  ],
							  "id": 1058,
							  "name": "MemberAccess",
							  "src": "4045:47:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "intermediariesArrayIndex",
								"referencedDeclaration": 725,
								"type": "uint256"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "struct WaterVouchers.Intermediary storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 733,
										"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
										"value": "intermediaries"
									  },
									  "id": 1059,
									  "name": "Identifier",
									  "src": "4095:14:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 1014,
										"type": "address",
										"value": "_intermediaryToRemove"
									  },
									  "id": 1060,
									  "name": "Identifier",
									  "src": "4110:21:3"
									}
								  ],
								  "id": 1061,
								  "name": "IndexAccess",
								  "src": "4095:37:3"
								}
							  ],
							  "id": 1062,
							  "name": "MemberAccess",
							  "src": "4095:62:3"
							}
						  ],
						  "id": 1063,
						  "name": "Assignment",
						  "src": "4045:112:3"
						}
					  ],
					  "id": 1064,
					  "name": "ExpressionStatement",
					  "src": "4045:112:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "=",
							"type": "bool"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": true,
								"member_name": "isActive",
								"referencedDeclaration": 723,
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "struct WaterVouchers.Intermediary storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 733,
										"type": "mapping(address => struct WaterVouchers.Intermediary storage ref)",
										"value": "intermediaries"
									  },
									  "id": 1065,
									  "name": "Identifier",
									  "src": "4167:14:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 1014,
										"type": "address",
										"value": "_intermediaryToRemove"
									  },
									  "id": 1066,
									  "name": "Identifier",
									  "src": "4182:21:3"
									}
								  ],
								  "id": 1067,
								  "name": "IndexAccess",
								  "src": "4167:37:3"
								}
							  ],
							  "id": 1068,
							  "name": "MemberAccess",
							  "src": "4167:46:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"hexvalue": "66616c7365",
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"lValueRequested": false,
								"subdenomination": null,
								"token": "bool",
								"type": "bool",
								"value": "false"
							  },
							  "id": 1069,
							  "name": "Literal",
							  "src": "4216:5:3"
							}
						  ],
						  "id": 1070,
						  "name": "Assignment",
						  "src": "4167:54:3"
						}
					  ],
					  "id": 1071,
					  "name": "ExpressionStatement",
					  "src": "4167:54:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 768,
								"type": "function (address)",
								"value": "LogRemoveIntermediary"
							  },
							  "id": 1072,
							  "name": "Identifier",
							  "src": "4232:21:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1014,
								"type": "address",
								"value": "_intermediaryToRemove"
							  },
							  "id": 1073,
							  "name": "Identifier",
							  "src": "4254:21:3"
							}
						  ],
						  "id": 1074,
						  "name": "FunctionCall",
						  "src": "4232:44:3"
						}
					  ],
					  "id": 1075,
					  "name": "ExpressionStatement",
					  "src": "4232:44:3"
					},
					{
					  "attributes": {
						"functionReturnParameters": 1023
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"hexvalue": "74727565",
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"subdenomination": null,
							"token": "bool",
							"type": "bool",
							"value": "true"
						  },
						  "id": 1076,
						  "name": "Literal",
						  "src": "4294:4:3"
						}
					  ],
					  "id": 1077,
					  "name": "Return",
					  "src": "4287:11:3"
					}
				  ],
				  "id": 1078,
				  "name": "Block",
				  "src": "3740:565:3"
				}
			  ],
			  "id": 1079,
			  "name": "FunctionDefinition",
			  "src": "3580:725:3"
			},
			{
			  "attributes": {
				"constant": false,
				"implemented": true,
				"isConstructor": false,
				"name": "purchaseVoucher",
				"payable": false,
				"scope": 1178,
				"stateMutability": "nonpayable",
				"superFunction": null,
				"visibility": "public"
			  },
			  "children": [
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "_voucherId",
						"scope": 1177,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bytes32",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bytes32",
							"type": "bytes32"
						  },
						  "id": 1080,
						  "name": "ElementaryTypeName",
						  "src": "4336:7:3"
						}
					  ],
					  "id": 1081,
					  "name": "VariableDeclaration",
					  "src": "4336:18:3"
					},
					{
					  "attributes": {
						"constant": false,
						"name": "_meter",
						"scope": 1177,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "address",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "address",
							"type": "address"
						  },
						  "id": 1082,
						  "name": "ElementaryTypeName",
						  "src": "4356:7:3"
						}
					  ],
					  "id": 1083,
					  "name": "VariableDeclaration",
					  "src": "4356:14:3"
					},
					{
					  "attributes": {
						"constant": false,
						"name": "_liters",
						"scope": 1177,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "uint256",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "uint256",
							"type": "uint256"
						  },
						  "id": 1084,
						  "name": "ElementaryTypeName",
						  "src": "4372:7:3"
						}
					  ],
					  "id": 1085,
					  "name": "VariableDeclaration",
					  "src": "4372:15:3"
					}
				  ],
				  "id": 1086,
				  "name": "ParameterList",
				  "src": "4335:53:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"constant": false,
						"name": "success",
						"scope": 1177,
						"stateVariable": false,
						"storageLocation": "default",
						"type": "bool",
						"value": null,
						"visibility": "internal"
					  },
					  "children": [
						{
						  "attributes": {
							"name": "bool",
							"type": "bool"
						  },
						  "id": 1092,
						  "name": "ElementaryTypeName",
						  "src": "4465:4:3"
						}
					  ],
					  "id": 1093,
					  "name": "VariableDeclaration",
					  "src": "4465:12:3"
					}
				  ],
				  "id": 1094,
				  "name": "ParameterList",
				  "src": "4464:14:3"
				},
				{
				  "attributes": {
					"arguments": [
					  null
					]
				  },
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 790,
						"type": "modifier ()",
						"value": "onlyIntermediary"
					  },
					  "id": 1087,
					  "name": "Identifier",
					  "src": "4405:16:3"
					}
				  ],
				  "id": 1088,
				  "name": "ModifierInvocation",
				  "src": "4405:16:3"
				},
				{
				  "children": [
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 831,
						"type": "modifier (bytes32)",
						"value": "onlyNotExistingVoucher"
					  },
					  "id": 1089,
					  "name": "Identifier",
					  "src": "4422:22:3"
					},
					{
					  "attributes": {
						"argumentTypes": null,
						"overloadedDeclarations": [
						  null
						],
						"referencedDeclaration": 1081,
						"type": "bytes32",
						"value": "_voucherId"
					  },
					  "id": 1090,
					  "name": "Identifier",
					  "src": "4445:10:3"
					}
				  ],
				  "id": 1091,
				  "name": "ModifierInvocation",
				  "src": "4422:34:3"
				},
				{
				  "children": [
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 1095,
							  "name": "Identifier",
							  "src": "4494:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"commonType": {
								  "typeIdentifier": "t_uint8",
								  "typeString": "uint8"
								},
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "!=",
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "length",
									"referencedDeclaration": null,
									"type": "uint8"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 1081,
										"type": "bytes32",
										"value": "_voucherId"
									  },
									  "id": 1096,
									  "name": "Identifier",
									  "src": "4502:10:3"
									}
								  ],
								  "id": 1097,
								  "name": "MemberAccess",
								  "src": "4502:17:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"hexvalue": "30",
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"lValueRequested": false,
									"subdenomination": null,
									"token": "number",
									"type": "int_const 0",
									"value": "0"
								  },
								  "id": 1098,
								  "name": "Literal",
								  "src": "4523:1:3"
								}
							  ],
							  "id": 1099,
							  "name": "BinaryOperation",
							  "src": "4502:22:3"
							}
						  ],
						  "id": 1100,
						  "name": "FunctionCall",
						  "src": "4494:31:3"
						}
					  ],
					  "id": 1101,
					  "name": "ExpressionStatement",
					  "src": "4494:31:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 1102,
							  "name": "Identifier",
							  "src": "4535:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"commonType": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": "!=",
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1083,
									"type": "address",
									"value": "_meter"
								  },
								  "id": 1103,
								  "name": "Identifier",
								  "src": "4543:6:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"isStructConstructorCall": false,
									"lValueRequested": false,
									"names": [
									  null
									],
									"type": "address",
									"type_conversion": true
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": [
										  {
											"typeIdentifier": "t_rational_0_by_1",
											"typeString": "int_const 0"
										  }
										],
										"isConstant": false,
										"isLValue": false,
										"isPure": true,
										"lValueRequested": false,
										"type": "type(address)",
										"value": "address"
									  },
									  "id": 1104,
									  "name": "ElementaryTypeNameExpression",
									  "src": "4553:7:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"hexvalue": "30",
										"isConstant": false,
										"isLValue": false,
										"isPure": true,
										"lValueRequested": false,
										"subdenomination": null,
										"token": "number",
										"type": "int_const 0",
										"value": "0"
									  },
									  "id": 1105,
									  "name": "Literal",
									  "src": "4561:1:3"
									}
								  ],
								  "id": 1106,
								  "name": "FunctionCall",
								  "src": "4553:10:3"
								}
							  ],
							  "id": 1107,
							  "name": "BinaryOperation",
							  "src": "4543:20:3"
							}
						  ],
						  "id": 1108,
						  "name": "FunctionCall",
						  "src": "4535:29:3"
						}
					  ],
					  "id": 1109,
					  "name": "ExpressionStatement",
					  "src": "4535:29:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1347,
								"type": "function (bool) pure",
								"value": "require"
							  },
							  "id": 1110,
							  "name": "Identifier",
							  "src": "4574:7:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"commonType": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								},
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"operator": ">",
								"type": "bool"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1085,
									"type": "uint256",
									"value": "_liters"
								  },
								  "id": 1111,
								  "name": "Identifier",
								  "src": "4582:7:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"hexvalue": "30",
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"lValueRequested": false,
									"subdenomination": null,
									"token": "number",
									"type": "int_const 0",
									"value": "0"
								  },
								  "id": 1112,
								  "name": "Literal",
								  "src": "4592:1:3"
								}
							  ],
							  "id": 1113,
							  "name": "BinaryOperation",
							  "src": "4582:11:3"
							}
						  ],
						  "id": 1114,
						  "name": "FunctionCall",
						  "src": "4574:20:3"
						}
					  ],
					  "id": 1115,
					  "name": "ExpressionStatement",
					  "src": "4574:20:3"
					},
					{
					  "attributes": {
						"assignments": [
						  1117
						]
					  },
					  "children": [
						{
						  "attributes": {
							"constant": false,
							"name": "currentPrice",
							"scope": 1177,
							"stateVariable": false,
							"storageLocation": "default",
							"type": "uint256",
							"value": null,
							"visibility": "internal"
						  },
						  "children": [
							{
							  "attributes": {
								"name": "uint256",
								"type": "uint256"
							  },
							  "id": 1116,
							  "name": "ElementaryTypeName",
							  "src": "4605:7:3"
							}
						  ],
						  "id": 1117,
						  "name": "VariableDeclaration",
						  "src": "4605:20:3"
						},
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "uint256",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  },
								  {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								  }
								],
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "estimatePrice",
								"referencedDeclaration": 902,
								"type": "function (address,uint256) view external returns (uint256)"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1361,
									"type": "contract WaterVouchers",
									"value": "this"
								  },
								  "id": 1118,
								  "name": "Identifier",
								  "src": "4628:4:3"
								}
							  ],
							  "id": 1119,
							  "name": "MemberAccess",
							  "src": "4628:18:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1083,
								"type": "address",
								"value": "_meter"
							  },
							  "id": 1120,
							  "name": "Identifier",
							  "src": "4647:6:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1085,
								"type": "uint256",
								"value": "_liters"
							  },
							  "id": 1121,
							  "name": "Identifier",
							  "src": "4655:7:3"
							}
						  ],
						  "id": 1122,
						  "name": "FunctionCall",
						  "src": "4628:35:3"
						}
					  ],
					  "id": 1123,
					  "name": "VariableDeclarationStatement",
					  "src": "4605:58:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"operator": "=",
							"type": "struct WaterVouchers.Voucher storage ref"
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": true,
								"type": "struct WaterVouchers.Voucher storage ref"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 755,
									"type": "mapping(bytes32 => struct WaterVouchers.Voucher storage ref)",
									"value": "vouchers"
								  },
								  "id": 1124,
								  "name": "Identifier",
								  "src": "4674:8:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1081,
									"type": "bytes32",
									"value": "_voucherId"
								  },
								  "id": 1125,
								  "name": "Identifier",
								  "src": "4683:10:3"
								}
							  ],
							  "id": 1126,
							  "name": "IndexAccess",
							  "src": "4674:20:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"isStructConstructorCall": true,
								"lValueRequested": false,
								"names": [
								  "issuer",
								  "liters",
								  "meter",
								  "totalPrice",
								  "timestamp",
								  "voucherIdsArrayIndex",
								  "isActive"
								],
								"type": "struct WaterVouchers.Voucher memory",
								"type_conversion": false
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 748,
									"type": "type(struct WaterVouchers.Voucher storage pointer)",
									"value": "Voucher"
								  },
								  "id": 1127,
								  "name": "Identifier",
								  "src": "4697:7:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "sender",
									"referencedDeclaration": null,
									"type": "address"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 1344,
										"type": "msg",
										"value": "msg"
									  },
									  "id": 1128,
									  "name": "Identifier",
									  "src": "4727:3:3"
									}
								  ],
								  "id": 1129,
								  "name": "MemberAccess",
								  "src": "4727:10:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1085,
									"type": "uint256",
									"value": "_liters"
								  },
								  "id": 1130,
								  "name": "Identifier",
								  "src": "4759:7:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1083,
									"type": "address",
									"value": "_meter"
								  },
								  "id": 1131,
								  "name": "Identifier",
								  "src": "4787:6:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1117,
									"type": "uint256",
									"value": "currentPrice"
								  },
								  "id": 1132,
								  "name": "Identifier",
								  "src": "4819:12:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1346,
									"type": "uint256",
									"value": "now"
								  },
								  "id": 1133,
								  "name": "Identifier",
								  "src": "4856:3:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"member_name": "length",
									"referencedDeclaration": null,
									"type": "uint256"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 751,
										"type": "bytes32[] storage ref",
										"value": "voucherIds"
									  },
									  "id": 1134,
									  "name": "Identifier",
									  "src": "4895:10:3"
									}
								  ],
								  "id": 1135,
								  "name": "MemberAccess",
								  "src": "4895:17:3"
								},
								{
								  "attributes": {
									"argumentTypes": null,
									"hexvalue": "74727565",
									"isConstant": false,
									"isLValue": false,
									"isPure": true,
									"lValueRequested": false,
									"subdenomination": null,
									"token": "bool",
									"type": "bool",
									"value": "true"
								  },
								  "id": 1136,
								  "name": "Literal",
								  "src": "4936:4:3"
								}
							  ],
							  "id": 1137,
							  "name": "FunctionCall",
							  "src": "4697:254:3"
							}
						  ],
						  "id": 1138,
						  "name": "Assignment",
						  "src": "4674:277:3"
						}
					  ],
					  "id": 1139,
					  "name": "ExpressionStatement",
					  "src": "4674:277:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "uint256",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bytes32",
									"typeString": "bytes32"
								  }
								],
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "push",
								"referencedDeclaration": null,
								"type": "function (bytes32) returns (uint256)"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 751,
									"type": "bytes32[] storage ref",
									"value": "voucherIds"
								  },
								  "id": 1140,
								  "name": "Identifier",
								  "src": "4962:10:3"
								}
							  ],
							  "id": 1142,
							  "name": "MemberAccess",
							  "src": "4962:15:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1081,
								"type": "bytes32",
								"value": "_voucherId"
							  },
							  "id": 1143,
							  "name": "Identifier",
							  "src": "4978:10:3"
							}
						  ],
						  "id": 1144,
						  "name": "FunctionCall",
						  "src": "4962:27:3"
						}
					  ],
					  "id": 1145,
					  "name": "ExpressionStatement",
					  "src": "4962:27:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "uint256",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_bytes32",
									"typeString": "bytes32"
								  }
								],
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "push",
								"referencedDeclaration": null,
								"type": "function (bytes32) returns (uint256)"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"isConstant": false,
									"isLValue": true,
									"isPure": false,
									"lValueRequested": false,
									"type": "bytes32[] storage ref"
								  },
								  "children": [
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 760,
										"type": "mapping(address => bytes32[] storage ref)",
										"value": "meterVouchers"
									  },
									  "id": 1146,
									  "name": "Identifier",
									  "src": "4999:13:3"
									},
									{
									  "attributes": {
										"argumentTypes": null,
										"overloadedDeclarations": [
										  null
										],
										"referencedDeclaration": 1083,
										"type": "address",
										"value": "_meter"
									  },
									  "id": 1147,
									  "name": "Identifier",
									  "src": "5013:6:3"
									}
								  ],
								  "id": 1148,
								  "name": "IndexAccess",
								  "src": "4999:21:3"
								}
							  ],
							  "id": 1149,
							  "name": "MemberAccess",
							  "src": "4999:26:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1081,
								"type": "bytes32",
								"value": "_voucherId"
							  },
							  "id": 1150,
							  "name": "Identifier",
							  "src": "5026:10:3"
							}
						  ],
						  "id": 1151,
						  "name": "FunctionCall",
						  "src": "4999:38:3"
						}
					  ],
					  "id": 1152,
					  "name": "ExpressionStatement",
					  "src": "4999:38:3"
					},
					{
					  "attributes": {
						"assignments": [
						  1154
						]
					  },
					  "children": [
						{
						  "attributes": {
							"constant": false,
							"name": "waterGoverning",
							"scope": 1177,
							"stateVariable": false,
							"storageLocation": "default",
							"type": "contract WaterGoverning",
							"value": null,
							"visibility": "internal"
						  },
						  "children": [
							{
							  "attributes": {
								"contractScope": null,
								"name": "WaterGoverning",
								"referencedDeclaration": 710,
								"type": "contract WaterGoverning"
							  },
							  "id": 1153,
							  "name": "UserDefinedTypeName",
							  "src": "5048:14:3"
							}
						  ],
						  "id": 1154,
						  "name": "VariableDeclaration",
						  "src": "5048:29:3"
						},
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "contract WaterGoverning",
							"type_conversion": true
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 710,
								"type": "type(contract WaterGoverning)",
								"value": "WaterGoverning"
							  },
							  "id": 1155,
							  "name": "Identifier",
							  "src": "5080:14:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 719,
								"type": "address",
								"value": "waterGoverningContractAddress"
							  },
							  "id": 1156,
							  "name": "Identifier",
							  "src": "5095:29:3"
							}
						  ],
						  "id": 1157,
						  "name": "FunctionCall",
						  "src": "5080:45:3"
						}
					  ],
					  "id": 1158,
					  "name": "VariableDeclarationStatement",
					  "src": "5048:77:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "bool",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  },
								  {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								  }
								],
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "addLiters",
								"referencedDeclaration": 709,
								"type": "function (address,uint256) external returns (bool)"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1154,
									"type": "contract WaterGoverning",
									"value": "waterGoverning"
								  },
								  "id": 1159,
								  "name": "Identifier",
								  "src": "5135:14:3"
								}
							  ],
							  "id": 1161,
							  "name": "MemberAccess",
							  "src": "5135:24:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1083,
								"type": "address",
								"value": "_meter"
							  },
							  "id": 1162,
							  "name": "Identifier",
							  "src": "5160:6:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1085,
								"type": "uint256",
								"value": "_liters"
							  },
							  "id": 1163,
							  "name": "Identifier",
							  "src": "5168:7:3"
							}
						  ],
						  "id": 1164,
						  "name": "FunctionCall",
						  "src": "5135:41:3"
						}
					  ],
					  "id": 1165,
					  "name": "ExpressionStatement",
					  "src": "5135:41:3"
					},
					{
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"isStructConstructorCall": false,
							"lValueRequested": false,
							"names": [
							  null
							],
							"type": "tuple()",
							"type_conversion": false
						  },
						  "children": [
							{
							  "attributes": {
								"argumentTypes": [
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  },
								  {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  },
								  {
									"typeIdentifier": "t_bytes32",
									"typeString": "bytes32"
								  },
								  {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								  }
								],
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 778,
								"type": "function (address,address,bytes32,uint256)",
								"value": "LogPurchaseVoucher"
							  },
							  "id": 1166,
							  "name": "Identifier",
							  "src": "5195:18:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"member_name": "sender",
								"referencedDeclaration": null,
								"type": "address"
							  },
							  "children": [
								{
								  "attributes": {
									"argumentTypes": null,
									"overloadedDeclarations": [
									  null
									],
									"referencedDeclaration": 1344,
									"type": "msg",
									"value": "msg"
								  },
								  "id": 1167,
								  "name": "Identifier",
								  "src": "5214:3:3"
								}
							  ],
							  "id": 1168,
							  "name": "MemberAccess",
							  "src": "5214:10:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1083,
								"type": "address",
								"value": "_meter"
							  },
							  "id": 1169,
							  "name": "Identifier",
							  "src": "5226:6:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1081,
								"type": "bytes32",
								"value": "_voucherId"
							  },
							  "id": 1170,
							  "name": "Identifier",
							  "src": "5234:10:3"
							},
							{
							  "attributes": {
								"argumentTypes": null,
								"overloadedDeclarations": [
								  null
								],
								"referencedDeclaration": 1085,
								"type": "uint256",
								"value": "_liters"
							  },
							  "id": 1171,
							  "name": "Identifier",
							  "src": "5246:7:3"
							}
						  ],
						  "id": 1172,
						  "name": "FunctionCall",
						  "src": "5195:59:3"
						}
					  ],
					  "id": 1173,
					  "name": "ExpressionStatement",
					  "src": "5195:59:3"
					},
					{
					  "attributes": {
						"functionReturnParameters": 1094
					  },
					  "children": [
						{
						  "attributes": {
							"argumentTypes": null,
							"hexvalue": "74727565",
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"subdenomination": null,
							"token": "bool",
							"type": "bool",
							"value": "true"
						  },
						  "id": 1174,
						  "name": "Literal",
						  "src": "5272:4:3"
						}
					  ],
					  "id": 1175,
					  "name": "Return",
					  "src": "5265:11:3"
					}
				  ],
				  "id": 1176,
				  "name": "Block",
				  "src": "4484:799:3"
				}
			  ],
			  "id": 1177,
			  "name": "FunctionDefinition",
			  "src": "4311:972:3"
			}
		  ],
		  "id": 1178,
		  "name": "ContractDefinition",
		  "src": "149:5136:3"
		}
	  ],
	  "id": 1179,
	  "name": "SourceUnit",
	  "src": "0:5285:3"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
	},
	"networks": {
	  "5777": {
		"events": {},
		"links": {},
		"address": "0x9fbda871d559710256a2502a2517b794b482db40"
	  },
	  "1517395492641": {
		"events": {},
		"links": {},
		"address": "0x305b8dda35b2e9b395e63ad7b4e845859ab3ab4e"
	  }
	},
	"schemaVersion": "1.0.1",
	"updatedAt": "2018-01-31T11:32:08.858Z"
  }