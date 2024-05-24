import { LocacaoService } from './../../service/locacao.service';
import { Component, OnInit } from '@angular/core';
import { Locacao } from '../../model/locacao.model';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-locacao',
  standalone: true,
  imports: [],
  templateUrl: './locacao.component.html',
  styleUrl: './locacao.component.css'
})
export class LocacaoComponent implements OnInit {
  locacoes: Locacao[] = [];
  clientes: Cliente[] = [];
  mensagemErro: string | null = null;

  constructor(private LocacaoService: LocacaoService){}

  ngOnInit(): void {
      this.listarLocacoes();
  }
  listarLocacoes(): void {
    this.LocacaoService.listarLocacoes().subscribe(
      locacoes => this.locacoes = locacoes,
      error => this.mensagemErro = 'Erro ao listar locações'
    );
  }

  cadastrarLocacao(clienteId: number, dataInicial: string, dataFinal: string): void {
    this.LocacaoService.cadastrarLocacao(clienteId, dataInicial, dataFinal).subscribe(
      locacao => {
        this.locacoes.push(locacao);
        this.mensagemErro = null;
      },
      error => this.mensagemErro = 'Erro ao cadastrar locação'
    );
  }

  consultarLocacao(id: number): void {
    this.LocacaoService.consultarLocacao(id).subscribe(
      locacao => {
        this.locacoes = [locacao];
        this.mensagemErro = null;
      },
      error => this.mensagemErro = 'Locação não encontrada'
    );
  }

  buscarPorNome(nome: string): void {
    this.LocacaoService.buscarPorNome(nome).subscribe(
      clientes => this.clientes = clientes,
      error => this.mensagemErro = 'Erro ao buscar cliente por nome'
    );
  }

  cancelarLocacao(id: number): void {
    this.LocacaoService.cancelarLocacao(id).subscribe(
      () => {
        this.locacoes = this.locacoes.filter(locacao => locacao.id !== id);
        this.mensagemErro = null;
      },
      error => this.mensagemErro = 'Erro ao cancelar locação'
    );
  }

  calcularDiasRestantes(): void {
    this.LocacaoService.calcularDiasRestantes().subscribe(
      () => this.mensagemErro = null,
      error => this.mensagemErro = 'Erro ao calcular dias restantes'
    );
  }
}
