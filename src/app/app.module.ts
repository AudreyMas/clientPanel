import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compornents/navbar/navbar.component';
import { LoginComponent } from './compornents/login/login.component';
import { RegisterComponent } from './compornents/register/register.component';
import { ClientDetailsComponent } from './compornents/client-details/client-details.component';
import { DashboardComponent } from './compornents/dashboard/dashboard.component';
import { ClientComponent } from './compornents/client/client.component';
import { SidebarComponent } from './compornents/sidebar/sidebar.component';
import { AddClientComponent } from './compornents/add-client/add-client.component';
import { EditClientComponent } from './compornents/edit-client/edit-client.component';
import { SettingsComponent } from './compornents/settings/settings.component';
import { NotFoundComponent } from './compornents/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ClientDetailsComponent,
    DashboardComponent,
    ClientComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'clientpanel'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
