import { LocacaoStatus } from "./locacaoStatus.enum";
import { TipoVeiculo } from "./tipoVeiculo.enum";

export interface Locacao {
  id: number;
  dataInicial: string;
  dataFinal: string;
  veiculo: string;
  tipoVeiculo: TipoVeiculo.CARRO;
  descricao: string;
}

export interface Cliente {
  id: number;
  name: string;
  locacaoStatus: LocacaoStatus.SEM_LOCACAO;
  locacoes: Locacao[];
}
