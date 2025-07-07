import { rivWalletMobileInfo, RivWalletMobileWallet } from './wallet-connect';

const rivWalletMobile = new RivWalletMobileWallet(rivWalletMobileInfo);

export const wallets = [rivWalletMobile];
