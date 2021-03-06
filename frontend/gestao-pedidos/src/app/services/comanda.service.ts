import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, PedidoDTO, Usuario } from '../shared/model.module';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  requestUrl = "http://localhost:9090/api/"
  orderUrl = this.requestUrl+"order";
  itemInOrderUrl = this.requestUrl+"itemInOrder";
  config = {withCredentials: true}; // SEMPRE PASSAR
  // SERVICE RESPONSAVEL PELA PARTE DE ORDER (PEDIDO/COMANDA)

  constructor(private http: HttpClient) { }

  fetchByStatus(status: string): Observable<any> {
    // chamada de servico rest /order/findByWhere
    return this.http.post<any>(this.orderUrl+"/findByWhere", 
                               {"status": status}, this.config);
  }

  atualizarStatus(pedidoAtualizado: PedidoDTO): Observable<any> {
    return this.http.post<any>(this.orderUrl+"/update", pedidoAtualizado, this.config)
  }

  getItensPedido(cdPedido: string) {
    return this.http.post<any>(this.itemInOrderUrl+"/findByWhere", {"orderCdPedido": cdPedido}, this.config);
  } 

}
