const Store = artifacts.require("Store");
const {BN,expectEvent,expectRevert} = require('@openzeppelin/test-helpers')

contract("Store", (accounts) => {

 describe("Set a new String", async () => {
   before("Should deploy", async () => {
     storeContract = await Store.deployed();
   });
   it("should exist", async () => {
    assert.exists(storeContract, 'storeContract is `null` nor `undefined`');
   })
   it("data equal to init", async () => {
    let data = await storeContract.myString();
     assert.equal(data, "init", "data init is not equal to 'init'");
   })
   it("should update myString", async () => {
     await storeContract.SetData("coucou",{from: accounts[0]});
     let res = await storeContract.myString();
     assert.equal(res,"coucou", "didn't update the value")
   })
   it("should emit a new event", async () => {
    let setData = await storeContract.SetData("coucou",{from: accounts[0]});
    expectEvent(setData, "setData", {data : "coucou"})
   })


 });

});