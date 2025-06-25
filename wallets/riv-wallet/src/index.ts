import { wallets as ext } from '@cosmos-kit/riv-wallet-extension';
import { wallets as mobile } from '@cosmos-kit/riv-wallet-mobile';

export const wallets = [...ext, ...mobile];
