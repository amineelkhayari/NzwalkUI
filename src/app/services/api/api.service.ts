import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string = "https://socialmedia-d09b0c.ingress-haven.ewp.live/wp-json/get/all";

  constructor(private http:HttpClient) { }
  getAllData(){
    return  this.http.get<any>(this.baseUrl);

  }
}
