// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Store {
  string public myString = "init";
  event setData(string oldValue, string data);

  function SetData(string memory _data) public {
    string memory storeOldValue = myString;
    myString = _data;
    emit setData(storeOldValue, _data);
  }
}