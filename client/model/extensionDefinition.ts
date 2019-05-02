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

import { ExtensionDefinitionChildReference } from './extensionDefinitionChildReference';
import { ExtensionParameter } from './extensionParameter';

/**
* ExtensionDefinition defines an Extension
*/
export interface ExtensionDefinition {
    'children'?: Array<ExtensionDefinitionChildReference>;
    'description'?: string;
    'given'?: string;
    'name': string;
    'namespace': string;
    'parameters'?: Array<ExtensionParameter>;
    'scriptFile'?: string;
    'uuid': string;
    'when'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "children",
            "baseName": "children",
            "type": "Array<ExtensionDefinitionChildReference>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "given",
            "baseName": "given",
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
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<ExtensionParameter>"
        },
        {
            "name": "scriptFile",
            "baseName": "scriptFile",
            "type": "string"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "when",
            "baseName": "when",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionDefinition.attributeTypeMap;
    }
}

