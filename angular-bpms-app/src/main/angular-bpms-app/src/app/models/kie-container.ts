import { HttpHeaders } from '@angular/common/http';

export interface KieContainer {
  status: string;
  messages?: any;
  ["container-id"]: string;
  ["release-id"]?: any;
  ["resolved-release-id"]?: any;
  ["config-items"]?: any;
  error?:any;
}

interface KeyContainerConfig {
  "version": string;
  "group-id": string;
  "artifact-id": string;
}


export interface KieContainerCreate {
  ["container-id"]?: string;
  "release-id": any;
}

export interface ProcessDefinitions {
  processes: string[];
}

export interface ProcessInstance {
  'process-instance': string[];
}

export interface HeaderOptions {
  headers: HttpHeaders,
  withCredentials?:boolean
}




