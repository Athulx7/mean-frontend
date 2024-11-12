import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { toArray } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor (private apiservice:ServiceService, private router:Router){}
  ngOnInit(): void {
    this.getallCartItems()
    // this.getTotalPrice()
    
  }
  allCartItems:any = []
  totalPrice:any = 0
  values:any = 0

  getallCartItems(){

    this.apiservice.getALlCArtItemsAPI().subscribe({
      
      next:(res:any)=>{
        // console.log(res)
        this.allCartItems = res
        this.getTotalPrice()
      },
      error:(res:any)=>{
        console.log(res)
      }
    })
    // this.getTotalPrice()
  }


  decrementProduct(id:any){
    this.apiservice.decrementProductAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getallCartItems()
        this.apiservice.getCartListCount()
      },
      error:(res:any)=>{
        console.log(res)
      }
    })
    // alert("dec")



  }

  incremnetProduct(id:any){
    this.apiservice.incrementProductAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getallCartItems()
        this.apiservice.getCartListCount()
      },
      error:(res:any)=>{
        console.log(res)
      }
    })
    // alert("inc")
     
  }


  removeItemfromcart(id:any){
    // alert('removing item from cart')
    console.log(id)
    this.apiservice.removeitemfromCartAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getallCartItems()
        this.apiservice.getCartListCount()        
      },
      error:(res:any)=>{
        console.log(res)
      }
    })  
  }

  getTotalPrice(){
    // console.log(this.allCartItems)
    this.totalPrice = 0
    this.allCartItems.map((item:any)=>{
      this.totalPrice = Math.ceil(this.totalPrice +item.grandTotal)
    })
    
  }



  emptyCart(){

    this.apiservice.empatyCartApi().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getallCartItems()
        this.apiservice.getCartListCount()
        Swal.fire({
          title: 'Your cart is Empty  !',
          text: 'Poduct in your cart is deleted',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        
        this.router.navigateByUrl('/')

    },
    error:(res:any)=>{
      console.log(res)
    }
    })

  }



  handlecheckout(){
    sessionStorage.setItem('totelCartValue',JSON.stringify(this.totalPrice))
    
  }


}
