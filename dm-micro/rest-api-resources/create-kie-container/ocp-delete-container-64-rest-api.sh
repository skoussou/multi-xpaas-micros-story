SERVICE=http://uaex-rules-api-poc.192.168.42.210.nip.io
#KIE_USERNAME=stelios
KIE_USERNAME=kieserver
#KIE_PASSWORD=stelios123!
KIE_PASSWORD=kieserver123!

echo "curl -X DELETE -u ${KIE_USERNAME}:${KIE_PASSWORD} \"${SERVICE}/kie-server/services/rest/server/containers/payments\" -H  \"accept: application/xml\""
curl -X DELETE -u "${KIE_USERNAME}:${KIE_PASSWORD}" "${SERVICE}/kie-server/services/rest/server/containers/payments" -H  "accept: application/xml"
