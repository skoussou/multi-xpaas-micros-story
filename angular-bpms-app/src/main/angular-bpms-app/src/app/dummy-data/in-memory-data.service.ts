import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const kieContainers = {
        "type" : "SUCCESS",
        "msg" : "List of created containers",
        "result" : {"kie-containers" : {
                        "kie-container" :[
                            {
                                "status" : "STARTED",
                                "messages" : [ {
                                  "severity" : "INFO",
                                  "timestamp" : 1516398387811,
                                  "content" : [ "Container demoContain2.8 successfully created with module org.sample.bpm:SampleProject:1.0-SNAPSHOT." ]
                                } ],
                                "container-id" : "demoContain2.8",
                                "release-id" : {
                                  "version" : "1.0-SNAPSHOT",
                                  "group-id" : "org.sample.bpm",
                                  "artifact-id" : "SampleProject"
                                },
                                "resolved-release-id" : {
                                  "version" : "1.0-SNAPSHOT",
                                  "group-id" : "org.sample.bpm",
                                  "artifact-id" : "SampleProject"
                                },
                                "config-items" : [ ]
                              }, 
                            {
                                "status" : "STOPPED",
                                "messages" : [ {
                                  "severity" : "INFO",
                                  "timestamp" : 1516398414402,
                                  "content" : [ "Container demoContain1.0 successfully created with module org.sample.bpm:SampleProject:1.0-SNAPSHOT." ]
                                } ],
                                "container-id" : "demoContain1.0",
                                "release-id" : {
                                  "version" : "1.0-SNAPSHOT",
                                  "group-id" : "org.sample.bpm",
                                  "artifact-id" : "SampleProject"
                                },
                                "resolved-release-id" : {
                                  "version" : "1.0-SNAPSHOT",
                                  "group-id" : "org.sample.bpm",
                                  "artifact-id" : "SampleProject"
                                },
                                "config-items" : [ ]
                          }
                        ]
                    }
                }         
        };
    return {kieContainers};
  }
}

