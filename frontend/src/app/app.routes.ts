import { Routes } from '@angular/router';
import { ChemicalpageComponent } from './../chemicalPage/chemicalPage.component';
import { HomepageComponent } from './../homePage/homePage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, 
  { path: 'detail/:id', component: ChemicalpageComponent }, 
];