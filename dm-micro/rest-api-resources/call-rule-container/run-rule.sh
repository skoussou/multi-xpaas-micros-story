#echo curl -X POST http://localhost:8080/kie-server/services/rest/server/containers/instances/payments -H 'Content-type: application/json' -H  'accept: application/json' -u 'stelios:stelios123!' --data @CommandRequest.json
#curl -X POST http://localhost:8080/kie-server/services/rest/server/containers/instances/payments -H 'Content-type: application/json' -H  'accept: application/json' -u 'stelios:stelios123!' --data @CommandRequest.json

VARIABLE=$1

#echo curl -X POST "http://localhost:8080/kie-server/services/rest/server/containers/instances/payments" -u 'stelios:stelios123!' -H  "accept: application/json" -H  "content-type: application/json" -d "{      \"lookup\" : null,      \"commands\" : [ {        \"insert\" : {          \"java.lang.Double\" : \"$VARIABLE\",          \"disconnected\" : false,          \"out-identifier\" : \"results\",          \"return-object\" : true,          \"entry-point\" : \"DEFAULT\"        }      }, {        \"fire-all-rules\" : { }      } ]}"


#curl -X POST "http://localhost:8080/kie-server/services/rest/server/containers/instances/payments" -u 'stelios:stelios123!' -H  "accept: application/json" -H  "content-type: application/json" -d "{      \"lookup\" : null,      \"commands\" : [ {        \"insert\" : {          \"java.lang.Double\" : ${VARIABLE},          \"disconnected\" : false,          \"out-identifier\" : \"results\",          \"return-object\" : true,          \"entry-point\" : \"DEFAULT\"        }      }, {        \"fire-all-rules\" : { }      } ]}"

#echo curl -X POST "http://localhost:8080/kie-server/services/rest/server/containers/instances/payments" -u 'stelios:stelios123!' -H  "accept: application/json" -H  "content-type: application/json" -d "{      \"lookup\" : null,      \"commands\" : [ {        \"insert\" : {          \"com.redhat.consulting.domain.InFact\":{\"paymentValue\":${VARIABLE}},          \"disconnected\" : false,          \"out-identifier\" : \"results\",          \"return-object\" : true,          \"entry-point\" : \"DEFAULT\"        }      }, {        \"fire-all-rules\" : { }      } ]}"


#curl -X POST "http://localhost:8080/kie-server/services/rest/server/containers/instances/payments" -u 'stelios:stelios123!' -H  "accept: application/json" -H  "content-type: application/json" -d "{      \"lookup\" : null,      \"commands\" : [ {        \"insert\" : {          \"com.redhat.consulting.domain.InFact\" : {\"paymentValue\":${VARIABLE}},          \"disconnected\" : false,          \"out-identifier\" : \"results\",          \"return-object\" : true,          \"entry-point\" : \"DEFAULT\"        }      }, {        \"fire-all-rules\" : { }      } ]}"

# [
#  {
#  "com.redhat.consulting.domain":{"paymentValue":${VARIABLE}}
#   },
#  {
#    "org.jbpm.test.Person":{
#       "name":"mary",
#       "age":22}
#   }
#]

echo curl -X POST "http://localhost:8080/kie-server/services/rest/server/containers/instances/payments" -u 'stelios:stelios123!' -H  "accept: application/json" -H  "content-type: application/json" -d @${VARIABLE}

curl -X POST "http://localhost:8080/kie-server/services/rest/server/containers/instances/payments" -u 'stelios:stelios123!' -H  "accept: application/json" -H  "content-type: application/json" -d @${VARIABLE}

# APPROVAL 1 - Both Approved
#{"commands":[{"insert":{"out-identifier":"PAYMENT_APPROVAL","return-object":true,"entry-point":"DEFAULT","object":{"com.redhat.consulting.domain.InFact":{"paymentValue":990}}}},{"insert":{"out-identifier":"PAYMENT_APPROVAL","return-object":true,"entry-point":"DEFAULT","object":{"com.redhat.consulting.domain.InFact":{{"paymentValue":880}}}},{"fire-all-rules":""}]}

# APPROVAL 2 - Both Rejected
#{"commands":[{"insert":{"out-identifier":"PAYMENT_APPROVAL","return-object":true,"entry-point":"DEFAULT","object":{"com.redhat.consulting.domain.InFact":{"paymentValue":1100}}}},{"insert":{"out-identifier":"PAYMENT_APPROVAL","return-object":true,"entry-point":"DEFAULT","object":{"com.redhat.consulting.domain.InFact":{{"paymentValue":1200}}}},{"fire-all-rules":""}]}

# APPROVAL 3 - OneAndOne
#{"commands":[{"insert":{"out-identifier":"PAYMENT_APPROVAL","return-object":true,"entry-point":"DEFAULT","object":{"com.redhat.consulting.domain.InFact":{"paymentValue":990}}}},{"insert":{"out-identifier":"PAYMENT_APPROVAL","return-object":true,"entry-point":"DEFAULT","object":{"com.redhat.consulting.domain.InFact":{{"paymentValue":1200}}}},{"fire-all-rules":""}]}


