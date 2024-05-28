import { LocacaoService } from './../../service/locacao.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css',
  providers: [HttpClient, LocacaoService],
})
export class ConsultarComponent implements OnInit {

  cliente: any[] = [];
  clienteSelecionado?: Cliente;
  mensagemSucesso?: string;
  mensagemErro?:string;

  constructor(private service: LocacaoService, private router:Router) {}

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

  novoCadastro(){
    this.router.navigate(['cadastrar']);
  }

  preparaDelecao(cliente:Cliente){
    this.clienteSelecionado = cliente;
  }

  excluirCliente(): void {
    if (this.clienteSelecionado) {
      this.service.deletarCliente(this.clienteSelecionado).subscribe(
        () => {
          this.mensagemSucesso = "Cliente deletado com sucesso!";
          this.cliente = this.cliente.filter(c => c.id !== this.clienteSelecionado!.id);
        },
        (error) => {
          this.mensagemErro = "Erro ao deletar cliente";
          console.error(error);
        }
      );
    }
  }

}
