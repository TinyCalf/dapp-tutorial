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

let toAddress = "0xb9c45f4621a913f470a4f36abc7d0c91d3487d1a"


let contractAddress = "0x9f6Eb4e0816D95Bb0b9aE2A8A3912C3e0D6C8116"

let contract = new web3.eth.Contract(abi, contractAddress)
let account = web3.eth.accounts.wallet.add("0x" + prikey)

contract.methods.transfer(toAddress, "10").send({
	from: account.address,
	gas: 150000,
	gasPrice: "0",
})
.then(receipt =>{
	console.log(receipt)
})
