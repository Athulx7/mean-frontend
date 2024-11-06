import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

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
        console.log(res)
        this.allWishlistItems = res

      },
      error:(res:any)=>{
        console.log(res)
      }
    })

  }
}
