import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { Mealoption1Component } from './mealoption1/mealoption1.component';
import { Mealoption2Component } from './mealoption2/mealoption2.component';
import { Mealoption3Component } from './mealoption3/mealoption3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'meal1', component: Mealoption1Component },
  { path: 'meal2', component: Mealoption2Component },
  { path: 'meal3', component: Mealoption3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
