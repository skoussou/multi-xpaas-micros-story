// openshift-utils methods

def applyTemplate(project, templateFile, appName, appVersion, imageStreamName, customParameters, skipObjects) {
   echo "Applying template ${templateFile} in project ${project}. Application: ${appName}-${appVersion}"
   openshift.withProject( project ) {
      echo "Additional parameters for template are ${customParameters}"
      //def models = openshift.process( readFile(file:templateFile), "-p APPLICATION_NAME=${appName}", "-p APP_VERSION=${appVersion}", "-p IMAGESTREAM_NAME=${imageStreamName}", customParameters )
      def models = openshift.process( readFile(templateFile, "-p APPLICATION_NAME=${appName}", "-p APP_VERSION=${appVersion}", customParameters )
      echo "Discarding objects of type ${skipObjects}"
      for ( o in models ) {
         // we will discard skipObjects
         def skip = false
         for ( skipObject in skipObjects ) {
           if (o.kind == skipObject) {
	      skip = true
	      break
           }
         }
         if (!skip) {
            echo "Applying changes on ${o.kind}"
            filterObject(o)
            def created = openshift.apply(o) 
           // do we want to show "created"?
         }
      }
   }
}

return this
