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

import { IoK8sApiCoreV1ExecAction } from './ioK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1HTTPGetAction } from './ioK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1TCPSocketAction } from './ioK8sApiCoreV1TCPSocketAction';

/**
* Handler defines a specific action that should be taken
*/
export interface IoK8sApiCoreV1Handler {
    'exec'?: IoK8sApiCoreV1ExecAction;
    'httpGet'?: IoK8sApiCoreV1HTTPGetAction;
    'tcpSocket'?: IoK8sApiCoreV1TCPSocketAction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "IoK8sApiCoreV1ExecAction"
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "IoK8sApiCoreV1HTTPGetAction"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "IoK8sApiCoreV1TCPSocketAction"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Handler.attributeTypeMap;
    }
}

