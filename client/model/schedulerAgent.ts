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
* SchedulerAgent defines the scheduler agent configuration
*/
export interface SchedulerAgent {
    /**
    * Agent defines the agent used to schedule jobs, by default Prow
    */
    'agent': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "agent",
            "baseName": "agent",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SchedulerAgent.attributeTypeMap;
    }
}

