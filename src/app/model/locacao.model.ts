import { Cliente } from "./cliente.model";

export interface Locacao {
  id: number;
  cliente: Cliente;
  dataInicial: string;
  dataFinal: string;
}
