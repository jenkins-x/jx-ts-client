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


export interface ResourceReference {
    /**
    * API version of the referent.
    */
    'apiVersion'?: string;
    /**
    * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    */
    'kind': string;
    /**
    * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
    */
    'name': string;
    /**
    * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
    */
    'uid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResourceReference.attributeTypeMap;
    }
}

