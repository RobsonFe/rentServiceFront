import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locacao } from '../model/locacao.model';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private apiUrl = 'http://localhost:8080/api/v1/locacoes';

  constructor(private http: HttpClient) { }

  cadastrarLocacao(clienteId:number, dataInicial:string, dataFinal:string): Observable<Locacao>{

    const params = new HttpParams()
    .set('clienteId', clienteId.toString())
    .set('dataInicial', dataInicial)
      .set('dataFinal', dataFinal);
    return this.http.post<Locacao>(`${this.apiUrl}`, null, { params });
  }

  listarLocacoes(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(`${this.apiUrl}`);
  }

  consultarLocacao(id: number): Observable<Locacao> {
    return this.http.get<Locacao>(`${this.apiUrl}/consultar/${id}`);
  }

  buscarPorNome(nome: string): Observable<Cliente[]> {
    const params = new HttpParams().set('nome', nome);
    return this.http.get<Cliente[]>(`${this.apiUrl}/buscar/nome`, { params });
  }

  cancelarLocacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cancelar/${id}`);
  }

  calcularDiasRestantes(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/calcular-dias-restantes`, null);
  }
}
