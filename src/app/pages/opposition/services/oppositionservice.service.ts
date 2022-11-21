import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OppositionserviceService {

  constructor(private http: HttpClient) { 


  }

  
  fetchCessionPers(params :any){

    return this.http.post<any[]>('http://192.168.2.94:8080/api/auth/cessionPersLig',params)
  
    
   }

   fetchListCodPret(codSoc : any ,matPers:any){

    return this.http.get<any[]>("http://192.168.2.94:8080/api/auth/getlistpret/"+codSoc+"/"+matPers)
  
    
   }
}
