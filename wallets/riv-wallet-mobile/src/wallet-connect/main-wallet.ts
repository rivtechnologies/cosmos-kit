import { EndpointOptions, Wallet } from '@cosmos-kit/core'
import { WCWallet } from '@cosmos-kit/walletconnect'

import { ChainRivWalletMobile } from './chain-wallet'
import { RivWalletClient } from './client'

export class RivWalletMobileWallet extends WCWallet {
  constructor(walletInfo: Wallet, preferredEndpoints?: EndpointOptions['endpoints']) {
    super(walletInfo, ChainRivWalletMobile, RivWalletClient)
    this.preferredEndpoints = preferredEndpoints
  }
}
