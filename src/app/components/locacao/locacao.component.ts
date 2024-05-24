import { LocacaoService } from './../../service/locacao.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocacaoStatus } from '../../model/locacaoStatus.enum';

@Component({
  selector: 'app-locacao',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css'],
})
export class LocacaoComponent implements OnInit {
  cliente: Cliente;
  locacaoStatuses = Object.values(LocacaoStatus);

  constructor(private LocacaoService:LocacaoService) {
    this.cliente = { id: 0, name: '', locacaoStatus: LocacaoStatus.SEM_LOCACAO };
  }

  ngOnInit(): void {}

  cadastrarCliente() {
    this.LocacaoService.cadastrarLocacao(this.cliente)
      .subscribe(response => {
        console.log('Locação cadastrada:', response);
        this.limparFormulario();
      }, error => {
        console.error('Erro ao cadastrar locação:', error);
      });
  }

  limparFormulario(){
    this.cliente = { id: 0, name: '', locacaoStatus: LocacaoStatus.SEM_LOCACAO };

  }
}
