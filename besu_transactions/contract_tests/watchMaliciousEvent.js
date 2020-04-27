const Web3 = require("web3");
const EEAClient = require("../../src");
const MaliciousAbi = require("../smart_contract/MaliciousDetector/MaliciousAbi.json")
  .output.abi;
const maliciousContractAddress = "0x981131Bd8652B2591018243a3C029f77CEFec0Ff";

const { orion, besu } = require("../keys.js");
const detectMaliciousUser = () => {
  const web3 = new EEAClient(new Web3(besu.node1.url), 2018);
web3.eth.defaultAccount = web3.eth.accounts[0];
//console.log(web3.eth.accounts);
//var maliciousContract = web3.eth.contract(MaliciousAbi);
const maliciousContract = new web3.eth.Contract(MaliciousAbi, maliciousContractAddress);
//var malicious = maliciousContract.at(maliciousContractAddress);
var maliciousDetectedEvent = maliciousContract.events.maliciousDetected();
console.log(maliciousContract.events);
var start = new Date;
maliciousContract.getPastEvents('maliciousDetected', {
    //filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events){ 
    //console.log('Privacy Group Id: ' + event.args._privacyGroupId + ' accessed by malicious user address: ' + event.args._userAddress );
    // console.log("event is " + events); 
})
.then(function(events){
    console.log(events) // same results as the optional callback above
    var end = new Date;
    var executionTime = end-start;
    console.log("Execution Time : " + executionTime);
});
}
module.exports = {
    detectMaliciousUser
};
if (require.main === module) {
detectMaliciousUser();
}