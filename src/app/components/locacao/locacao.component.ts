import { LocacaoService } from './../../service/locacao.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Locacao } from '../../model/locacao.model';
import { Cliente } from '../../model/cliente.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-locacao',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css'],
  providers: [HttpClient]
})
export class LocacaoComponent implements OnInit, OnDestroy {
  locacoes: Locacao[] = [];
  clientes: Cliente[] = [];
  mensagemErro: string | null = null;
  private unsub$ = new Subject<void>();

  constructor(private LocacaoService: LocacaoService) { }

  ngOnInit(): void {
    this.listarLocacoes();
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  listarLocacoes(): void {
    this.LocacaoService.listarLocacoes().pipe(takeUntil(this.unsub$)).subscribe(
      (locacoes) => (this.locacoes = locacoes),
      (error) => (this.mensagemErro = 'Erro ao listar locações')
    );
  }

  cadastrarLocacao(clienteId: number, dataInicial: string, dataFinal: string): void {
    this.LocacaoService.cadastrarLocacao(clienteId, dataInicial, dataFinal).pipe(takeUntil(this.unsub$)).subscribe(
      (locacao) => {
        this.locacoes.push(locacao);
        this.mensagemErro = null;
      },
      (error) => (this.mensagemErro = 'Erro ao cadastrar locação')
    );
  }

  consultarLocacao(id: number): void {
    this.LocacaoService.consultarLocacao(id).pipe(takeUntil(this.unsub$)).subscribe(
      (locacao) => {
        this.locacoes = [locacao];
        this.mensagemErro = null;
      },
      (error) => (this.mensagemErro = 'Locação não encontrada')
    );
  }

  buscarPorNome(nome: string): void {
    this.LocacaoService.buscarPorNome(nome).pipe(takeUntil(this.unsub$)).subscribe(
      (clientes) => (this.clientes = clientes),
      (error) => (this.mensagemErro = 'Erro ao buscar cliente por nome')
    );
  }

  cancelarLocacao(id: number): void {
    this.LocacaoService.cancelarLocacao(id).pipe(takeUntil(this.unsub$)).subscribe(
      () => {
        this.locacoes = this.locacoes.filter((locacao) => locacao.id !== id);
        this.mensagemErro = null;
      },
      (error) => (this.mensagemErro = 'Erro ao cancelar locação')
    );
  }

  calcularDiasRestantes(): void {
    this.LocacaoService.calcularDiasRestantes().pipe(takeUntil(this.unsub$)).subscribe(
      () => (this.mensagemErro = null),
      (error) => (this.mensagemErro = 'Erro ao calcular dias restantes')
    );
  }
}
