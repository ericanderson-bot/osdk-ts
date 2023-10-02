import { PageToken } from "./PageToken";
import { QueryTypeV2 } from "./QueryTypeV2";

export interface ListQueryTypesResponseV2 {
    nextPageToken?: PageToken;
    data: Array<QueryTypeV2>;
}
