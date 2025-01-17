## API Report File for "@osdk/client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ActionDefinition } from '@osdk/api';
import { ActionEditResponse } from '@osdk/client.api';
import type { ActionParam } from '@osdk/client.api';
import type { ActionParameterDefinition } from '@osdk/api';
import { ActionReturnTypeForOptions } from '@osdk/client.api';
import { ActionValidationResponse } from '@osdk/client.api';
import { ApplyActionOptions } from '@osdk/client.api';
import { ApplyBatchActionOptions } from '@osdk/client.api';
import type { Attachment } from '@osdk/client.api';
import type { AttachmentUpload } from '@osdk/client.api';
import type { DataValueClientToWire } from '@osdk/client.api';
import type { GreaterThan } from 'type-fest';
import type { GreaterThanOrEqual } from 'type-fest';
import type { InterfaceDefinition } from '@osdk/api';
import { InterfaceObjectSet } from '@osdk/client.api';
import type { IsEqual } from 'type-fest';
import { isOk } from '@osdk/client.api';
import type { LessThan } from 'type-fest';
import type { Logger } from 'pino';
import { NOOP } from '@osdk/client.api';
import type { ObjectActionDataType } from '@osdk/api';
import type { ObjectOrInterfaceDefinition } from '@osdk/api';
import { ObjectSet } from '@osdk/client.api';
import type { ObjectSetActionDataType } from '@osdk/api';
import type { ObjectTypeDefinition } from '@osdk/api';
import { Osdk } from '@osdk/client.api';
import { OsdkObject } from '@osdk/client.api';
import { PageResult } from '@osdk/client.api';
import { PalantirApiError } from '@osdk/shared.net.errors';
import type { PartialBy } from '@osdk/client.api';
import type { QueryDefinition } from '@osdk/api';
import type { QuerySignatureFromDef } from '@osdk/client.api';
import { Result } from '@osdk/client.api';
import type { SharedClient } from '@osdk/shared.client';
import type { SharedClientContext } from '@osdk/shared.client';
import type { VersionBound } from '@osdk/api';
import { WhereClause } from '@osdk/client.api';

export { ActionEditResponse }

export { ActionReturnTypeForOptions }

// @public (undocumented)
export class ActionValidationError extends Error {
    constructor(validation: ActionValidationResponse);
    // (undocumented)
    validation: ActionValidationResponse;
}

export { ActionValidationResponse }

export { ApplyActionOptions }

export { ApplyBatchActionOptions }

// Warning: (ae-forgotten-export) The symbol "MinimalClient" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface Client extends SharedClient<MinimalClient> {
    // Warning: (ae-forgotten-export) The symbol "CheckVersionBound" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    <Q extends (ObjectTypeDefinition<any, any> & VersionBound<any>)>(o: CheckVersionBound<Q>): ObjectSet<Q>;
    // Warning: (ae-forgotten-export) The symbol "ActionSignatureFromDef" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    <Q extends ActionDefinition<any, any, any>>(o: CheckVersionBound<Q>): ActionSignatureFromDef<Q>;
    // (undocumented)
    <Q extends QueryDefinition<any, any>>(o: CheckVersionBound<Q>): QuerySignatureFromDef<Q>;
}

// @public
export function createAttachmentFromRid(client: MinimalClient, rid: string): Attachment;

// @public (undocumented)
export function createAttachmentUpload(data: Blob, name: string): AttachmentUpload;

// @public (undocumented)
export const createClient: (baseUrl: string, ontologyRid: string | Promise<string>, tokenProvider: () => Promise<string>, options?: {
    logger?: Logger;
} | undefined, fetchFn?: typeof fetch | undefined) => Client;

// Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
//
// @public
export function createPlatformClient(baseUrl: string, tokenProvider: () => Promise<string>, options?: undefined, fetchFn?: typeof globalThis.fetch): PlatformClient;

export { InterfaceObjectSet }

export { isOk }

export { NOOP }

export { ObjectSet }

export { Osdk }

export { OsdkObject }

export { PageResult }

export { PalantirApiError }

// @public (undocumented)
export interface PlatformClient extends SharedClientContext {
}

export { Result }

// @public (undocumented)
export type ResultOrError<T extends object> = ({
    type: "ok";
    err?: never;
} & T) | {
    type: "err";
    data?: never;
    err?: unknown;
};

export { WhereClause }

// (No @packageDocumentation comment for this package)

```
