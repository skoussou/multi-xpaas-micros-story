// openshift-utils methods

def applyTemplate(project, templateFile, appName, appVersion, imageStreamName, customParameters, skipObjects) {
   echo "Applying template ${templateFile} in project ${project}. Application: ${appName}-${appVersion}"
      echo "Additional parameters for template are ${customParameters}"

}

return this
