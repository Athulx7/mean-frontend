import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {

   }
   
    serverUrl = 'http://localhost:4000'

       //common function for create custome header

       addTokenToHeader(){
        //1)create an objext of class httpheaders 
        let headers = new HttpHeaders();
        const token = sessionStorage.getItem('token')
        if(token){
          headers.append('Authorization',`Bearer ${token}`)
        }
        return {headers}
      }
  

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
    
 
    // adding to wishlist 

    addToWishListAPI(data:any){
      return this.httpClient.post(`${this.serverUrl}/user/addTowish`,data,this.addTokenToHeader())
    }
}
