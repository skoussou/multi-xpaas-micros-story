# PAYMENTS UI

## Create Build
oc new-build --binary=true --image-stream=jboss-eap71-openshift:1.2 --name=payments-ui --allow-missing-images
oc start-build payments-ui --from-file=/home/stkousso/Stelios/Projects/0047-UAEXchange/uae-workspace/spring-web-uis/spring-webapp-template/target/payments-ui.war

## Create Deployment Config
----
apiVersion: v1
kind: DeploymentConfig
metadata:
  labels:
    application: payments-ui
  name: payments-ui
spec:
  replicas: 1
  selector:
    deploymentConfig: payments-ui
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        application: payments-ui
        deploymentConfig: payments-ui
      name: payments-ui
    spec:
      containers:
      - env:
        - name: JGROUPS_PING_PROTOCOL
          value: openshift.DNS_PING
        - name: OPENSHIFT_DNS_PING_SERVICE_NAME
          value: payments-ui-ping
        - name: OPENSHIFT_DNS_PING_SERVICE_PORT
          value: "8888"
        - name: MQ_CLUSTER_PASSWORD
          value: 324324sca
        - name: MQ_QUEUES
          value: someque
        - name: MQ_TOPICS
          value: sometopic
        - name: JGROUPS_CLUSTER_PASSWORD
          value: dfa223few
        image: payments-ui
        imagePullPolicy: Always
        livenessProbe:
          exec:
            command:
            - /bin/bash
            - -c
            - /opt/eap/bin/livenessProbe.sh
          initialDelaySeconds: 60
        name: payments-ui
        ports:
        - containerPort: 8778
          name: jolokia
          protocol: TCP
        - containerPort: 8080
          name: http
          protocol: TCP
        - containerPort: 8888
          name: ping
          protocol: TCP
        readinessProbe:
          exec:
            command:
            - /bin/bash
            - -c
            - /opt/eap/bin/readinessProbe.sh
        resources:
          limits:
            memory: 1Gi
      terminationGracePeriodSeconds: 75
  triggers:
  - imageChangeParams:
      automatic: true
      containerNames:
      - payments-ui
      from:
        kind: ImageStreamTag
        name: payments-ui:1.0.0
    type: ImageChange
  - type: ConfigChange
----

## Create Service
Service for http
----
apiVersion: v1
kind: Service
metadata:
  annotations:
    description: The web server's http port.
  labels:
    application: ${APPLICATION_NAME}
  name: ${APPLICATION_NAME}
spec:
  ports:
  - port: 8080
    targetPort: 8080
  selector:
    deploymentConfig: ${APPLICATION_NAME}
----

Service for ping
----
apiVersion: v1
kind: Service
metadata:
  annotations:
    description: The JGroups ping port for clustering.
    service.alpha.kubernetes.io/tolerate-unready-endpoints: "true"
  labels:
    application: ${APPLICATION_NAME}
  name: ${APPLICATION_NAME}-ping
spec:
  clusterIP: None
  ports:
  - name: ping
    port: 8888
  selector:
    deploymentConfig: ${APPLICATION_NAME}
----

## Create Service Route

for now via the UI



## PAYMENTS UI

### Payees

### Bill Payments

### Kie COntainers

