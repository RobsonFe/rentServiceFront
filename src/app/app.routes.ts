import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LocacaoComponent } from './components/locacao/locacao.component';

export const routes: Routes = [
  {path: " ", component:LoginComponent},
  {path: "/login", component:LoginComponent},
  {path: "/home", component:HomeComponent},
  {path: "/locacao", component:LocacaoComponent}
];
