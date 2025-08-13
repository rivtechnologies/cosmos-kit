import { Wallet } from '@cosmos-kit/core';

import { ICON } from '../constant';

export const rivWalletExtensionInfo: Wallet = {
  name: 'riv-wallet-extension',
  prettyName: 'RIV Wallet',
  logo: ICON,
  mode: 'extension',
  mobileDisabled: () =>
    !('rivwallet' in window || /RIVWalletBrowser/i.test(navigator.userAgent)),
  rejectMessage: {
    source: 'Request rejected',
  },
  connectEventNamesOnWindow: ['rivwallet_keystorechange'],
  downloads: [
    {
      device: 'mobile',
      os: 'android',
      link:
        'https://play.google.com/store/apps/details?id=com.riv_wallet',
    },
    {
      device: 'mobile',
      os: 'ios',
      link: 'https://apps.apple.com/us/app/riv-wallet/id6502936179',
    },
  ],
};
