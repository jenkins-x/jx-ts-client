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

import { ExtensionRepositoryReference } from './extensionRepositoryReference';

export interface ExtensionRepositoryReferenceList {
    'repositories'?: Array<ExtensionRepositoryReference>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "repositories",
            "baseName": "repositories",
            "type": "Array<ExtensionRepositoryReference>"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionRepositoryReferenceList.attributeTypeMap;
    }
}

