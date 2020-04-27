pragma solidity >=0.4.22 <0.7.0;
/** 
 * @title MaliciousDetector
 * @dev Implements voting process along with vote delegation
 */
contract MaliciousDetector {
    event maliciousDetected(string _privacyGroupId, address _userAddress);
    event privacyGroupMemberAdded(string _privacyGroupId, string _name, address _userAddress);
    address owner;
    struct PrivateMember {
        string privacyGroupId; 
        string name;  
        address userAddress;
    }
    PrivateMember[] public privMembers;
    constructor() public {
        owner = msg.sender;
    }
    function addPrivacyGroupMember(string memory _privacyGroupId, string memory _name, address _userAddress) public {
        PrivateMember memory member = PrivateMember(_privacyGroupId, _name, _userAddress);   
        privMembers.push(member);
        emit privacyGroupMemberAdded(_privacyGroupId, _name, _userAddress);   
    }
    function getPrivacyMembersCount()  view public  returns (uint) {
        uint membersCount = privMembers.length;
        return membersCount;
    }
    function getPrivacyGroupMember(string memory _privacyGroupId)  view public  returns (address[] memory) {
        address[] memory membersAddress;
        uint j = 0;
        for(uint i = 0; i< privMembers.length; i++)
        {
            if(keccak256(abi.encodePacked(privMembers[i].privacyGroupId)) == keccak256(abi.encodePacked(_privacyGroupId)))
            {
                membersAddress[j] = privMembers[i].userAddress;
                j++;
            }
        }
    }
    function isMaliciousNode(string memory _privacyGroupId, address _userAddress) public returns (bool)
    {
        bool isMalicious = true;
        uint count = 0;
        for(uint i=0; i<privMembers.length; i++)
        {
            if((keccak256(abi.encodePacked(privMembers[i].privacyGroupId)) == keccak256(abi.encodePacked(_privacyGroupId))) &&
            (keccak256(abi.encodePacked(privMembers[i].userAddress)) == keccak256(abi.encodePacked(_userAddress))) )
            {
                count ++;
            }
        }
        if(count > 0)
        {
            isMalicious = false;
        }
        else
        {
            emit maliciousDetected(_privacyGroupId, _userAddress);

        }
        return isMalicious;
    }
}