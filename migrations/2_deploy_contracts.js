var SupplyChainContract = artifacts.require("./SupplyChain.sol");
var RolesContract = artifacts.require("./rolesUtils[deprecated]/Roles.sol")
var ManufacturerContract = artifacts.require("./rolesUtils[deprecated]/Manufacturer.sol");

module.exports = function(deployer) {
  deployer.deploy(ManufacturerContract);
  deployer.deploy(RolesContract);
  deployer.deploy(SupplyChainContract);
  // deployer.deploy(FetchContract, {gas: 15555555});
};

// var SupplyChainContract = artifacts.require("./SupplyChain.sol");
// var RolesContract = artifacts.require("./rolesUtils[deprecated]/Roles.sol");
// var ManufacturerContract = artifacts.require("./rolesUtils[deprecated]/Manufacturer.sol");

// module.exports = async function(deployer) {
//   // Deploy dependencies first
//   await deployer.deploy(ManufacturerContract);
//   await deployer.deploy(RolesContract);
  
//   // Get deployed contract instances
//   let rolesInstance = await RolesContract.deployed();
//   let manufacturerInstance = await ManufacturerContract.deployed();
  
//   // Deploy SupplyChain with constructor arguments if needed
//   await deployer.deploy(SupplyChainContract, rolesInstance.address, manufacturerInstance.address);
// };

