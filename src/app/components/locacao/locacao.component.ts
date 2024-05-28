import { Cliente } from './../../model/cliente.model';
import { LocacaoService } from './../../service/locacao.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocacaoStatus } from '../../model/locacaoStatus.enum';
import { TipoVeiculo } from '../../model/tipoVeiculo.enum';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-locacao',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink, RouterModule],
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css'],

})
export class LocacaoComponent implements OnInit {
  cliente: Cliente = {
    id: '',
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

  success: boolean = false;
  erros: boolean = false;

  constructor(private locacaoService: LocacaoService, private router:Router) {}

  ngOnInit(): void {}

  cadastrarLocacao() {

    const dataInicialFormatada = this.formatarData(this.cliente.dataInicial);
    const dataFinalFormatada = this.formatarData(this.cliente.dataFinal);


    const clienteFormatado: Cliente = {
      ...this.cliente,
      dataInicial: dataInicialFormatada,
      dataFinal: dataFinalFormatada
    };

    console.log('Objeto cliente antes do envio:', clienteFormatado);

    this.locacaoService.cadastrarLocacao(clienteFormatado).subscribe(
      response => {
        this.success =true;
        this.erros = false;
        console.log('Locação cadastrada:', response);
        this.limparFormulario();
      },
      error => {
        console.error('Erro ao cadastrar locação:', error);
        this.success = false;
        this.erros = error;
        this.limparFormulario();
      }
    );
  }

  voltarParaLista(){
    this.router.navigate(["consultar"])
  }

  private formatarData(data: string): string {
    const [year, month, day] = data.split('-');
    return `${day}/${month}/${year}`;
  }

  limparFormulario() {
    this.cliente = {
      id: '',
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
