import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegioncallfuncService { 
  
  constructor(private http:HttpClient) { }
  private baseUrler:string = "http://nzwalk.runasp.net/api/Regions";
  public baseUrl?:string;
  
  getAllRegion(page:number,baseUri:string){
    return  this.http.get<any>(baseUri+"?page="+page);
  }
  getRegionById(id:string){
    return  this.http.get<any>(this.baseUrl+'/'+id);
  }
  postNewRegion(regionObj:any){
    return this.http.post<any>(this.baseUrl+"/" ,regionObj);
  }
  updateregion(regionObj:any,id:string){
    return this.http.put(this.baseUrl+'/'+id, regionObj);
  }
  deleteRegion(id:string){
    return  this.http.delete<any>(this.baseUrl+'/'+id);
  }
  imageUploader(formData:FormData){
    return this.http.post("http://nzwalk.runasp.net/api/ImageUp/Upload", formData);
  }
}
