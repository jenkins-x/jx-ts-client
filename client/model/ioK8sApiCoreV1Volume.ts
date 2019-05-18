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

import { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from './ioK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import { IoK8sApiCoreV1AzureDiskVolumeSource } from './ioK8sApiCoreV1AzureDiskVolumeSource';
import { IoK8sApiCoreV1AzureFileVolumeSource } from './ioK8sApiCoreV1AzureFileVolumeSource';
import { IoK8sApiCoreV1CephFSVolumeSource } from './ioK8sApiCoreV1CephFSVolumeSource';
import { IoK8sApiCoreV1CinderVolumeSource } from './ioK8sApiCoreV1CinderVolumeSource';
import { IoK8sApiCoreV1ConfigMapVolumeSource } from './ioK8sApiCoreV1ConfigMapVolumeSource';
import { IoK8sApiCoreV1DownwardAPIVolumeSource } from './ioK8sApiCoreV1DownwardAPIVolumeSource';
import { IoK8sApiCoreV1EmptyDirVolumeSource } from './ioK8sApiCoreV1EmptyDirVolumeSource';
import { IoK8sApiCoreV1FCVolumeSource } from './ioK8sApiCoreV1FCVolumeSource';
import { IoK8sApiCoreV1FlexVolumeSource } from './ioK8sApiCoreV1FlexVolumeSource';
import { IoK8sApiCoreV1FlockerVolumeSource } from './ioK8sApiCoreV1FlockerVolumeSource';
import { IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from './ioK8sApiCoreV1GCEPersistentDiskVolumeSource';
import { IoK8sApiCoreV1GitRepoVolumeSource } from './ioK8sApiCoreV1GitRepoVolumeSource';
import { IoK8sApiCoreV1GlusterfsVolumeSource } from './ioK8sApiCoreV1GlusterfsVolumeSource';
import { IoK8sApiCoreV1HostPathVolumeSource } from './ioK8sApiCoreV1HostPathVolumeSource';
import { IoK8sApiCoreV1ISCSIVolumeSource } from './ioK8sApiCoreV1ISCSIVolumeSource';
import { IoK8sApiCoreV1NFSVolumeSource } from './ioK8sApiCoreV1NFSVolumeSource';
import { IoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from './ioK8sApiCoreV1PersistentVolumeClaimVolumeSource';
import { IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from './ioK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import { IoK8sApiCoreV1PortworxVolumeSource } from './ioK8sApiCoreV1PortworxVolumeSource';
import { IoK8sApiCoreV1ProjectedVolumeSource } from './ioK8sApiCoreV1ProjectedVolumeSource';
import { IoK8sApiCoreV1QuobyteVolumeSource } from './ioK8sApiCoreV1QuobyteVolumeSource';
import { IoK8sApiCoreV1RBDVolumeSource } from './ioK8sApiCoreV1RBDVolumeSource';
import { IoK8sApiCoreV1ScaleIOVolumeSource } from './ioK8sApiCoreV1ScaleIOVolumeSource';
import { IoK8sApiCoreV1SecretVolumeSource } from './ioK8sApiCoreV1SecretVolumeSource';
import { IoK8sApiCoreV1StorageOSVolumeSource } from './ioK8sApiCoreV1StorageOSVolumeSource';
import { IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from './ioK8sApiCoreV1VsphereVirtualDiskVolumeSource';

/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
*/
export interface IoK8sApiCoreV1Volume {
    'awsElasticBlockStore'?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
    'azureDisk'?: IoK8sApiCoreV1AzureDiskVolumeSource;
    'azureFile'?: IoK8sApiCoreV1AzureFileVolumeSource;
    'cephfs'?: IoK8sApiCoreV1CephFSVolumeSource;
    'cinder'?: IoK8sApiCoreV1CinderVolumeSource;
    'configMap'?: IoK8sApiCoreV1ConfigMapVolumeSource;
    'downwardAPI'?: IoK8sApiCoreV1DownwardAPIVolumeSource;
    'emptyDir'?: IoK8sApiCoreV1EmptyDirVolumeSource;
    'fc'?: IoK8sApiCoreV1FCVolumeSource;
    'flexVolume'?: IoK8sApiCoreV1FlexVolumeSource;
    'flocker'?: IoK8sApiCoreV1FlockerVolumeSource;
    'gcePersistentDisk'?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
    'gitRepo'?: IoK8sApiCoreV1GitRepoVolumeSource;
    'glusterfs'?: IoK8sApiCoreV1GlusterfsVolumeSource;
    'hostPath'?: IoK8sApiCoreV1HostPathVolumeSource;
    'iscsi'?: IoK8sApiCoreV1ISCSIVolumeSource;
    /**
    * Volume\'s name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;
    'nfs'?: IoK8sApiCoreV1NFSVolumeSource;
    'persistentVolumeClaim'?: IoK8sApiCoreV1PersistentVolumeClaimVolumeSource;
    'photonPersistentDisk'?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
    'portworxVolume'?: IoK8sApiCoreV1PortworxVolumeSource;
    'projected'?: IoK8sApiCoreV1ProjectedVolumeSource;
    'quobyte'?: IoK8sApiCoreV1QuobyteVolumeSource;
    'rbd'?: IoK8sApiCoreV1RBDVolumeSource;
    'scaleIO'?: IoK8sApiCoreV1ScaleIOVolumeSource;
    'secret'?: IoK8sApiCoreV1SecretVolumeSource;
    'storageos'?: IoK8sApiCoreV1StorageOSVolumeSource;
    'vsphereVolume'?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "awsElasticBlockStore",
            "baseName": "awsElasticBlockStore",
            "type": "IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource"
        },
        {
            "name": "azureDisk",
            "baseName": "azureDisk",
            "type": "IoK8sApiCoreV1AzureDiskVolumeSource"
        },
        {
            "name": "azureFile",
            "baseName": "azureFile",
            "type": "IoK8sApiCoreV1AzureFileVolumeSource"
        },
        {
            "name": "cephfs",
            "baseName": "cephfs",
            "type": "IoK8sApiCoreV1CephFSVolumeSource"
        },
        {
            "name": "cinder",
            "baseName": "cinder",
            "type": "IoK8sApiCoreV1CinderVolumeSource"
        },
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "IoK8sApiCoreV1ConfigMapVolumeSource"
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "IoK8sApiCoreV1DownwardAPIVolumeSource"
        },
        {
            "name": "emptyDir",
            "baseName": "emptyDir",
            "type": "IoK8sApiCoreV1EmptyDirVolumeSource"
        },
        {
            "name": "fc",
            "baseName": "fc",
            "type": "IoK8sApiCoreV1FCVolumeSource"
        },
        {
            "name": "flexVolume",
            "baseName": "flexVolume",
            "type": "IoK8sApiCoreV1FlexVolumeSource"
        },
        {
            "name": "flocker",
            "baseName": "flocker",
            "type": "IoK8sApiCoreV1FlockerVolumeSource"
        },
        {
            "name": "gcePersistentDisk",
            "baseName": "gcePersistentDisk",
            "type": "IoK8sApiCoreV1GCEPersistentDiskVolumeSource"
        },
        {
            "name": "gitRepo",
            "baseName": "gitRepo",
            "type": "IoK8sApiCoreV1GitRepoVolumeSource"
        },
        {
            "name": "glusterfs",
            "baseName": "glusterfs",
            "type": "IoK8sApiCoreV1GlusterfsVolumeSource"
        },
        {
            "name": "hostPath",
            "baseName": "hostPath",
            "type": "IoK8sApiCoreV1HostPathVolumeSource"
        },
        {
            "name": "iscsi",
            "baseName": "iscsi",
            "type": "IoK8sApiCoreV1ISCSIVolumeSource"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nfs",
            "baseName": "nfs",
            "type": "IoK8sApiCoreV1NFSVolumeSource"
        },
        {
            "name": "persistentVolumeClaim",
            "baseName": "persistentVolumeClaim",
            "type": "IoK8sApiCoreV1PersistentVolumeClaimVolumeSource"
        },
        {
            "name": "photonPersistentDisk",
            "baseName": "photonPersistentDisk",
            "type": "IoK8sApiCoreV1PhotonPersistentDiskVolumeSource"
        },
        {
            "name": "portworxVolume",
            "baseName": "portworxVolume",
            "type": "IoK8sApiCoreV1PortworxVolumeSource"
        },
        {
            "name": "projected",
            "baseName": "projected",
            "type": "IoK8sApiCoreV1ProjectedVolumeSource"
        },
        {
            "name": "quobyte",
            "baseName": "quobyte",
            "type": "IoK8sApiCoreV1QuobyteVolumeSource"
        },
        {
            "name": "rbd",
            "baseName": "rbd",
            "type": "IoK8sApiCoreV1RBDVolumeSource"
        },
        {
            "name": "scaleIO",
            "baseName": "scaleIO",
            "type": "IoK8sApiCoreV1ScaleIOVolumeSource"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "IoK8sApiCoreV1SecretVolumeSource"
        },
        {
            "name": "storageos",
            "baseName": "storageos",
            "type": "IoK8sApiCoreV1StorageOSVolumeSource"
        },
        {
            "name": "vsphereVolume",
            "baseName": "vsphereVolume",
            "type": "IoK8sApiCoreV1VsphereVirtualDiskVolumeSource"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Volume.attributeTypeMap;
    }
}

