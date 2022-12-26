import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { BackgroundGalaxyComponent } from './shared/components/background-galaxy/background-galaxy.component';


import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    HomeComponent,
    PageNotFoundComponent,
    BackgroundGalaxyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
