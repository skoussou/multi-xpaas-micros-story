SERVICE=http://uaex-rules-api-poc.192.168.42.210.nip.io
#KIE_USERNAME=stelios
KIE_USERNAME=kieserver
#KIE_PASSWORD=stelios123!
KIE_PASSWORD=kieserver123!

curl -X GET -u ${KIE_USERNAME}:${KIE_PASSWORD} "${SERVICE}/kie-server/services/rest/server/payments" -H  "accept: application/xml"
