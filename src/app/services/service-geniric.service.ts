import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { IPageParam } from '../Interfaces/IPagination';
import { ServiceResponse } from '../Interfaces/ServiceRespone';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeniricService {

  constructor(
    private http:HttpClient,
    private router:Router,
    private serialize:UrlSerializer
  ) { }

  // get all data generic
  GetAllData(UrlApi:string, pageParam:IPageParam){
    return  this.http.get<ServiceResponse>(this.Pramsbuilder(UrlApi,pageParam));

  }
  // Get One Data Generic By Id
  GetOneData(uri:string,page:IPageParam){
    return  this.http.get<any>(this.Pramsbuilder(uri,page));

  }

  // Post Data To Database
  PostData(uri:string, DataObj:any){
    return this.http.post<any>(uri+"/" ,DataObj);
  }

  // Update Data
  UpdateData(uri:string,id:string, DataObj:any){
    return this.http.put(uri+'/'+id, DataObj);
  }

  // Delete One record

  DeleteRecord(id:string, uri:string){
    return  this.http.delete<any>(uri+'/'+id);

  }

  // Delete Multipe record

  DeleteMultiprecord(){

  }

  // Params Builders

  Pramsbuilder (uri:string, page:IPageParam){
    let router =this.router.createUrlTree([uri],{ queryParams: page }) // "/?foo=a&bar=42"

    //return this.serialize.serialize(router);
    return uri+"?"+new URLSearchParams(page as any);
  }
}
