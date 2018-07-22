pragma solidity ^0.4.23;

contract Koppy {
  address public owner;

  uint MAX_USERS = 256 + 1; 
  address[] public users;
  mapping(address => string) public uportAddresses;

  constructor() public {
    owner = msg.sender;
  }

  function registerUser(string _uPortAddress) external 
  {
    require(MAX_USERS > users.length);

    uportAddresses[msg.sender] = _uPortAddress;
    users.push(msg.sender);
  }

  function getUserCount() external view returns(uint256 length)
  {
    length = users.length;
  }

  function getUsers() external view returns(address[] u)
  {
    u = users;
  }

  function getUportAddress(address _address) external view returns(string _uAddress)
  {
    _uAddress = uportAddresses[_address];
  }
}
