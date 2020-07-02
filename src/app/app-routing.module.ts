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




const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent},

  {path: 'client/:id', component: ClientDetailsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
