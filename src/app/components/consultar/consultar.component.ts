import { LocacaoStatus } from './../../model/locacaoStatus.enum';
import { TipoVeiculo } from './../../model/tipoVeiculo.enum';
import { Cliente } from './../../model/cliente.model';
import { LocacaoService } from './../../service/locacao.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { error } from 'jquery';
import { Locacao } from '../../model/locacao.model';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css',
  providers: [HttpClient, LocacaoService],
})
export class ConsultarComponent implements OnInit {

  cliente: any[] = [];


  constructor(private service: LocacaoService) {}

  ngOnInit(): void {
    this.service.listarClientes().subscribe(
      response => {
        this.cliente = response
        console.log("Dados recebidos do Spring Boot:", this.cliente)
      },
      error =>{
        console.log("Erro ao carregar dados:", this.cliente)
      }
    )

  }




}
