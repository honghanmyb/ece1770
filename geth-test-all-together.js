var transactionNum = 1000
var sender = eth.accounts[0]
var receiver = eth.accounts[1]
miner.start()
var startTime = Date.now()
for(var i = 0; i < transactionNum; i++){
    var accountArr = personal.listWallets
    for(var j = 0; j < accountArr.length; j++){
        if(accountArr[j].status === "Locked"){
            personal.unlockAccount(accountArr[j].accounts[0].address, "123456", 0)
        }
    }
    var temp = sender
    sender = receiver
    receiver = temp
    eth.sendTransaction({from:sender, to:receiver, value: web3.toWei(1000, "ether")})
}
while(eth.pendingTransactions.length > 0){
    console.log(eth.pendingTransactions.length)
}
var endTime = Date.now()
miner.stop()
console.log(endTime - startTime)