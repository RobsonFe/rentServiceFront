import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Cliente } from './../../model/cliente.model';
import { LocacaoService } from './../../service/locacao.service';
import { LocacaoStatus } from '../../model/locacaoStatus.enum';
import { TipoVeiculo } from '../../model/tipoVeiculo.enum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  errors: boolean = false;

  constructor(
    private locacaoService: LocacaoService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
        const id = params['id'];
        if (id) {
          this.carregarCliente(id);
        }
      }
    );
  }

  cadastrarLocacao() {
    if (this.cliente.id) {
      this.locacaoService.alterarCadastro(this.cliente).subscribe(
        response => {
          this.success = true;
          this.errors = false;
          this.redirecionarParaConsulta();
        },
        error => {
          console.error('Erro ao atualizar cliente:', error);
          this.errors = true;
          this.success = false;
        }
      );
    } else {
      const dataInicialFormatada = this.formatarData(this.cliente.dataInicial);
      const dataFinalFormatada = this.formatarData(this.cliente.dataFinal);

      const clienteFormatado: Cliente = {
        ...this.cliente,
        dataInicial: dataInicialFormatada,
        dataFinal: dataFinalFormatada,
      };

      console.log('Objeto cliente antes do envio:', clienteFormatado);

      this.locacaoService.cadastrarLocacao(clienteFormatado).subscribe(
        response => {
          this.success = true;
          this.errors = false;
          console.log('Locação cadastrada:', response);
          this.limparFormulario();
          this.redirecionarParaConsulta();
        },
        error => {
          console.error('Erro ao cadastrar locação:', error);
          this.errors = true;
          this.success = false;
          this.limparFormulario();
        }
      );
    }
  }

  carregarCliente(id: number) {
    this.locacaoService.consultarCliente(id).subscribe(
      response => {
        this.cliente = response;
        console.log("Cliente carregado para edição:", this.cliente);
      },
      error => {
        console.error("Erro ao carregar cliente:", error);
      }
    );
  }

  redirecionarParaConsulta() {
    this.router.navigate(['consultar']);
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
