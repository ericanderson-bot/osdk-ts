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

import type { LinkTypeId } from "./LinkTypeId.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";

/**
 * An error indicating the display name of a created or updated Link Type is too long.
 */
export interface LinkTypeDisplayNameTooLongError {
  requestedLength: number;
  maximumLength: number;
  linkTypeId: LinkTypeId;
  linkTypeRid: LinkTypeRid;
}