import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelConsulado } from '../Models/model.consulado';
import { ModelRelacion } from '../Models/model.relacion';
import { ModelStatusCita } from '../Models/model.statusCita';
import { ModelStatusPago } from '../Models/model.statusPago';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  consulado: ModelConsulado;
  relacion: ModelRelacion;
  constructor(private http: HttpClient) {}

  public loadConsulado() {
    this.http.get('https://visas-data-base.firebaseio.com/consulado.json').subscribe( (resp: ModelConsulado) => {
      console.log(resp);
    });
  }

  public loadRelacion() {
    this.http.get('https://visas-data-base.firebaseio.com/relacion.json').subscribe( (resp: ModelRelacion) => {
      console.log(resp);
    });
  }

  public loadStatusCita() {
    this.http.get('https://visas-data-base.firebaseio.com/statusCita.json').subscribe( (resp: ModelStatusCita) => {
      console.log(resp);
    });
  }

  public loadStatusPago() {
    this.http.get('https://visas-data-base.firebaseio.com/statusPago.json').subscribe( (resp: ModelStatusPago) => {
      console.log(resp);
    });
  }

  public loadStatusVisa() {
    this.http.get('https://visas-data-base.firebaseio.com/statusPago.json').subscribe( (resp: ModelStatusPago) => {
      console.log(resp);
    });
  }
}
