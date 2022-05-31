import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
    dataLayer: Array<object>
  }

// 	BinanceMainnet = '0x38',
// 	BinanceTestnet = '0x61',
// 	MaticPolygonTestnet = '0x13881',
// 	EthereumGoerli = '0x5',
// 	TEthereumMainnet = '0x1',
// 	TMaticPolygonMainnet = '0x89'
//  KlaytnBaobab = '0x3e9'
  type BlockchainType = '0x38' | '0x61' | '0x13881' | '0x5' | '0x1' | '0x89' | '0x3e9'
}
