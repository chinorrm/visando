import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from 'node_modules/selenium-webdriver';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public loadConsulado(): Observable<HttpResponse> {
    return this.http.get('https://visas-data-base.firebaseio.com/consulado.json').pipe();
  }

  public loadRelacion(): Observable<HttpResponse> {
    return this.http.get('https://visas-data-base.firebaseio.com/relacion.json').pipe();
  }

  public loadStatusCita(): Observable<HttpResponse> {
    return this.http.get('https://visas-data-base.firebaseio.com/statusCita.json').pipe();
  }

  public loadStatusPago(): Observable<HttpResponse> {
    return this.http.get('https://visas-data-base.firebaseio.com/statusPago.json').pipe();
  }

  public loadStatusVisa(): Observable<HttpResponse> {
      return this.http.get('https://visas-data-base.firebaseio.com/statusVisa.json').pipe();
  }

  public loadUserList(): Observable<HttpResponse> {
    return this.http.get('https://visas-data-base.firebaseio.com/ejample1.json').pipe();
  }

}
