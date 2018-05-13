#echo 'curl -X PUT -u stelios:stelios123 -H 'Content-type: application/xml' -d test.xml http://localhost:8080/kie-server/server/containers/payments'
#curl -X PUT -u stelios:stelios123! -H 'Content-type: application/xml' -d test.xml http://localhost:8080/kie-server/services/rest/server/containers/payments

echo 'curl -X PUT "http://localhost:8080/kie-server/services/rest/server/containers/payments" -H  "accept: application/xml" -H  "content-type: application/xml" -d "<?xml version=\"1.0\" encoding=\"UTF-8\"?><kie-container container-id=\"payments\"><release-id><group-id>com.redhat.consulting</group-id><artifact-id>dm-micro</artifact-id><version>1.0.0</version></release-id></kie-container>"'

curl -X PUT "http://localhost:8080/kie-server/services/rest/server/containers/payments" -H  "accept: application/xml" -H  "content-type: application/xml" -d "<?xml version=\"1.0\" encoding=\"UTF-8\"?><kie-container container-id=\"payments\"><release-id><group-id>com.redhat.consulting</group-id><artifact-id>dm-micro</artifact-id><version>1.0.0</version></release-id></kie-container>"
