import { DeploymentApiName } from "./DeploymentApiName";
import { DeploymentDescription } from "./DeploymentDescription";
import { DeploymentApi } from "./DeploymentApi";

/**
 * Metadata related to a model deployment.
 *
 */
export interface DeploymentMetadata {
    apiName: DeploymentApiName;
    description?: DeploymentDescription;
    api?: DeploymentApi;
}
