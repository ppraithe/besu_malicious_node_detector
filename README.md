# MaliciousDetector on HyperledgerBesu Ethereum client
This repository contains:

    "MaliciousDetector" smart contract and NodeJS files to deploy and test the contract.

    NodeJS files to create privacy groups with required Besu nodes

# Deploy and test "MaliciousDetector" smart contract

Compiled Bytecode, ABI file, and Solidity source code is in besu_transactions/smart_contract/MaliciousDetector directory

## To deploy "MaliciousDetector" smart contract
Go to besu_transactions/contract_tests directory and run the following command

node deployMaliciousDetector.js

## Test "MaliciousDetector" smart contract
Go to besu_transactions/contract_tests directory and run the following command

node detectMaliciousNode.js

## Watch event triggers from "MaliciousDetector" smart contract
Go to besu_transactions/contract_tests directory and run the follwoing command

node watchMaliciousEvent.js

