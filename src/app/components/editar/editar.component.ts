import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Locacao } from '../../model/locacao.model';
import { Cliente } from '../../model/cliente.model';
import { LocacaoService } from '../../service/locacao.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
  providers: [HttpClient]
})
export class EditarComponent implements OnInit {

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

  cancelarLocacao(id: number): void {
    this.locacaoService.cancelarLocacao(id).subscribe(
      () => {
        this.locacoes = this.locacoes.filter(locacao => locacao.id !== id);
        this.mensagemErro = null;
      },
      error => this.mensagemErro = 'Erro ao cancelar locação'
    );
  }


}
