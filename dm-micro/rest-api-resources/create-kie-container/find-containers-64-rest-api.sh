echo "--------------------------------"
echo "finding any KieContainer in server"
echo "--------------------------------"
curl -u stelios:stelios123! -X GET "http://localhost:8080/kie-server/services/rest/server/containers" -H  "accept: application/xml"

echo
echo
echo "--------------------------------"
echo "checking payments KIeContainer"
echo "--------------------------------"
curl -X GET -u stelios:stelios123! "http://localhost:8080/kie-server/services/rest/server/containers/payments" -H  "accept: application/xml"
