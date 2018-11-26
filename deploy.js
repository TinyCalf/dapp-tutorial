const web3 = require("./web3")
const Promise = require("bluebird")

let jsonContract = require("./ERC20.json")
let abi = jsonContract.abi
let bin = jsonContract.bytecode

let initialSupply = "1000000"
let name = "MyToken"
let symbol = "MY"

let prikey = "0ed331e61a5bdabe5dd65f3c298257926f1d8d36da721a5329c282dfa332f231"
let address = "0x6883143b3eE323B7eCA262Fd0Bfe6A3670DE6855"


let deploy = () => {
	return new Promise( (resolve, reject) => {
		let account = web3.eth.accounts.wallet.add("0x" + prikey)
		let transactionHash = ''
		let deployedAddress = ''
		let contract = new web3.eth.Contract(abi)
		console.log("deploying")
		contract.deploy({
			data: bin,
			arguments: [initialSupply, name, symbol]
		})
		.send({
			from : account.address,
			gas: 1500000,
			gasPrice: "0"
		})
		.on("receipt", receipt => {
			transactionHash = receipt.transactionHash
			console.log("TransactionHash : ", transactionHash)
		})
		.then(instance => {
			deployedAddress = instance.options.address
			console.log("ContractAddress:", deployedAddress)
			web3.eth.accounts.wallet.remove(account)
			resolve()
		})
		.catch(reject)
	})
}

deploy()
