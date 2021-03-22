import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PhonesModule } from './modules/phones/phones.module';
import { StockageComponent } from './stockage/stockage.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { ProduitComponent } from './produit/produit.component';
import { SmartphonesComponent } from './telephones/smartphones/smartphones.component';
import { TelfixeComponent } from './telephones/telfixe/telfixe.component';
import { TelaccessoiresComponent } from './telephones/telaccessoires/telaccessoires.component';
import { DisquedurComponent } from './stockage/disquedur/disquedur.component';
import { CleusbComponent } from './stockage/cleusb/cleusb.component';
import { StockageAccessoiresComponent } from './stockage/stockage-accessoires/stockage-accessoires.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { CommonModule } from '@angular/common';
import {ListeArticleComponent} from './liste-article/liste-article.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { AuthontificationGuardGuard } from './guards/authontification-guard.guard';
import { LoginService } from './services/login.service';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PcPortableComponent,
    PcBureauComponent,
    HomeComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    StockageComponent,
    HelloworldComponent,
    PanierComponent,
    ProduitComponent,
    SmartphonesComponent,
    TelfixeComponent,
    TelaccessoiresComponent,
    DisquedurComponent,
    CleusbComponent,
    StockageAccessoiresComponent,
    AjouterArticleComponent,
    ListeArticleComponent,
    EditarticleComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    HttpClientModule
  ],
  providers: [LoginService,AuthontificationGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
