import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackgroundGalaxyComponent } from './shared/components/background-galaxy/background-galaxy.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'background', component: BackgroundGalaxyComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: "/page-not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
