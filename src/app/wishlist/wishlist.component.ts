import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  constructor (private apiService:ServiceService){}
  allWishlistItems:any = []
  ngOnInit(): void {
    this.getAllwishListItems()
    
    
  }

  getAllwishListItems(){
    this.apiService.getAllwishListItemAPI().subscribe({
      next:(res:any)=>{
        // console.log(res)
        this.allWishlistItems = res

      },
      error:(res:any)=>{
        console.log(res)
      }
    })

  }



  delteWishLIstItem(id:any){
    this.apiService.delteWisListItemAPI(id).subscribe({
      next:(res:any)=>{
        // console.log("deeted")
        // console.log(res)
        this.getAllwishListItems()
        this.apiService.getWishListCount()
      },
      error:(res:any)=>{
        // console.log("error")
        // console.log(res)
        Swal.fire({
          title: 'Error !',
          text: 'Something went Wrong',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    })
  }



  addItemTOCart(product:any,id:any){
    this.apiService.addtoCartItemsAPI(product).subscribe({
      next:(res:any)=>{
        console.log(res)
        Swal.fire({
          title: 'product Added !',
          text: 'product Added to wishlist',
          icon: 'success',
          confirmButtonText: 'OK'
        })

        this.apiService.delteWisListItemAPI(id).subscribe()
        this.getAllwishListItems()
       this.apiService.getWishListCount()
       this.apiService.getCartListCount()
      },
      error:(res:any)=>{
        console.log(res)
      }
    })



  }
}
