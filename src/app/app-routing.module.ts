import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import {StockageModule} from './modules/stockage/stockage.module'
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';
import { SmartphonesComponent } from './telephones/smartphones/smartphones.component';
import { CleusbComponent } from './stockage/cleusb/cleusb.component';
import { DisquedurComponent } from './stockage/disquedur/disquedur.component';
import { StockageAccessoiresComponent } from './stockage/stockage-accessoires/stockage-accessoires.component';
import { TelfixeComponent } from './telephones/telfixe/telfixe.component';
import { TelaccessoiresComponent } from './telephones/telaccessoires/telaccessoires.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ListeArticleComponent, } from './liste-article/liste-article.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { AuthontificationGuardGuard } from './guards/authontification-guard.guard';

const routes: Routes = [
{ path: '', component: HomeComponent , canActivate: [AuthontificationGuardGuard]  },
{ path: 'PcPortable', component: PcPortableComponent  , canActivate: [AuthontificationGuardGuard] },
{ path: 'pcburreau', component: PcBureauComponent  , canActivate: [AuthontificationGuardGuard]},
{ path: 'panier/:id', component: PanierComponent  , canActivate: [AuthontificationGuardGuard] },
{ path: 'pcaccessoires', component: PcAccessoiresComponent , canActivate: [AuthontificationGuardGuard]},
{ path: 'Connexion', component: ConnexionComponent    },
{ path: 'helloworld', component: HelloworldComponent , canActivate: [AuthontificationGuardGuard]},
{ path: 'smartphones', component: SmartphonesComponent , canActivate: [AuthontificationGuardGuard] },
{ path: 'cleusb', component: CleusbComponent, canActivate: [AuthontificationGuardGuard] },
{ path: 'disquedur', component: DisquedurComponent, canActivate: [AuthontificationGuardGuard] },
{ path: 'stockageAccessoires', component: StockageAccessoiresComponent, canActivate: [AuthontificationGuardGuard] },
{ path: 'stockage', loadChildren :'./modules/stockage/stockage.module#StockageModule' , canActivate: [AuthontificationGuardGuard] },
{ path: 'telfixe', component: TelfixeComponent , canActivate: [AuthontificationGuardGuard]},
{ path: 'telaccessoires', component: TelaccessoiresComponent , canActivate: [AuthontificationGuardGuard]},
{ path: 'ajouterarticle', component: AjouterArticleComponent , canActivate: [AuthontificationGuardGuard]},
{ path: 'listearticle', component: ListeArticleComponent, canActivate: [AuthontificationGuardGuard]},
{ path: 'editarticle/:id', component: EditarticleComponent , canActivate: [AuthontificationGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
