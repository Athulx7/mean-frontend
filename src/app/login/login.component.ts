import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder , private apiservice:ServiceService , private router:Router){}
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })


  handleLogin(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password

      const loginuser = {
        email:email,
        password:password
      }

      this.apiservice.userLoginAPI(loginuser).subscribe({
        next:(res:any)=>{
          console.log(res)
           sessionStorage.setItem("username",res.data.username)
           sessionStorage.setItem('token',res.token)
            Swal.fire({
              title: 'Hurray!',
              text: 'explore more !!!',
              icon: 'success',
              confirmButtonText: 'ok'
           
          })
          this.router.navigateByUrl('/') 
          
        },
        error:(res:any)=>{
          // console.log(res)
          Swal.fire({
                title: 'invalid user email or password!',
                text: 'Invalid user name or password',
                icon: 'warning',
                confirmButtonText: 'ok'
              })

        }

      })



    }
   
  }

}
