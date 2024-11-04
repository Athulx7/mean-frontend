import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {

   }
   
    serverUrl = 'http://localhost:4000'

    getAllProducts(){
      return this.httpClient.get(`${this.serverUrl}/user/getallproducts`)
    }

    getProductDetailID(id:any){
      return this.httpClient.get(`${this.serverUrl}/user/getproductdetailID/${id}`)
    }


    //user registration 

    userRegistration(userdata:any){
      return this.httpClient.post(`${this.serverUrl}/userRegister`,userdata)
    }

    //uer login

    userLoginAPI(userlogin:any){
      return this.httpClient.post(`${this.serverUrl}/userLogin`,userlogin)
    }
    
}
