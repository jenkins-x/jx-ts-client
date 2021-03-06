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

import { UserDetails } from './userDetails';

/**
* CommitSummary is the summary of a commit
*/
export interface CommitSummary {
    'author'?: UserDetails;
    'branch'?: string;
    'committer'?: UserDetails;
    'issueIds'?: Array<string>;
    'message'?: string;
    'sha'?: string;
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "author",
            "baseName": "author",
            "type": "UserDetails"
        },
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string"
        },
        {
            "name": "committer",
            "baseName": "committer",
            "type": "UserDetails"
        },
        {
            "name": "issueIds",
            "baseName": "issueIds",
            "type": "Array<string>"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "sha",
            "baseName": "sha",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CommitSummary.attributeTypeMap;
    }
}

