// import { connectors } from 'web3modal';
import { indexBy } from './utils';
import WalletConnectProvider from '@walletconnect/web3-provider';

import { bobaPools, bobaStakePools, bobaAddressBook, bobaZaps, nativeCoins } from '../configure';
import { allNetworks } from '../../network';

export const appNetworkId = window.REACT_APP_NETWORK_ID;

const networkTxUrls = {
  288: hash => `https://blockexplorer.boba.network/${hash}`,
};

const networkFriendlyName = {
  288: 'BOBA',
};

const networkBuyUrls = {
  288: 'https://oolongswap.com/#/swap',
};

export const getNetworkCoin = () => {
  return nativeCoins.find(coin => coin.chainId === appNetworkId);
};

export const getNetworkPools = () => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 288:
      return bobaPools;
      return [];
  }
};

export const getNetworkVaults = (networkId = appNetworkId) => {
  switch (networkId) {
    case 288:
      return indexBy(bobaPools, 'id');
    default:
      return {};
  }
};

export const getNetworkLaunchpools = (networkId = appNetworkId) => {
  switch (networkId) {
    case 288:
      return indexBy(bobaStakePools, 'id');
    default:
      return {};
  }
};

export const getNetworkTokens = () => {
  const chainId = window.REACT_APP_NETWORK_ID;
  switch (chainId) {
    case 288:
      return bobaAddressBook.tokens;
    default:
      throw new Error(
        `Create address book for chainId(${chainId}) first. Check out https://github.com/Beefyfinance/address-book`
      );
  }
};

export const getNetworkBurnTokens = () => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 288:
      return {};
    default:
      throw new Error(`Create address book for this chainId first.`);
  }
};

export const getNetworkZaps = () => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 288:
      return bobaZaps;
    default:
      return [];
  }
};

export const getNetworkStables = () => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 288:
      return ['USDC', 'USDT', 'DAI', 'fUSDT', 'MIM', 'FRAX', 'MAI', 'DOLA', 'TUSD', 'UST'];
    default:
      return [];
  }
};

export const getNetworkMulticall = () => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 288:
      return '0x7E2f7eC8381AD1481F5376f896769e2f1ef34196';
    default:
      return '';
  }
};

export const getNetworkConnectors = t => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 288:
      return {
        network: 'Boba Mainnet',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          // walletconnect: {
          //   package: WalletConnectProvider,
          //   options: {
          //     rpc: {
          //       1: 'https://mainnet.boba.network/',
          //       288: 'https://mainnet.boba.network/',
          //     },
          //   },
          // },
        },
      };
    default:
      return {};
  }
};

export const getNetworkTxUrl = networkTxUrls[window.REACT_APP_NETWORK_ID];
export const getNetworkFriendlyName = (networkId = window.REACT_APP_NETWORK_ID) =>
  networkFriendlyName[networkId];
export const getNetworkBuyUrl = (networkId = window.REACT_APP_NETWORK_ID) =>
  networkBuyUrls[networkId];
export const getNetworkAppUrl = (networkId = window.REACT_APP_NETWORK_ID) =>
  window.location.protocol +
  '//' +
  window.location.host +
  window.location.pathname +
  '#' +
  allNetworks.find(n => n.id === networkId)?.hash;

export const launchpools = getNetworkLaunchpools();
export const vaults = getNetworkVaults();
