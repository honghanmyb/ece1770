const transactionNum = 1000
let sender = eth.accounts[0]
let receiver = eth.accounts[1]
const transactionEndTime = []
miner.start()
while(transactionEndTime.length <= transactionNum){
    const accountArr = personal.listWallets
    for(let i = 0; i < accountArr.length; i++){
        if(accountArr[i].status === "Locked"){
            personal.unlockAccount(accountArr[i].accounts[0].address, "123456")
        }
    }
    if(eth.pendingTransactions.length == 0){
        const time = Date.now()
        transactionEndTime.push(time)
        let temp = sender
        sender = receiver
        receiver = temp
        eth.sendTransaction({from:sender, to:receiver, value: web3.toWei(1000, "ether")})
    }
}
miner.stop()
console.log(transactionEndTime)