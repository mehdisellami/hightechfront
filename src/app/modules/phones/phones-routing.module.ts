import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { PcPortableComponent } from 'src/app/pc-portable/pc-portable.component';
import { TelephoneComponent } from 'src/app/telephone/telephone.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'phone', component: TelephoneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
