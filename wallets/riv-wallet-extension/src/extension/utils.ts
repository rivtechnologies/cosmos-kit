import { ClientNotExistError } from '@cosmos-kit/core';

import { RivWallet } from './types';

interface RivWalletWindow {
  rivWallet?: RivWallet;
}

export const getRivWalletFromExtension: () => Promise<
  RivWallet | undefined
> = async () => {
  if (typeof window === 'undefined') {
    return void 0;
  }

  const rivWallet = (window as RivWalletWindow).rivWallet;

  if (rivWallet) {
    return rivWallet;
  }

  if (document.readyState === 'complete') {
    if (rivWallet) {
      return rivWallet;
    } else {
      throw ClientNotExistError;
    }
  }

  return new Promise((resolve, reject) => {
    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === 'complete'
      ) {
        if (rivWallet) {
          resolve(rivWallet);
        } else {
          reject(ClientNotExistError.message);
        }
        document.removeEventListener('readystatechange', documentStateChange);
      }
    };

    document.addEventListener('readystatechange', documentStateChange);
  });
};
