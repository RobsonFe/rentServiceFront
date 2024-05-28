import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LocacaoComponent } from './components/locacao/locacao.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { EditarComponent } from './components/editar/editar.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: LocacaoComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'editar', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
