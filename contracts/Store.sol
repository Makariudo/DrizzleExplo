// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Store {
  string public myString = "init";
  event setData(string data);

  function SetData(string memory _data) public {
    myString = _data;
    emit setData(_data);
  }
}