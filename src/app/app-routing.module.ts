import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './compornents/dashboard/dashboard.component';
import { LoginComponent } from './compornents/login/login.component';
import { RegisterComponent } from './compornents/register/register.component';
import { AddClientComponent } from './compornents/add-client/add-client.component';
import { EditClientComponent } from './compornents/edit-client/edit-client.component';
import { SettingsComponent } from './compornents/settings/settings.component';
import { NotFoundComponent } from './compornents/not-found/not-found.component';
import { ClientDetailsComponent } from './compornents/client-details/client-details.component';

import {AuthGuard} from './guards/auth.gards'



const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client/add', component: AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/edit/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
