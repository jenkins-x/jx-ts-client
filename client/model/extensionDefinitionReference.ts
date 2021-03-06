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


/**
* ExtensionRepositoryReference references a GitHub repo that contains extension definitions
*/
export interface ExtensionDefinitionReference {
    'remote': string;
    'tag': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote",
            "baseName": "remote",
            "type": "string"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionDefinitionReference.attributeTypeMap;
    }
}

