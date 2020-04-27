const Web3 = require("web3");
const EEAClient = require("../../src");
const { orion, besu } = require("../keys.js");

const web3 = new EEAClient(new Web3(besu.node1.url), 2018);

const createPrivacyGroupIdAll = () => {
  const contractOptions = {
    addresses: [orion.node1.publicKey, orion.node2.publicKey, orion.node3.publicKey, orion.node4.publicKey, orion.node5.publicKey, orion.node6.publicKey, orion.node7.publicKey, orion.node8.publicKey, orion.node9.publicKey, orion.node10.publicKey, orion.node11.publicKey, orion.node12.publicKey],
    name: "web3js-eea",
    description: "PrivateAll"
  };
  return web3.priv.createPrivacyGroup(contractOptions).then(result => {
    console.log(`The privacy group created for all nodes:`, result);
    return result;
  });
};

const createPrivacyGroupLoan1 = () => {
  const contractOptions = {
    addresses: [orion.node1.publicKey, orion.node2.publicKey, orion.node3.publicKey, orion.node4.publicKey,orion.node5.publicKey,orion.node6.publicKey,orion.node7.publicKey,orion.node8.publicKey],
    name: "PrivacyGroupLoan1",
    description: "Privacy Loan Group 1"
  };
  return web3.priv.createPrivacyGroup(contractOptions).then(result => {
    console.log(`The privacy group created is:`, result);
    return result;
  });
};


const createPrivacyGroupLoan2 = () => {
  const contractOptions = {
    addresses: [orion.node1.publicKey, orion.node5.publicKey, orion.node6.publicKey, orion.node7.publicKey,orion.node9.publicKey,orion.node10.publicKey,orion.node11.publicKey,orion.node12.publicKey],
    name: "PrivacyGroupLoan2",
    description: "Privacy Loan Group 2"
  };
  return web3.priv.createPrivacyGroup(contractOptions).then(result => {
    console.log(`The privacy group created is:`, result);
    return result;
  });
};




const createPrivacyGroupForNode123 = () => {
  const contractOptions = {
    addresses: [
      orion.node1.publicKey,
      orion.node2.publicKey,
      orion.node3.publicKey
    ],
    name: "web3js-eea",
    description: "test"
  };
  return web3.priv.createPrivacyGroup(contractOptions).then(result => {
    console.log(`The privacy group created is:`, result);
    return result;
  });
};



const createPrivacyGroupForNodeTest = () => {
  const contractOptions = {
    addresses: [
      orion.node1.publicKey,
      orion.node2.publicKey,
      orion.node3.publicKey
     
    ],
    name: "web3js-eea",
    description: "test"
  };
  return web3.priv.createPrivacyGroup(contractOptions).then(result => {
    console.log(`The privacy group created with three nodes :`, result);
    return result;
  });
};

module.exports = {
  createPrivacyGroupIdAll,
  createPrivacyGroupForNode123,
  createPrivacyGroupLoan1,
  createPrivacyGroupLoan2,
  createPrivacyGroupForNodeTest
};

if (require.main === module) {
  createPrivacyGroupIdAll();
}
