import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = null;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'auth';
  }
  /*Auth*/
    register(user: any): Promise<any> {
      return this.http.post<any>(this.baseUrl + '/', user).toPromise();
    }
    login(user: any): Promise<any> {
      return this.http.post<any>(this.baseUrl + '/login', user).toPromise();
    }
  /*Auth*/
}
