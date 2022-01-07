import { addressBook } from 'blockchain-addressbook';

const { fantom: bobaAddressBook } = addressBook;
export { bobaAddressBook };

export {
  vaultABI,
  bnbVaultABI,
  erc20ABI,
  strategyABI,
  multicallABI,
  govPoolABI,
  BeefyUniV2ZapABI,
  uniswapV2PairABI,
  uniswapV2RouterABI,
  launchPoolABI,
} from './abi';
export { bobaStakePools } from './stake/boba_stake';
export { bobaPools } from './vault/boba_pools';
export { bobaZaps } from './zap/boba_zaps';
export { nativeCoins } from './native_coins';
