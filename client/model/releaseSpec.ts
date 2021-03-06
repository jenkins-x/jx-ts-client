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

import { CommitSummary } from './commitSummary';
import { IssueSummary } from './issueSummary';

/**
* ReleaseSpec is the specification of the Release
*/
export interface ReleaseSpec {
    'commits'?: Array<CommitSummary>;
    'gitCloneUrl'?: string;
    'gitHttpUrl'?: string;
    'gitOwner'?: string;
    'gitRepository'?: string;
    'issues'?: Array<IssueSummary>;
    'name'?: string;
    'pullRequests'?: Array<IssueSummary>;
    'releaseNotesURL'?: string;
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commits",
            "baseName": "commits",
            "type": "Array<CommitSummary>"
        },
        {
            "name": "gitCloneUrl",
            "baseName": "gitCloneUrl",
            "type": "string"
        },
        {
            "name": "gitHttpUrl",
            "baseName": "gitHttpUrl",
            "type": "string"
        },
        {
            "name": "gitOwner",
            "baseName": "gitOwner",
            "type": "string"
        },
        {
            "name": "gitRepository",
            "baseName": "gitRepository",
            "type": "string"
        },
        {
            "name": "issues",
            "baseName": "issues",
            "type": "Array<IssueSummary>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "pullRequests",
            "baseName": "pullRequests",
            "type": "Array<IssueSummary>"
        },
        {
            "name": "releaseNotesURL",
            "baseName": "releaseNotesURL",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReleaseSpec.attributeTypeMap;
    }
}

