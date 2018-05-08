import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { KieContainersComponent } from './kie-containers/kie-containers.component';
import { ProcessesComponent } from './processes/processes.component';
import { ProcessDetailComponent } from './process-detail/process-detail.component';
import { ProcessDefinitionsComponent } from './process-definitions/process-definitions.component';
import { PayeeDetailsComponent } from './payee-details/payee-details.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'kie-containers', component: KieContainersComponent, canActivate: [AuthGuard] },
  { path: 'processes', component: ProcessesComponent, canActivate: [AuthGuard] },
  { path: 'processDefinitions', component: ProcessDefinitionsComponent, canActivate: [AuthGuard] },
  { path: 'process-detail/:id', component: ProcessDetailComponent, canActivate: [AuthGuard] },
  { path: 'payee-details', component: PayeeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'bill-payments', component: BillPaymentsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
