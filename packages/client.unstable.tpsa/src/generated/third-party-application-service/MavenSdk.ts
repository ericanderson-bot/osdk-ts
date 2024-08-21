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

import type { MavenPackageName } from "./MavenPackageName.js";
import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
import type { SdkPackageStatus } from "./SdkPackageStatus.js";
import type { TelemetryContext } from "./TelemetryContext.js";

/**
 * A Java Maven SDK for the application. It may be installed through the
 * application's artifacts repository with an appropriate token for authentication.
 */
export interface MavenSdk {
  mavenPackageName: MavenPackageName;
  javaGeneratorVersion: SdkGeneratorVersion;
  status: SdkPackageStatus;
  telemetryContext: TelemetryContext | undefined;
  enableBetaFeatures: boolean;
}