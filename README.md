# MaliciousDetector on HyperledgerBesu Ethereum client
This repository contains:

    NodeJS files to create privacy groups with required Besu nodes

    "MaliciousDetector" smart contract and NodeJS files to deploy and test the contract.

## **Create Privacy groups**

keys.js file is updated with all Orion nodes' public key and Besu nodes' url and private key values.

We configured private Hyperledger Besu network with 12 Besu and Orion nodes.

### **To create privacy group in Hyperledger Besu network using Orion transaction manager**

Go to *besu_transactions/besu_privacy_groups* directory and run the following command

```
node createPrivacyGroup.js
```

### **Visualize HyperledgerBesu network performance using grafana**

Besu netowrk performance analysis data exported from grafana interface is in ***data_export*** directory


    
## **Deploy and test "MaliciousDetector" smart contract**

Compiled Bytecode, ABI file, and Solidity source code are in *besu_transactions/smart_contract/MaliciousDetector* directory

### **To deploy "MaliciousDetector" smart contract**
Go to *besu_transactions/contract_tests* directory and run the following command
```
node deployMaliciousDetector.js
```

### **Test "MaliciousDetector" smart contract**
Go to *besu_transactions/contract_tests* directory and run the following command
```
node detectMaliciousNode.js
```

### **Watch event triggers from "MaliciousDetector" smart contract**
Go to *besu_transactions/contract_tests* directory and run the follwoing command
```
node watchMaliciousEvent.js
```