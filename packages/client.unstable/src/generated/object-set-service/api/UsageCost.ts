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

/**
 * WARNING: this feature is not yet supported
 *
 * Estimate of the usage cost generated by this request.
 *
 * Recorded values are influenced by how much data and compute was required to carry out the request as well
 * as the owner of the resource determined by the provided `owningRid`.
 *
 * NOTE: The reported usage does not account for the Object Storage V1 cost.
 *
 * Please refer to resource management documentation for more details.
 */
export interface UsageCost {
  computeUsage: number | undefined;
}