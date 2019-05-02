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

import { QuickStartLocation } from './quickStartLocation';

/**
* BuildPackSpec is the specification of an BuildPack
*/
export interface BuildPackSpec {
    'gitRef'?: string;
    'gitUrl'?: string;
    'label'?: string;
    'quickstartLocations'?: Array<QuickStartLocation>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gitRef",
            "baseName": "gitRef",
            "type": "string"
        },
        {
            "name": "gitUrl",
            "baseName": "gitUrl",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "quickstartLocations",
            "baseName": "quickstartLocations",
            "type": "Array<QuickStartLocation>"
        }    ];

    static getAttributeTypeMap() {
        return BuildPackSpec.attributeTypeMap;
    }
}

