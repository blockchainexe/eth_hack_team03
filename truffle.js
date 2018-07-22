/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    testnet: {
      host: "localhost",
      port: 8545,
      network_id: "4",
      gas: 4400000,
      from: "0xc6026d51bedf948ffc4b7e84a4d490738d221aef"
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 4400000,
      gasPrice: 2100000000000
    }
  }
};
