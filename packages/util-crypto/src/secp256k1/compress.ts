// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Point } from '@noble/secp256k1';

import { assert } from '@polkadot/util';

export function secp256k1Compress (publicKey: Uint8Array): Uint8Array {
  assert([33, 65].includes(publicKey.length), 'Invalid publicKey provided');

  return Point.fromHex(publicKey).toRawBytes(true);
}
