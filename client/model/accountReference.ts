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
* AccountReference is a reference to a user account in another system that is attached to this user
*/
export interface AccountReference {
    'id'?: string;
    'provider'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountReference.attributeTypeMap;
    }
}

