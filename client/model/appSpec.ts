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

import { IoK8sApiCoreV1Container } from './ioK8sApiCoreV1Container';
import { IoK8sApiRbacV1Role } from './ioK8sApiRbacV1Role';

/**
* AppSpec provides details of the metadata for an App
*/
export interface AppSpec {
    'schemaPreprocessor'?: IoK8sApiCoreV1Container;
    'schemaPreprocessorRole'?: IoK8sApiRbacV1Role;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "schemaPreprocessor",
            "baseName": "schemaPreprocessor",
            "type": "IoK8sApiCoreV1Container"
        },
        {
            "name": "schemaPreprocessorRole",
            "baseName": "schemaPreprocessorRole",
            "type": "IoK8sApiRbacV1Role"
        }    ];

    static getAttributeTypeMap() {
        return AppSpec.attributeTypeMap;
    }
}

