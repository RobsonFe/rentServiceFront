import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LocacaoComponent } from './components/locacao/locacao.component';
import jQuery from 'jquery';
import { LocacaoService } from './service/locacao.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { EditarComponent } from './components/editar/editar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    LocacaoComponent,
    HttpClientModule,
    ConsultarComponent,
    EditarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LocacaoService, HttpClient],
})
export class AppComponent implements AfterViewInit {
  title = 'rentservice-front';

  anoAtual: number = Date.now();

  constructor() {
    this.atualizarAnoAtual();
  }

  ngAfterViewInit(): void {
    (function ($) {
      'use strict';

      // Add active state to sidbar nav links
      let path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function () {
        if ((this as HTMLAnchorElement).href === path) {
          $(this).addClass('active');
        }
      });

      // Toggle the side navigation
      $('#sidebarToggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }

  atualizarAnoAtual() {
    this.anoAtual = new Date().getFullYear();
  }
}
