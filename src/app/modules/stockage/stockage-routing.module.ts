import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { StockageComponent } from 'src/app/stockage/stockage.component';


const routes: Routes = [
  { path: 'disque', component: StockageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockageRoutingModule { }
