// openshift-utils methods

def applyTemplate(project, templateFile, appName, appVersion, imageStreamName, customParameters, skipObjects) {
   echo "Applying template ${templateFile} in project ${project}. Application: ${appName}-${appVersion}"
   openshift.withProject( project ) {
      echo "Additional parameters for template are ${customParameters}"
      def models = openshift.process( readFile(templateFile), "-p APPLICATION_NAME=${appName}", "-p APP_VERSION=${appVersion}", customParameters )
      echo "Discarding objects of type ${skipObjects}"

   }

}

return this
