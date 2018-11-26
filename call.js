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


let contractAddress = "0x9f6Eb4e0816D95Bb0b9aE2A8A3912C3e0D6C8116"

let contract = new web3.eth.Contract(abi, contractAddress)
contract.methods.name().call()
.then(name => {
	console.log("Name: ",name)
})
		
contract.methods.symbol().call()
.then(ret => {
	console.log("Symbol: ",ret)
})


contract.methods.balanceOf(address).call()
.then(ret => {
	let balance = web3.utils.fromWei(ret, "ether")
	console.log("balance of ", address, "is: ", balance)
})


