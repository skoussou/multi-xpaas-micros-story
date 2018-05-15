echo "--------------------------------"
echo "finding payments KieContainer in server"
echo "--------------------------------"
curl -X DELETE -u stelios:stelios123! "http://localhost:8080/kie-server/services/rest/server/containers/payments" -H  "accept: application/xml"
