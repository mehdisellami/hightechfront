import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import {StockageModule} from './modules/stockage/stockage.module'
import { HelloworldComponent } from './helloworld/helloworld.component';
import { NoauthontificationGuardGuard } from './guards/noauthontification-guard.guard';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';
import { SmartphonesComponent } from './telephones/smartphones/smartphones.component';
import { CleusbComponent } from './stockage/cleusb/cleusb.component';
import { DisquedurComponent } from './stockage/disquedur/disquedur.component';
import { StockageAccessoiresComponent } from './stockage/stockage-accessoires/stockage-accessoires.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'PcPortable', component: PcPortableComponent  },
{ path: 'PcBureau', component: PcBureauComponent  },
{ path: 'panier', component: PanierComponent  },
{ path: 'PcAccessoires', component: PcAccessoiresComponent },
{ path: 'Connexion', component: ConnexionComponent    },
{ path: 'helloworld', component: HelloworldComponent },
{ path: 'smartphones', component: SmartphonesComponent },
{ path: 'cleusb', component: CleusbComponent },
{ path: 'disquedur', component: DisquedurComponent },
{ path: 'stockageAccessoires', component: StockageAccessoiresComponent },
{ path: 'stockage', loadChildren :'./modules/stockage/stockage.module#StockageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
