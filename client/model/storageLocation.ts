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
* StorageLocation
*/
export interface StorageLocation {
    'bucketUrl'?: string;
    'classifier'?: string;
    'gitBranch'?: string;
    'gitUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bucketUrl",
            "baseName": "bucketUrl",
            "type": "string"
        },
        {
            "name": "classifier",
            "baseName": "classifier",
            "type": "string"
        },
        {
            "name": "gitBranch",
            "baseName": "gitBranch",
            "type": "string"
        },
        {
            "name": "gitUrl",
            "baseName": "gitUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StorageLocation.attributeTypeMap;
    }
}

