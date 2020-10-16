import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GianfrancomarmoComponent } from './riders/gianfrancomarmo/gianfrancomarmo.component';
import { SimonelicheriComponent } from './riders/simonelicheri/simonelicheri.component';
import { SpotsComponent } from './spots/spots.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'spots', component: SpotsComponent },
  { path: 'gianfrancomarmo', component: GianfrancomarmoComponent },
  { path: 'simonelicheri', component: SimonelicheriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
