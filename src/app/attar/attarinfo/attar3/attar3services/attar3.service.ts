import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Attar3Service {
private baseUrl="assets/attar3.json";
  constructor(private http: HttpClient) {}
  getdetails():Observable<any[]>{
return this.http.get<any[]>(`${this.baseUrl}`)
  }
}
