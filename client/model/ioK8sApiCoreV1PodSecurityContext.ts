/**
 * Jenkins X
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoK8sApiCoreV1SELinuxOptions } from './ioK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1Sysctl } from './ioK8sApiCoreV1Sysctl';

/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
*/
export interface IoK8sApiCoreV1PodSecurityContext {
    /**
    * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume.
    */
    'fsGroup'?: number;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
    */
    'runAsUser'?: number;
    'seLinuxOptions'?: IoK8sApiCoreV1SELinuxOptions;
    /**
    * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID.  If unspecified, no groups will be added to any container.
    */
    'supplementalGroups'?: Array<number>;
    /**
    * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.
    */
    'sysctls'?: Array<IoK8sApiCoreV1Sysctl>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "number"
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number"
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean"
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number"
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "IoK8sApiCoreV1SELinuxOptions"
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "Array<number>"
        },
        {
            "name": "sysctls",
            "baseName": "sysctls",
            "type": "Array<IoK8sApiCoreV1Sysctl>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PodSecurityContext.attributeTypeMap;
    }
}

