// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContactFactory {
    mapping(address => address) public ownerToContact;

    modifier onlyNewRecords() {
        require(ownerToContact[msg.sender] == address(0), "already added");
        _;
    }

    function createContact( string memory _telegram, string memory _discord, string memory _description) public onlyNewRecords {
        Contact contact = new Contact(msg.sender, _telegram, _discord, _description);
        ownerToContact[msg.sender] = address(contact);
    }

    function createContact( string memory _telegram) public onlyNewRecords {
        Contact contact = new Contact(msg.sender, _telegram, "", "");
        ownerToContact[msg.sender] = address(contact);
    }
}

contract Contact {
    address public owner;
    string public telegram;
    string public discord;
    string public description;

    constructor (address _owner, string memory _telegram, string memory _discord, string memory _description) {
        owner = _owner;
        telegram = _telegram;
        discord = _discord;
        description = _description;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "you're not an owner");
        _;
    }

    function setTelegram(string memory _telegram) public onlyOwner {
        telegram = _telegram;
    }

    function setDiscord(string memory _discord) public onlyOwner {
        discord = _discord;
    }

    function setDescription(string memory _description) public onlyOwner {
        description = _description;
    }
}


