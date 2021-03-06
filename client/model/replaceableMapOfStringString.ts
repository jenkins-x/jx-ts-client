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
* ReplaceableMapOfStringString is a map of strings that can optionally completely replace the map of strings in the parent scheduler
*/
export interface ReplaceableMapOfStringString {
    'entries'?: { [key: string]: string; };
    /**
    * Replace the existing entries
    */
    'replace'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entries",
            "baseName": "entries",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "replace",
            "baseName": "replace",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ReplaceableMapOfStringString.attributeTypeMap;
    }
}

