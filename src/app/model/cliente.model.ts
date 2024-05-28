import { TipoVeiculo } from './tipoVeiculo.enum';
import { LocacaoStatus } from "./locacaoStatus.enum";

export interface Cliente {
  id: string,
  name: string;
  dataInicial: string;
  dataFinal: string;
  locacaoStatus: LocacaoStatus;
  veiculo:string;
  descricao:string;
  tipoVeiculo:TipoVeiculo;

}
