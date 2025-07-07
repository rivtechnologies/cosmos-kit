import { OS, Wallet } from '@cosmos-kit/core';

import { ICON } from '../constant';

export const rivWalletMobileInfo: Wallet = {
  name: 'riv-wallet-mobile',
  prettyName: 'RIV Wallet Mobile',
  logo: ICON,
  mode: 'wallet-connect',
  mobileDisabled: () => 'rivWallet' in window && /RIVWalletBrowser/i.test(navigator.userAgent),
  rejectMessage: {
    source: 'Request rejected',
  },
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
  connectEventNamesOnWindow: ['rivWallet_keystorechange'],
  walletconnect: {
    name: 'RIV Wallet',
    projectId:
      '31393502b32bbb007fcb74367656a389',
    encoding: 'base64',
    mobile: {
      native: {
        ios: 'rivwallet:',
        android: 'intent:',
      },
    },
    formatNativeUrl: (
      appUrl: string,
      wcUri: string,
      os: OS | undefined,
      _name: string
    ): string => {
      const plainAppUrl = appUrl.split(':')[0];
      const encodedWcUrl = encodeURIComponent(wcUri);
      switch (os) {
        case 'ios':
          return `${plainAppUrl}://wcV2?${encodedWcUrl}`;
        case 'android':
          return `${plainAppUrl}://wcV2?${encodedWcUrl}#Intent;package=com.riv_wallet;scheme=rivwallet;end;`;
        default:
          return `${plainAppUrl}://wcV2?${encodedWcUrl}`;
      }
    },
  },
};
