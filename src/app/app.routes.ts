import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './auth.guard'; // Vérifiez le bon chemin

import { PresenceComponent } from './components/presence/presence.component';
import { VigileComponent } from './components/vigile/vigile.component';
import { DetailsRapportComponent } from './components/details-rapport/details-rapport.component';
import { DemandeComponent } from './components/demande/demande.component';
import { ServiceComponent } from './components/service/service.component';



import { RondComponent } from './components/rond/rond.component';

// import { RegisterComponent } from './components/auth/register.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { VigileListComponent } from './components/vigile/vigile-list.component';
// import { VigileDetailComponent } from './components/vigile/vigile-detail.component';
// import { SocieteListComponent } from './components/societe/societe-list.component';
// import { IncidentComponent } from './components/incident/incident.component';
// import { AffectationComponent } from './components/affectation/affectation.component';
// import { PointControleComponent } from './components/point-controle/point-controle.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';

// // Guard à implémenter
// import { AuthGuard } from './guards/auth.guard';
// import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    
    { path: 'dashboard', component: DashboardComponent },
    
    { path: 'presence', component: PresenceComponent },
    { path: 'vigile', component: VigileComponent, canActivate: [authGuard] },
    { path: 'rapport', component: DetailsRapportComponent, canActivate: [authGuard] },
    { path: 'demande', component: DemandeComponent, canActivate: [authGuard] },
    { path: 'service', component: ServiceComponent, canActivate: [authGuard] },


    

//     { path: 'presences/add', component: PresenceComponent, canActivate: [AuthGuard] },
//     { path: 'presences/:id', component: PresenceComponent, canActivate: [AuthGuard] },
    
//     // Routes pour les rondes
//     { path: 'rond', component: RondComponent, canActivate: [AuthGuard] },
//     { path: 'rond/add', component: RondComponent, canActivate: [AuthGuard] },
//     { path: 'rond/:id', component: RondComponent, canActivate: [AuthGuard] },
    
//     // Routes pour les vigiles (admin uniquement)
//     { path: 'vigiles', component: VigileListComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'vigiles/add', component: VigileDetailComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'vigiles/:id', component: VigileDetailComponent, canActivate: [AuthGuard, AdminGuard] },
    
//     // Routes pour les sociétés de gardiennage (admin uniquement)
//     { path: 'societes', component: SocieteListComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'societes/add', component: SocieteListComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'societes/:id', component: SocieteListComponent, canActivate: [AuthGuard, AdminGuard] },
    
//     // Routes pour les incidents
//     { path: 'incidents', component: IncidentComponent, canActivate: [AuthGuard] },
//     { path: 'incidents/add', component: IncidentComponent, canActivate: [AuthGuard] },
//     { path: 'incidents/:id', component: IncidentComponent, canActivate: [AuthGuard] },
    
//     // Routes pour les affectations
//     { path: 'affectations', component: AffectationComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'affectations/add', component: AffectationComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'affectations/:id', component: AffectationComponent, canActivate: [AuthGuard, AdminGuard] },
    
//     // Routes pour les points de contrôle
//     { path: 'points-controle', component: PointControleComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'points-controle/add', component: PointControleComponent, canActivate: [AuthGuard, AdminGuard] },
//     { path: 'points-controle/:id', component: PointControleComponent, canActivate: [AuthGuard, AdminGuard] },
    
//     // Route wildcard pour la page 404
    // { path: '**', component: NotFoundComponent }
];