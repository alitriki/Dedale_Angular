import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StagesRechercheComponent } from './stages_recherche/stages-recherche.component';
import { StagesResultatComponent } from './stages_resultat/stages-resultat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app.routing';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EntreprisesPalmaresComponent } from './entreprises_palmares/entreprises-palmares.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    StagesRechercheComponent,
    StagesResultatComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    EntreprisesPalmaresComponent,
    EntrepriseComponent,
    ModifierProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
