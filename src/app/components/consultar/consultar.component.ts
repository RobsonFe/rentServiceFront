import { LocacaoService } from './../../service/locacao.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css',
  providers: [HttpClient]
})
export class ConsultarComponent implements OnInit {

    constructor(){}

    ngOnInit(): void {

    }



}
