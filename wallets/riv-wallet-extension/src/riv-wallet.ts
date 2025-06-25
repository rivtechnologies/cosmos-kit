import { rivWalletExtensionInfo, RivWalletExtensionWallet } from './extension';

const rivWalletExtension = new RivWalletExtensionWallet(rivWalletExtensionInfo);

export const wallets = [rivWalletExtension];
