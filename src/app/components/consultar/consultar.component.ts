import { LocacaoService } from './../../service/locacao.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Locacao } from '../../model/locacao.model';
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

  locacoes: Locacao[] = [];
  clientes: Cliente[] = [];
  mensagemErro: string | null = null;

    constructor(private locacaoService: LocacaoService){}

    ngOnInit(): void {
      this.listarLocacoes();
    }


    listarLocacoes(): void {
      this.locacaoService.listarLocacoes().subscribe(
        locacoes => this.locacoes = locacoes,
        error => this.mensagemErro = 'Erro ao listar locações'
      );
    }

    consultarLocacao(id: number): void {
      this.locacaoService.consultarLocacao(id).subscribe(
        locacao => {
          this.locacoes = [locacao];
          this.mensagemErro = null;
        },
        error => this.mensagemErro = 'Locação não encontrada'
      );
    }

    buscarPorNome(nome: string): void {
      this.locacaoService.buscarPorNome(nome).subscribe(
        clientes => this.clientes = clientes,
        error => this.mensagemErro = 'Erro ao buscar cliente por nome'
      );
    }

    calcularDiasRestantes(): void {
      this.locacaoService.calcularDiasRestantes().subscribe(
        () => this.mensagemErro = null,
        error => this.mensagemErro = 'Erro ao calcular dias restantes'
      );
    }
}
