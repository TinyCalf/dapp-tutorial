const Web3 = require("web3")
const web3 = new Web3()
web3.setProvider(new Web3.providers.WebsocketProvider("ws://127.0.0.1:8546"))

module.exports = web3
