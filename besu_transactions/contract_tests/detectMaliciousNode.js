const Web3 = require("web3");
const EEAClient = require("../../src");
const MaliciousAbi = require("../smart_contract/MaliciousDetector/MaliciousAbi.json")
  .output.abi;


const { orion, besu } = require("../keys.js");


const addPrivacyGroupMember = (maliciousContractAddress, privacyGroupIdAll, privacyGroupId, groupName, userAddress) => {
  const web3 = new EEAClient(new Web3(besu.node1.url), 2018);
  const contract = new web3.eth.Contract(MaliciousAbi);

  // eslint-disable-next-line no-underscore-dangle
  const functionAbi = contract._jsonInterface.find(e => {
    return e.name === "addPrivacyGroupMember";
  });
  const functionArgs = web3.eth.abi
    .encodeParameters(functionAbi.inputs, [privacyGroupId, groupName, userAddress])
    ;

  const functionCall = {
    to: maliciousContractAddress,
    data: functionAbi.signature + functionArgs,
    privateFrom: orion.node1.publicKey,
    privacyGroupIdAll,
    privateKey: besu.node1.privateKey
    
  };

  console.log(functionCall);

  return web3.eea
    .sendRawTransaction(functionCall)
    .then(transactionHash => {
      console.log("Transaction hash for `addPrivacyGroupMember` :", transactionHash);
      return web3.priv.getTransactionReceipt(
        transactionHash,
        orion.node1.publicKey
      );
    })
    .then(result => {
      console.log("Privacy group id :", result.privacyGroupId);
      console.log("Private smart contract address :", result.logs[0].address);
      return result;
    })
    .catch(console.error());
};



const getPrivacyGroupMembersCount = (maliciousContractAddress, privacyGroupIdAll) => {
  const web3 = new EEAClient(new Web3(besu.node1.url), 2018);
  const contract = new web3.eth.Contract(MaliciousAbi);

  // eslint-disable-next-line no-underscore-dangle
  const functionAbi = contract._jsonInterface.find(e => {
    return e.name === "getPrivacyGroupMembersCount";
  });
 
  const functionCall = {
    to: maliciousContractAddress,
    data: functionAbi.signature ,
    privateFrom: orion.node1.publicKey,
    privacyGroupIdAll,
    privateKey: besu.node1.privateKey
    
  };
  console.log(functionCall);

  return web3.eea
    .sendRawTransaction(functionCall)
    .then(transactionHash => {
      console.log("Transaction hash for `getPrivacyGroupMembersCount` :", transactionHash);
      return web3.priv.getTransactionReceipt(
        transactionHash,
        orion.node1.publicKey
      );
    })
    .then(result => {
      console.log("Privacy group id :", result.privacyGroupId);
      console.log("Private smart contract address :", result.logs[0].address);
      return result;
    })
    .catch(console.error());
};



const getValue = (url, address, privateFrom, privacyGroupId, privateKey) => {
  const web3 = new EEAClient(new Web3(url), 2018);
  const contract = new web3.eth.Contract(MaliciousAbi);

  // eslint-disable-next-line no-underscore-dangle
  const functionAbi = contract._jsonInterface.find(e => {
    return e.name === "getPrivacyGroupMembersCount";
  });

  const functionCall = {
    to: address,
    data: functionAbi.signature,
    privateFrom,
    privacyGroupId,
    privateKey
  };

  return web3.eea
    .sendRawTransaction(functionCall)
    .then(transactionHash => {
      return web3.priv.getTransactionReceipt(
        transactionHash,
        orion.node1.publicKey
      );
    })
    .then(result => {
      console.log(`Data from ${url}:`, result.output);
      return result;
    })
    .catch(console.error);
};

const getValueFromNode1 = (address, privacyGroupId) => {
  return getValue(
    besu.node1.url,
    address,
    orion.node1.publicKey,
    privacyGroupId,
    besu.node1.privateKey
  );
};

const getValueFromNode2 = (address, privacyGroupId) => {
  console.log("Data from " + besu.node2.url + ":" );
  return getValue(
    besu.node2.url,
    address,
    orion.node2.publicKey,
    privacyGroupId,
    besu.node2.privateKey
  );
};

