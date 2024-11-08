import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router, private apiservice:ServiceService){}
  wishlistCounting=0
  cartingCount = 0
  loginUser:any = ""
  ngOnInit(): void {

    if(sessionStorage.getItem('username')){
      this.apiservice.getWishListCount()
      this.apiservice.getCartListCount()
      this.loginUser = sessionStorage.getItem('username')
      this.apiservice.wishlistCount.subscribe((res:any)=>{
        this.wishlistCounting = res
      })
      this.apiservice.cartCount.subscribe((res:any)=>{
        this.cartingCount=res
      })

    }
    else{
      this.loginUser == ""
    }
    
    
  }

  
  handleLogout(){
    if(sessionStorage.getItem('username')){
      sessionStorage.removeItem("username")
      sessionStorage.removeItem('token')
      this.router.navigateByUrl('/')
    }


    
  }









 

}
