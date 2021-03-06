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

import { IoK8sApimachineryPkgApisMetaV1Initializer } from './ioK8sApimachineryPkgApisMetaV1Initializer';
import { IoK8sApimachineryPkgApisMetaV1Status } from './ioK8sApimachineryPkgApisMetaV1Status';

/**
* Initializers tracks the progress of initialization.
*/
export interface IoK8sApimachineryPkgApisMetaV1Initializers {
    /**
    * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
    */
    'pending': Array<IoK8sApimachineryPkgApisMetaV1Initializer>;
    'result'?: IoK8sApimachineryPkgApisMetaV1Status;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pending",
            "baseName": "pending",
            "type": "Array<IoK8sApimachineryPkgApisMetaV1Initializer>"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "IoK8sApimachineryPkgApisMetaV1Status"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApimachineryPkgApisMetaV1Initializers.attributeTypeMap;
    }
}

