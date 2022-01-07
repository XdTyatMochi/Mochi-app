import { bobaPools } from '../src/features/configure/vault/boba_pools.js';

export const chainPools = {
  boba: bobaPools,
};

export const chainRpcs = {
  boba: process.env.BOBA_RPC || 'https://mainnet.boba.network/',
};
