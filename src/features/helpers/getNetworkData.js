import { connectors } from 'web3modal';
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
  288: 'https://spookyswap.finance/swap?inputCurrency=0x04068da6c83afcfa0e13ba15a6696662335d5b75&outputCurrency=0xd6070ae98b8069de6B494332d1A1a81B6179D960',
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
      return {
        [bobaAddressBook.tokens.TOMB.symbol]: bobaAddressBook.tokens.TOMB,
        [bobaAddressBook.tokens.fSING.symbol]: bobaAddressBook.tokens.fSING,
        [bobaAddressBook.tokens.PEAR.symbol]: bobaAddressBook.tokens.PEAR,
      };
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
      return '0xC9F6b1B53E056fd04bE5a197ce4B2423d456B982';
    default:
      return '';
  }
};

export const getNetworkConnectors = t => {
  switch (window.REACT_APP_NETWORK_ID) {
    case 288:
      return {
        network: 'boba Test Net',
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
          //       1: 'https://rpcapi.fantom.network',
          //       288: 'https://rpcapi.fantom.network',
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
