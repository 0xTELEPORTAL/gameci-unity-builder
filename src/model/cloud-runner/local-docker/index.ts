import BuildParameters from '../../build-parameters';
import { CloudRunnerSystem } from '../../cli/remote-client/remote-client-services/cloud-runner-system';
import CloudRunnerEnvironmentVariable from '../services/cloud-runner-environment-variable';
import CloudRunnerLogger from '../services/cloud-runner-logger';
import { CloudRunnerProviderInterface } from '../services/cloud-runner-provider-interface';
import CloudRunnerSecret from '../services/cloud-runner-secret';

class LocalDockerCloudRunner implements CloudRunnerProviderInterface {
  cleanupSharedResources(
    // eslint-disable-next-line no-unused-vars
    buildGuid: string,
    // eslint-disable-next-line no-unused-vars
    buildParameters: BuildParameters,
    // eslint-disable-next-line no-unused-vars
    branchName: string,
    // eslint-disable-next-line no-unused-vars
    defaultSecretsArray: { ParameterKey: string; EnvironmentVariable: string; ParameterValue: string }[],
  ) {}
  setupSharedResources(
    // eslint-disable-next-line no-unused-vars
    buildGuid: string,
    // eslint-disable-next-line no-unused-vars
    buildParameters: BuildParameters,
    // eslint-disable-next-line no-unused-vars
    branchName: string,
    // eslint-disable-next-line no-unused-vars
    defaultSecretsArray: { ParameterKey: string; EnvironmentVariable: string; ParameterValue: string }[],
  ) {}
  public runTask(
    commands: string,
    buildGuid: string,
    // eslint-disable-next-line no-unused-vars
    image: string,
    // eslint-disable-next-line no-unused-vars
    mountdir: string,
    // eslint-disable-next-line no-unused-vars
    workingdir: string,
    // eslint-disable-next-line no-unused-vars
    environment: CloudRunnerEnvironmentVariable[],
    // eslint-disable-next-line no-unused-vars
    secrets: CloudRunnerSecret[],
  ): Promise<string> {
    CloudRunnerLogger.log(buildGuid);
    CloudRunnerLogger.log(commands);
    return CloudRunnerSystem.Run(commands, false, false);
  }
}
export default LocalDockerCloudRunner;