import { ConsultarComponent } from './../consultar/consultar.component';
import { Cliente } from './../../model/cliente.model';
import { LocacaoService } from './../../service/locacao.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocacaoStatus } from '../../model/locacaoStatus.enum';
import { TipoVeiculo } from '../../model/tipoVeiculo.enum';

@Component({
  selector: 'app-locacao',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css'],
})
export class LocacaoComponent implements OnInit {
  cliente: Cliente = {
    name: '',
    dataInicial: '',
    dataFinal: '',
    locacaoStatus: LocacaoStatus.SEM_LOCACAO,
    veiculo: '',
    descricao: '',
    tipoVeiculo: TipoVeiculo.CARRO,
  };

  locacaoStatuses = Object.values(LocacaoStatus);
  tipoVeiculos = Object.values(TipoVeiculo);

  constructor(private locacaoService: LocacaoService) {}

  ngOnInit(): void {}

  cadastrarLocacao() {

    const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dataRegex.test(this.cliente.dataInicial) || !dataRegex.test(this.cliente.dataFinal)) {
      console.error('Formato de data inválido. Use dd/MM/yyyy.');
      return;
    }

    console.log('Objeto cliente antes do envio:', this.cliente);

    this.locacaoService.cadastrarLocacao(this.cliente).subscribe(
      response => {
        console.log('Locação cadastrada:', response);
        this.limparFormulario();
      },
      error => {
        console.error('Erro ao cadastrar locação:', error);
      }
    );
  }

  limparFormulario() {
    this.cliente = {
      name: '',
      dataInicial: '',
      dataFinal: '',
      locacaoStatus: LocacaoStatus.SEM_LOCACAO,
      veiculo: '',
      descricao: '',
      tipoVeiculo: TipoVeiculo.CARRO,
    };
  }

}
