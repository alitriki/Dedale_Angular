import {Routes, RouterModule} from "@angular/router";
import { StagesRechercheComponent } from './stages_recherche/stages-recherche.component';
import { StagesResultatComponent } from './stages_resultat/stages-resultat.component';
import { EntreprisesPalmaresComponent } from './entreprises_palmares/entreprises-palmares.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';




const APP_ROUTES : Routes = [
  // {path:'', component: AppComponent, pathMatch: 'full'},
  {path:'', redirectTo: '/acceuil', pathMatch: 'full'},
  {path:'acceuil', component: AcceuilComponent},
  {path:'stages_recherche', component: StagesRechercheComponent},
  {path:'stages_resultat', component: StagesResultatComponent},
  {path:'entreprises_palmares', component: EntreprisesPalmaresComponent},
  {path:'entreprise', component: EntrepriseComponent},
  {path:'modifier_profil', component: ModifierProfilComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
