import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit{
  constructor (private apiService: ServiceService){}
  allproducts : any = []
  ngOnInit(){
    this.apiService.getAllProducts().subscribe({
      next:(res)=>{
        // console.log(res)
        this.allproducts = res
      },
      error:(res)=>{
        console.log(res)
      }
    })
    
  }


  addToWishList(product:any){
   console.log(product)
   if(sessionStorage.getItem('token')){
    this.apiService.addToWishListAPI(product).subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error:(res:any)=>{
        console.log(res)
      }
     })

   }

   else{
    Swal.fire({
      title: 'Please Login !',
      text: 'Please login',
      icon: 'warning',
      confirmButtonText: 'OK'
    })

   }
   
  
  }

  addToCart(product:any){
    alert(product)
  }

}
