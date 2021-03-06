import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormaPagamento, Item, Pedido } from '../shared/model.module';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  requestUrl = "http://localhost:9090/api";
  pedidoUrl = this.requestUrl + "/order";
  tipoPagamentoUrl = this.requestUrl + "/formOfPayment"
  itemUrl = this.requestUrl + "/item";
  addressUrl = this.requestUrl + "/address";
  config = {withCredentials: true}; // SEMPRE PASSAR
  // SERVICE RESPONSAVEL PELA PARTE DE PEDIDOS

  constructor(private http: HttpClient) {
   }

   // para cliente
   realizarPedido(pedido: Pedido) {
     return this.http.post<any>(this.pedidoUrl+"/create", pedido, this.config);
   }

   fetchCardapio(itemTypeCdTipoItem: any) {
     const body = {"itemTypeCdTipoItem": itemTypeCdTipoItem}

     return this.http.post<Item>(this.itemUrl+"/findByWhere", body, this.config);
   }

   fetchPagamento() {
    return this.http.get<FormaPagamento>(this.tipoPagamentoUrl+"/findAll", this.config);
  }
  
}
