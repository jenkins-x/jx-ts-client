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

import { ContextPolicy } from './contextPolicy';
import { ReplaceableMapOfStringContextPolicy } from './replaceableMapOfStringContextPolicy';

/**
* RepoContextPolicy overrides the policy for repo, and any branch overrides.
*/
export interface RepoContextPolicy {
    'contextPolicy': ContextPolicy;
    'branches'?: ReplaceableMapOfStringContextPolicy;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contextPolicy",
            "baseName": "ContextPolicy",
            "type": "ContextPolicy"
        },
        {
            "name": "branches",
            "baseName": "branches",
            "type": "ReplaceableMapOfStringContextPolicy"
        }    ];

    static getAttributeTypeMap() {
        return RepoContextPolicy.attributeTypeMap;
    }
}
