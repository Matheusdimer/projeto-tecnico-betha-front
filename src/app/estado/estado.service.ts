import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../js/app';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(API_URL + "/estados");
  };

  findCidades(estadoId) {
    return this.http.get(API_URL + "/estados/" + estadoId + "/cidades");
  };
}