const getValueFromNode3 = (address, privacyGroupId) => {
  console.log("Data from " + besu.node3.url + ":" );
  return getValue(
    besu.node3.url,
    address,
    orion.node3.publicKey,
    privacyGroupId,
    besu.node3.privateKey
  );
};
const getValueFromNode4 = (address, privacyGroupId) => {
  console.log("Data from " + besu.node4.url + ":" );
  return getValue(
    besu.node4.url,
    address,
    orion.node4.publicKey,
    privacyGroupId,
    besu.node4.privateKey
  );
};

const getValueFromNode5 = (address, privacyGroupId) => {
  return getValue(
    besu.node5.url,
    address,
    orion.node5.publicKey,
    privacyGroupId,
    besu.node5.privateKey
  );
};
const getValueFromNode6 = (address, privacyGroupId) => {
  return getValue(
    besu.node6.url,
    address,
    orion.node6.publicKey,
    privacyGroupId,
    besu.node6.privateKey
  );
};
const getValueFromNode7 = (address, privacyGroupId) => {
  return getValue(
    besu.node7.url,
    address,
    orion.node7.publicKey,
    privacyGroupId,
    besu.node7.privateKey
  );
};
const getValueFromNode8 = (address, privacyGroupId) => {
  console.log("Data from " + besu.node8.url + ":" );
  return getValue(
    besu.node8.url,
    address,
    orion.node8.publicKey,
    privacyGroupId,
    besu.node8.privateKey
  );
};

const getValueFromNode9 = (address, privacyGroupId) => {
  //console.log("Data from " + besu.node9.url + ":" );
  return getValue(
    besu.node9.url,
    address,
    orion.node9.publicKey,
    privacyGroupId,
    besu.node9.privateKey
  );
};

const getValueFromNode10 = (address, privacyGroupId) => {
 //console.log("Data from " + besu.node10.url + ":" );

  return getValue(
    besu.node10.url,
    address,
    orion.node10.publicKey,
    privacyGroupId,
    besu.node10.privateKey
  );
};
const getValueFromNode11 = (address, privacyGroupId) => {
  //console.log("Data from " + besu.node11.url + ":" );

  return getValue(
    besu.node11.url,
    address,
    orion.node11.publicKey,
    privacyGroupId,
    besu.node11.privateKey
  );
};
const getValueFromNode12 = (address, privacyGroupId) => {
 // console.log("Data from " + besu.node12.url + ":" );
  return getValue(
    besu.node12.url,
    address,
    orion.node12.publicKey,
    privacyGroupId,
    besu.node12.privateKey
  );
};


module.exports = {
  addPrivacyGroupMember,
  getValueFromNode1,
  getValueFromNode2,
  getValueFromNode3,
  getValueFromNode4,
  getValueFromNode5,
  getValueFromNode6,
  getValueFromNode7,
  getValueFromNode8,
  getValueFromNode9,
  getValueFromNode10,
  getValueFromNode11,
  getValueFromNode12,
  getPrivacyGroupMembersCount
};

if (require.main === module) {
  if (!process.env.CONTRACT_ADDRESS) {
    throw Error(
      "You need to export the following variable in your shell environment: CONTRACT_ADDRESS="
    );
  }

  if (!process.env.PRIVACY_GROUP_ID) {
    throw Error(
      "You need to export the following variable in your shell environment: PRIVACY_GROUP_ID="
    );
  }

  const detectContractAddress = process.env.CONTRACT_ADDRESS;
  const privacyGroupIdAll = process.env.PRIVACY_GROUP_ID;
  //addPrivacyGroupMember(detectContractAddress, privacyGroupIdAll, "OK9iGw6KsphfbmYe56l5RU1HmW1RMaPSX8noDYSvgBg=", "Loan1Group", "0x0a5d0b44914516eb6cb79025a9ca253f67d8098b")
  getPrivacyGroupMembersCount(detectContractAddress, privacyGroupIdAll) 
  .then(() => {
      return getValueFromNode1(detectContractAddress, privacyGroupIdAll);
    })
    .catch(console.log);
}
