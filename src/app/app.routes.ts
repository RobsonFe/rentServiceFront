import { RouterModule, Routes } from '@angular/router';
import { LocacaoComponent } from './components/locacao/locacao.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { NgModule } from '@angular/core';
import { GreetingsComponent } from './pages/greetings/greetings.component';

export const routes: Routes = [
  { path: '', component: GreetingsComponent },
  { path: 'greetings', component: GreetingsComponent },
  { path: 'cadastrar', component: LocacaoComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'cadastrar/:id', component: LocacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
