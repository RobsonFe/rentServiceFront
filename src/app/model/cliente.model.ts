import { LocacaoStatus } from "./locacaoStatus.enum";

export interface Cliente {
  id: number;
  name: string;
  locacaoStatus: LocacaoStatus;
}
