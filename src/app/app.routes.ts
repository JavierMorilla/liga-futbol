import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClasificacionesComponent } from './pages/clasificaciones/clasificaciones.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { EquiposComponent } from './pages/equipos/equipos.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clasificaciones', component: ClasificacionesComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'equipos', component: EquiposComponent }
];
