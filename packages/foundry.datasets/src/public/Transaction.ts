/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { PreviewMode } from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type {
  BranchName,
  CreateTransactionRequest,
  DatasetRid,
  Transaction,
  TransactionRid,
} from "../_components.js";

//

const _createTransaction: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    $body: CreateTransactionRequest,
    $queryParams?: {
      branchName?: BranchName | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<Transaction>
> = [1, "/v2/datasets/{0}/transactions", 3];

/**
 * Creates a Transaction on a Branch of a Dataset.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets/{datasetRid}/transactions
 */
export function createTransaction(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    $body: CreateTransactionRequest,
    $queryParams?: {
      branchName?: BranchName | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<Transaction> {
  return $foundryPlatformFetch($ctx, _createTransaction, ...args);
}

const _getTransaction: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    transactionRid: TransactionRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Transaction>
> = [0, "/v2/datasets/{0}/transactions/{1}", 2];

/**
 * Gets a Transaction of a Dataset.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-read]
 * URL: /v2/datasets/{datasetRid}/transactions/{transactionRid}
 */
export function getTransaction(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    transactionRid: TransactionRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Transaction> {
  return $foundryPlatformFetch($ctx, _getTransaction, ...args);
}

const _commitTransaction: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    transactionRid: TransactionRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Transaction>
> = [1, "/v2/datasets/{0}/transactions/{1}/commit", 2];

/**
 * Commits an open Transaction. File modifications made on this Transaction are preserved and the Branch is
 * updated to point to the Transaction.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets/{datasetRid}/transactions/{transactionRid}/commit
 */
export function commitTransaction(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    transactionRid: TransactionRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Transaction> {
  return $foundryPlatformFetch($ctx, _commitTransaction, ...args);
}

const _abortTransaction: $FoundryPlatformMethod<
  (
    datasetRid: DatasetRid,
    transactionRid: TransactionRid,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Transaction>
> = [1, "/v2/datasets/{0}/transactions/{1}/abort", 2];

/**
 * Aborts an open Transaction. File modifications made on this Transaction are not preserved and the Branch is
 * not updated.
 *
 * @alpha
 *
 * Required Scopes: [api:datasets-write]
 * URL: /v2/datasets/{datasetRid}/transactions/{transactionRid}/abort
 */
export function abortTransaction(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: DatasetRid,
    transactionRid: TransactionRid,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Transaction> {
  return $foundryPlatformFetch($ctx, _abortTransaction, ...args);
}
