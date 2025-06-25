import { ChainRecord, Wallet } from '@cosmos-kit/core'
import { ChainWC } from '@cosmos-kit/walletconnect'
import { RivWalletClient } from './client'

export class ChainRivWalletMobile extends ChainWC {
  constructor(walletInfo: Wallet, chainInfo: ChainRecord) {
    super(walletInfo, chainInfo, RivWalletClient)
  }
}
