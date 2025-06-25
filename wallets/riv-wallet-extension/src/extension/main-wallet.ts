import { Wallet } from '@cosmos-kit/core';
import { MainWalletBase } from '@cosmos-kit/core';

import { ChainRivWalletExtension } from './chain-wallet';
import { RivWalletClient } from './client';
import { getRivWalletFromExtension } from './utils';

export class RivWalletExtensionWallet extends MainWalletBase {
  constructor(walletInfo: Wallet) {
    super(walletInfo, ChainRivWalletExtension);
  }

  async initClient() {
    this.initingClient();
    try {
      const rivWallet = await getRivWalletFromExtension();
      this.initClientDone(rivWallet ? new RivWalletClient(rivWallet) : undefined);
    } catch (error) {
      this.initClientError(error);
    }
  }
}
