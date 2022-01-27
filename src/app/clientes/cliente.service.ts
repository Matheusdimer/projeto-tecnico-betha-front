import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../js/app';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  findAll () {
      return this.http.get(API_URL + "/clientes");
  }

  findOne (clienteId) {
      return this.http.get(API_URL + "/clientes/" + clienteId);
  }

  findEquipamentos(clienteId) {
      return this.http.get(API_URL + "/clientes/" + clienteId + "/equipamentos");
  }

  add(cliente) {
      return this.http.post(API_URL + "/clientes", cliente);
  }

  update(cliente) {
      return this.http.put(API_URL + "/clientes/" + cliente.id, cliente);
  }

  addEquipamento(clienteId, equipamento) {
      return this.http.post(API_URL + "/clientes/" + clienteId + "/equipamentos", equipamento);
  }
}
