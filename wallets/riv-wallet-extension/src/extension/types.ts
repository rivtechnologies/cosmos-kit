import {
  AminoSignResponse,
  OfflineAminoSigner,
  StdSignature,
  StdSignDoc,
} from '@cosmjs/amino';
import { OfflineDirectSigner, OfflineSigner } from '@cosmjs/proto-signing';
import { DirectSignResponse } from '@cosmjs/proto-signing';
import { BroadcastMode } from '@cosmos-kit/core';
import type { ChainInfo, ChainInfoWithoutEndpoints } from '@keplr-wallet/types';

export interface Key {
  readonly name: string;
  readonly algo: string;
  readonly pubKey: Uint8Array;
  readonly address: Uint8Array;
  readonly bech32Address: string;
  readonly isNanoLedger: boolean;
}
export interface RivWalletSignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;
  readonly disableBalanceCheck?: boolean;
}

export interface RivWallet {
  defaultOptions: {
    sign?: RivWalletSignOptions;
  };
  ping(): Promise<void>;
  /**
   * Delete permissions granted to origin.
   * If chain ids are specified, only the permissions granted to each chain id are deleted (In this case, permissions such as getChainInfosWithoutEndpoints() are not deleted).
   * Else, remove all permissions granted to origin (In this case, permissions that are not assigned to each chain, such as getChainInfosWithoutEndpoints(), are also deleted).
   *
   * @param chainIds disable(Remove approve domain(s)) target chain ID(s).
   */
  disconnect(chainIds?: string | string[]): Promise<void>;
  enable(chainIds: string | string[]): Promise<void>;
  suggestToken(chainId: string, contractAddress: string): Promise<void>;
  mode: 'extension';
  getKey(chainId: string): Promise<Key>;
  getKeysSettled(chainIds: string[]): Promise<Key[]>;
  getOfflineSigner(chainId: string): OfflineAminoSigner & OfflineDirectSigner;
  getOfflineSignerOnlyAmino(chainId: string): OfflineAminoSigner;
  getOfflineSignerAuto(chainId: string): Promise<OfflineSigner>;
  signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: RivWalletSignOptions
  ): Promise<AminoSignResponse>;
  signDirect(
    chainId: string,
    signer: string,
    signDoc: {
      /** SignDoc bodyBytes */
      bodyBytes?: Uint8Array | null;
      /** SignDoc authInfoBytes */
      authInfoBytes?: Uint8Array | null;
      /** SignDoc chainId */
      chainId?: string | null;
      /** SignDoc accountNumber */
      accountNumber?: Long | null;
    },
    signOptions?: RivWalletSignOptions
  ): Promise<DirectSignResponse>;
  signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array
  ): Promise<StdSignature>;
  getChainInfosWithoutEndpoints(): Promise<ChainInfoWithoutEndpoints[]>;
  getChainInfoWithoutEndpoints(chainId: string): Promise<ChainInfoWithoutEndpoints>;
  experimentalSuggestChain(chainInfo: ChainInfo): Promise<void>;
  sendTx(
    chainId: string,
    tx: Uint8Array,
    mode: BroadcastMode
  ): Promise<Uint8Array>;
}
