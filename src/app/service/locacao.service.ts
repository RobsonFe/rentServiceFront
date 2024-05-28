import { Cliente } from './../model/cliente.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locacao } from '../model/locacao.model';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private apiUrlCliente = 'http://localhost:8080/api/v1/locacoes/clientes';
  private apiUrlLocacao = 'http://localhost:8080/api/v1/locacoes';

  constructor(private http: HttpClient) { }

  cadastrarLocacao(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrlLocacao}/cadastrar`, cliente);
  }

  listarLocacoes(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(`${this.apiUrlLocacao}/listar`);
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrlCliente}/listar`);
  }

  listarTudo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlCliente}/listar`);
  }

  consultarLocacao(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrlLocacao}/consultar/${id}`);
  }

  consultarCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrlCliente}/consultar/${id}`);
  }

  alterarCadastro(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrlCliente}/atualizar/${cliente.id}`, cliente);
  }

  buscarPorNome(nome: string): Observable<Cliente[]> {
    const params = new HttpParams().set('nome', nome);
    return this.http.get<Cliente[]>(`${this.apiUrlLocacao}/buscar/nome`, { params });
  }

  cancelarLocacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlLocacao}/cancelar/${id}`);
  }
  deletarCliente(cliente: Cliente): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlCliente}/deletar/${cliente.id}`);
  }

  calcularDiasRestantes(): Observable<void> {
    return this.http.post<void>(`${this.apiUrlLocacao}/calcular-dias-restantes`, null);
  }
}
