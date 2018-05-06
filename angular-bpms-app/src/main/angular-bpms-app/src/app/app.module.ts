import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './dummy-data/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { KieContainersComponent } from './kie-containers/kie-containers.component';
import {
  AuthService
} from './services/auth.service';
import {
  AuthGuardService
} from './services/auth-guard.service';
import {
  KieContainersService,
  MessageService
} from './services';

import {
  SettingsService
} from './services/settings.service';

import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationModule } from 'patternfly-ng';
import { ProcessesComponent } from './processes/processes.component';
import { ProcessDetailComponent } from './process-detail/process-detail.component';
import { ProcessDefinitionsComponent } from './process-definitions/process-definitions.component';
import { ProcessDefinitionDetailComponent } from './process-definition-detail/process-definition-detail.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FilterComponent,
  ModalContainerComponent,
  ModalProcessDetailsComponent,
  ModalSettingsComponent,
  NavHeaderComponent,
  PaginationComponent,
  SortComponent
} from './components';
import {
  BsDropdownConfig,
  BsDropdownModule
} from 'ngx-bootstrap';
import {
  FilterArrayPipe,
  ProcessStatusPipe,
  SortArrayPipe
} from './pipes';
import { PayeeDetailsComponent } from './payee-details/payee-details.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';

@NgModule({
  imports: [
    NotificationModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    CommonModule,
    InlineSVGModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    // HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    KieContainersComponent,
    LoginComponent,
    MessagesComponent,
    ProcessesComponent,
    ProcessDetailComponent,
    ProcessDefinitionsComponent,
    ProcessDefinitionDetailComponent,
    ModalContainerComponent,
    ModalProcessDetailsComponent,
    ModalSettingsComponent,
    SortComponent,
    FilterComponent,
    PaginationComponent,
    NavHeaderComponent,
    SortArrayPipe,
    FilterArrayPipe,
    ProcessStatusPipe,
    PayeeDetailsComponent,
    BillPaymentsComponent
  ],
  entryComponents: [
    ModalContainerComponent,
    ModalProcessDetailsComponent,
    ModalSettingsComponent,
    LoginComponent
  ],
  providers: [
    SettingsService,
    KieContainersService,
    MessageService,
    AuthGuardService,
    AuthService,
    BsDropdownConfig,
    FilterArrayPipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: Window, useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
