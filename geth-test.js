var transactionNum = 1000
var sender = eth.accounts[0]
var receiver = eth.accounts[1]
var transactionEndTime = []
miner.start()
while(transactionEndTime.length <= transactionNum){
    var accountArr = personal.listWallets
    for(var i = 0; i < accountArr.length; i++){
        if(accountArr[i].status === "Locked"){
            personal.unlockAccount(accountArr[i].accounts[0].address, "123456", 0)
        }
    }
    if(eth.pendingTransactions.length == 0){
        var time = Date.now()
        transactionEndTime.push(time)
        var temp = sender
        sender = receiver
        receiver = temp
        eth.sendTransaction({from:sender, to:receiver, value: web3.toWei(1000, "ether")})
        console.log(transactionEndTime.length)
    }
}
miner.stop()
console.log(transactionEndTime)