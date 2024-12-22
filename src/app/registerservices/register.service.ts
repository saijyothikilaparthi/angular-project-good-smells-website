import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../registermodels/register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = "https://sheetdb.io/api/v1/lcmqbnico95ki";
  constructor(private http: HttpClient) { }
 getall():Observable<any[]>{
  return this.http.get<any[]>(`${this.baseUrl}`);
 }
  getbyEmail(email: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/search?email=${email}`);
  }
  addstudent(records: Register): Observable<any> {
    return this.http.post(`${this.baseUrl}`, { data: records });
  }
  updatestudent(id: string, records: Register): Observable<any> {
    return this.http.put(`${this.baseUrl}/id/${id}`, { data: records })
  }
  deletestudent(name: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/name/${name}`)
  }
  getbyid(id: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/search?id=${id}`);
  }
  
}

