import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GianfrancomarmoComponent } from './riders/gianfrancomarmo/gianfrancomarmo.component';
import { SimonelicheriComponent } from './riders/simonelicheri/simonelicheri.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gianfrancomarmo', component: GianfrancomarmoComponent },
  { path: 'simonelicheri', component: SimonelicheriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
