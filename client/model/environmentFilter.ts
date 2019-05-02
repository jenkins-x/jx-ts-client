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


/**
* EnvironmentFilter specifies the environments to apply the role binding to
*/
export interface EnvironmentFilter {
    'excludes'?: Array<string>;
    'includes'?: Array<string>;
    'kind'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "excludes",
            "baseName": "excludes",
            "type": "Array<string>"
        },
        {
            "name": "includes",
            "baseName": "includes",
            "type": "Array<string>"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentFilter.attributeTypeMap;
    }
}

