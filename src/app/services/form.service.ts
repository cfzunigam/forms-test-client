import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:4200/forms'; 

  constructor(private http: HttpClient) {}

  getForm(id: any): Observable<any> {
    console.log('Llego a obtenerdatos', `${this.apiUrl}/${id}`)
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
