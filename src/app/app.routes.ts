import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocacaoComponent } from './components/locacao/locacao.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'cadastrar', component: LocacaoComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'cadastrar/:id', component: LocacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
