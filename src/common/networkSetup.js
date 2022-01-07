export const networkSettings = {
  288: {
    chainId: `0x${parseInt(288, 10).toString(16)}`,
    chainName: 'Boba Test Network',
    nativeCurrency: {
      name: 'BOBA',
      symbol: 'BOBA',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.boba.network/'],
    blockExplorerUrls: ['https://blockexplorer.boba.network/'],
  },
};

export const networkSetup = chainId => {
  return new Promise((resolve, reject) => {
    const provider = window.ethereum;
    if (provider) {
      if (networkSettings.hasOwnProperty(chainId)) {
        provider
          .request({
            method: 'wallet_addEthereumChain',
            params: [networkSettings[chainId]],
          })
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`No network settings configured for chainId: '${chainId}'`));
      }
    } else {
      reject(new Error(`window.ethereum is '${typeof provider}'`));
    }
  });
};

export const getRpcUrl = () => {
  const settings = networkSettings[window.REACT_APP_NETWORK_ID];
  return settings.rpcUrls[~~(settings.rpcUrls.length * Math.random())];
};
