/**
 * Jenkins X
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoK8sApiCoreV1PodTemplateSpec } from './ioK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './ioK8sApimachineryPkgApisMetaV1LabelSelector';

/**
* JobSpec describes how the job execution will look like.
*/
export interface IoK8sApiBatchV1JobSpec {
    /**
    * Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer
    */
    'activeDeadlineSeconds'?: number;
    /**
    * Specifies the number of retries before marking this job failed. Defaults to 6
    */
    'backoffLimit'?: number;
    /**
    * Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'completions'?: number;
    /**
    * manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
    */
    'manualSelector'?: boolean;
    /**
    * Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'parallelism'?: number;
    'selector'?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    'template': IoK8sApiCoreV1PodTemplateSpec;
    /**
    * ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature.
    */
    'ttlSecondsAfterFinished'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number"
        },
        {
            "name": "backoffLimit",
            "baseName": "backoffLimit",
            "type": "number"
        },
        {
            "name": "completions",
            "baseName": "completions",
            "type": "number"
        },
        {
            "name": "manualSelector",
            "baseName": "manualSelector",
            "type": "boolean"
        },
        {
            "name": "parallelism",
            "baseName": "parallelism",
            "type": "number"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "IoK8sApiCoreV1PodTemplateSpec"
        },
        {
            "name": "ttlSecondsAfterFinished",
            "baseName": "ttlSecondsAfterFinished",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiBatchV1JobSpec.attributeTypeMap;
    }
}

