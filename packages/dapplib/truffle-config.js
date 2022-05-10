require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note remain protect grid narrow foam split'; 
let testAccounts = [
"0x8054072a89272ab36637f7924d6aaa32587ae91e949fd2e89376dd55ccedbdf4",
"0xc2b3c4fe5ef7263a0e103238bb984825066fb99c3b04956b102ee2130c8c1773",
"0xb618c05109d643a50b4b71e026ddccd1348b2611b62c9c964703ad73232afa4c",
"0x614e131e6afea269b654d3236f849533846f278bc76ee4c7a92f056cc8f1e9fd",
"0x9e68a0c4f2446887cb7d40aafd78bef85a069492f47d372cb919122cb78f40ea",
"0x7ef2ee1acc1f4c714963fcd7baca65a881097b63124f2d885057901ce4e996fd",
"0xa20475faba4be34d16fb6462ba602bcf0eca03cce35276770e399a4161e59c46",
"0x22fd7b747485356c4f4918016834b372d4ed263008cc02e5d1ca589f178340b7",
"0x1788f162a66d482f5d1a66c290d86ca42a658f69bbe61f04df499646bb754dbc",
"0xb4eaac3619d7a7530b18ceec612107006e7b40bb4c840cffe35ab523c33a2b2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

