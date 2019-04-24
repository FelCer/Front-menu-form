import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public _http: HttpClient) { }
  private httpUrl = 'http://localhost:3000/api/list';

  private httpUrl2 = 'http://localhost:3000/api/datos';
  getListado(): Observable<any> {
    return this._http.get(this.httpUrl);
  }
  postFormulario(nombrecompleto, email, celular, edad): Observable<any> {
    let data="name="+nombrecompleto+"&email="+email+"&celular="+celular+"&edad="+edad;
    console.log(data);
    return this._http.post(this.httpUrl2,data,{responseType: 'text'});
  }
}
