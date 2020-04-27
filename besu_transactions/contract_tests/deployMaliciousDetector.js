const fs = require("fs");
const path = require("path");

const Web3 = require("web3");
const EEAClient = require("../../src");

const createGroup = require("../besu_privacy_groups/createPrivacyGroup");

const { orion, besu } = require("../keys.js");

const binary = fs.readFileSync(
  path.join(__dirname, "../solidity/MaliciousDetector/Malicious.bin")
);

const web3 = new EEAClient(new Web3(besu.node1.url), 2018);

const createPrivacyGroupIdAll = () => {
  return createGroup.createPrivacyGroupIdAll();
};

const createMaliciousDetectorContract = privacyGroupId => {
  const contractOptions = {
    data: `0x${binary}`,
    privateFrom: orion.node1.publicKey,
    privacyGroupId,
    privateKey: besu.node1.privateKey
  };
  return web3.eea.sendRawTransaction(contractOptions);
};


const getPrivateContractAddress = transactionHash => {
  console.log("Transaction Hash ", transactionHash);
  return web3.priv
    .getTransactionReceipt(transactionHash, orion.node1.publicKey)
    .then(privateTransactionReceipt => {
      console.log("Transaction Receipt\n");
      console.log("{ Malicious Detector Contract Address: '" + privateTransactionReceipt.contractAddress + "',\n");
      console.log("from: '" + privateTransactionReceipt.from + "\n");
      console.log("commitmentHash: '" + privateTransactionReceipt.commitmentHash + "',\n");
      console.log("transactionHash: '" + privateTransactionReceipt.transactionHash + "',\n");
      console.log("privateFrom: '" + privateTransactionReceipt.privateFrom + "',\n");
      console.log("privacyGroupId: '" + privateTransactionReceipt.privacyGroupId + "',\n");
      console.log("status: '" + privateTransactionReceipt.status + "' }\n");

      return privateTransactionReceipt.contractAddress;
    });
};

module.exports = async () => {
  const privacyGroupId = await createPrivacyGroupIdAll();
  const contractAddress = await createMaliciousDetectorContract(privacyGroupId)
    .then(getPrivateContractAddress)
    .catch(console.error);
  return { contractAddress, privacyGroupId };
};

if (require.main === module) {
  module.exports();
}
