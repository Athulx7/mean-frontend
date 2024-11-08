import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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
           headers = headers.append('Authorization',`Bearer ${token}`)
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


    //get all wishlist items

    getAllwishListItemAPI(){
      return this.httpClient.get(`${this.serverUrl}/user/getAllwishItems`,this.addTokenToHeader())
    }


    
      //create behavoiur services // for share data betweeen component
      wishlistCount = new BehaviorSubject(0)

      getWishListCount(){
        this.getAllwishListItemAPI().subscribe((res:any)=>{
          this.wishlistCount.next(res.length)
        })       
      }


    //deleting wishlist items

    delteWisListItemAPI(id:any){
      return this.httpClient.delete(`${this.serverUrl}/user/deleteWishlist/${id}`,this.addTokenToHeader())
    }




    //add to cart items


    addtoCartItemsAPI(data:any){
      return this.httpClient.post(`${this.serverUrl}/user/addtoCart`,data,this.addTokenToHeader())
    }


    getALlCArtItemsAPI(){
      return this.httpClient.get(`${this.serverUrl}/users/getallCartitem`,this.addTokenToHeader())
    }


    cartCount = new BehaviorSubject(0)

    getCartListCount(){
      this.getALlCArtItemsAPI().subscribe((res:any)=>{
        this.cartCount.next(res.length)
      })

      

    }
}
