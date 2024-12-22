import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Perfume1Service {
private baseUrl="assets/perfume1.json";
  constructor(private http: HttpClient) {}
  getdetails():Observable<any[]>{
return this.http.get<any[]>(`${this.baseUrl}`)
  }
}
