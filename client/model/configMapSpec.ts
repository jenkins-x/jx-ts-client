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
* ConfigMapSpec contains configuration options for the configMap being updated by the config-updater plugin.
*/
export interface ConfigMapSpec {
    /**
    * Namespaces in which the configMap needs to be deployed, in addition to the above namespace provided, or the default if it is not set.
    */
    'additionalNamespaces'?: Array<string>;
    /**
    * Key is the key in the ConfigMap to update with the file contents. If no explicit key is given, the basename of the file will be used.
    */
    'key'?: string;
    /**
    * Name of ConfigMap
    */
    'name': string;
    /**
    * Namespace in which the configMap needs to be deployed. If no namespace is specified it will be deployed to the ProwJobNamespace.
    */
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalNamespaces",
            "baseName": "additional_namespaces",
            "type": "Array<string>"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConfigMapSpec.attributeTypeMap;
    }
}

