import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router){}
  loginUser:any = ""
  ngOnInit(): void {

    if(sessionStorage.getItem('username')){
      this.loginUser = sessionStorage.getItem('username')
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
