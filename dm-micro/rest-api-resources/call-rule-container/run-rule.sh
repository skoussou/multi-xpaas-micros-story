#echo curl -X POST http://localhost:8080/kie-server/services/rest/server/containers/instances/payments -H 'Content-type: application/json' -H  'accept: application/json' -u 'stelios:stelios123!' --data @CommandRequest.json
#curl -X POST http://localhost:8080/kie-server/services/rest/server/containers/instances/payments -H 'Content-type: application/json' -H  'accept: application/json' -u 'stelios:stelios123!' --data @CommandRequest.json



curl -X POST "http://localhost:8080/kie-server/services/rest/server/containers/instances/payments" -u 'stelios:stelios123!' -H  "accept: application/xml" -H  "content-type: application/json" -d "{      \"lookup\" : null,      \"commands\" : [ {        \"insert\" : {          \"object\" : \"testing\",          \"disconnected\" : false,          \"out-identifier\" : null,          \"return-object\" : true,          \"entry-point\" : \"DEFAULT\"        }      }, {        \"fire-all-rules\" : { }      } ]}"
