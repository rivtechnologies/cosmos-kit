import { Wallet } from '@cosmos-kit/core'
import { WCClient } from '@cosmos-kit/walletconnect'

export class RivWalletClient extends WCClient {
  constructor(walletInfo: Wallet) {
    super(walletInfo)
  }
}
