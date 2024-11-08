import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor (private apiservice:ServiceService){}
  ngOnInit(): void {
    this.getallCartItems()
    
  }
  allCartItems:any = []

  getallCartItems(){

    this.apiservice.getALlCArtItemsAPI().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.allCartItems = res
      },
      error:(res:any)=>{
        console.log(res)
      }
    })
  }
}
