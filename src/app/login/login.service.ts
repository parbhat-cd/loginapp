import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




   const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({  
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data:any): Observable<any>{

    var url='/api/v2login';
    
    return this.http.post<any>(url, data);
  }
 
 
}
