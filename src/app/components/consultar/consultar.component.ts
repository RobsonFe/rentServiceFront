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

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css',
  providers: [HttpClient],
})
export class ConsultarComponent implements OnInit {
  constructor(private service: LocacaoService) {}

  ngOnInit(): void {}

  getClientes(): Cliente[] {

    let cliente: Cliente = {
      id: '1',
      name: 'Robson',
      dataInicial: '27/05/2024',
      dataFinal: '30/05/2024',
      locacaoStatus: LocacaoStatus.TEM_LOCACAO,
      veiculo: 'Kwid',
      tipoVeiculo: TipoVeiculo.CARRO,
      descricao: 'Carro novo',
    };

    return [cliente];
  }
}
