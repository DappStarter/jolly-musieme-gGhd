require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strategy rival soap coach hope civil army gather'; 
let testAccounts = [
"0x3036e9646ea46517da3500d411be70a441817b8a1c4bef2d3fe5669b8a5efeec",
"0xb7b3ea18fc0436ab8abf73f45b72a6c9276f4ec68c4ee7567b9ff0ea2f4053e4",
"0x5f04de43a4a0e37492127e5ab7895417b73daf19f77bf39a07504f7d6e0db782",
"0xe1eb332a59ab79683eebb5609f57c2331846d9cd31ea585ce20dea17017f709f",
"0xd56ee9499e85303b80f278b1ca4b53ea3b6f973aebebdec4abe22661c1f6eb2a",
"0xa84e1a8d613cf364ccaf14bc0e71a9e632face2e7ad5a97f7f0e513dd4688750",
"0xe8ec079475919d66eb11ee759745254d232f914ad2e30483a1db8c003398d379",
"0x0dd1b8e8d7abd80a1d32a721a05302f0b1b278409d562d60c04cfdaab2efdc06",
"0xda3d3a83cbc5d0eca5abb857d472f6e58eccd1c21f2cd26b5bc9a51a7c8a1bf6",
"0xc7db31054d85637f1b08fb58151a7bd30ebef56bc96b0f20d8e48174a12c4611"
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

