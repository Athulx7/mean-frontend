import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

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
  }

  addToCart(product:any){
    alert(product)
  }

}
