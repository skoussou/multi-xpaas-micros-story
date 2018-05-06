# Ang4Bpms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## BPMS Development server

The application calls the BPMS Kie-Server rest api. All the http requests are contained within the kie-containers.service.ts file. The services use basic auth therefore the authorisation token needs to be amended for you environment.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# CONFIGURATION / LOGIN

The Login Page is not connected to anything currently - any credentials will login successfully.  BPM Hostname and Basic Authorization default values are currently hardcoded in the AuthService.  

*`TODO:`* A Login REST call needs to be added to AuthService, the response to this call should include BPM host name and credentials