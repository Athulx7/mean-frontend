import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  constructor(private apiService: ServiceService) { }
  allproducts: any = []
  ngOnInit() {
    this.apiService.getAllProducts().subscribe({
      next: (res) => {
        // console.log(res)
        this.allproducts = res
      },
      error: (res) => {
        console.log(res)
      }
    })

  }


  addToWishList(product: any) {
    //  console.log(product)
    if (sessionStorage.getItem('token')) {

      this.apiService.addToWishListAPI(product).subscribe({
        next: (res: any) => {
          Swal.fire({
            title: 'product Added !',
            text: 'product Added to wishlist',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          this.apiService.getWishListCount()

        },
        error: (res: any) => {
          // console.log(res)
          if (res.status === 406) {
            Swal.fire({
              title: 'already added  !',
              text: 'Poduct is already added to the wishlist',
              icon: 'warning',
              confirmButtonText: 'OK'
            })

          }
          else {
            Swal.fire({
              title: 'something went wrong  !',
              text: 'somwthing went wrong',
              icon: 'warning',
              confirmButtonText: 'OK'
            })

          }


        }
      })

    }

    else {
      Swal.fire({
        title: 'Please Login !',
        text: 'Please login',
        icon: 'warning',
        confirmButtonText: 'OK'
      })

    }


  }

  addToCart(product: any) {
    console.log(product)
    if(sessionStorage.getItem('token')){
      this.apiService.addtoCartItemsAPI(product).subscribe({
        next:(res:any)=>{
          console.log(res)
        },
        error:(res:any)=>{
          console.log(res)
        }
      })
    }
  }

}
