import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //for user registration form 
  constructor(private fb: FormBuilder, private apiservice: ServiceService, private router: Router) { }
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  registerUser() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username
      // alert(username)
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password

      const user = {
        username: username,
        email: email,
        password: password
      }

      //call the api method from service

      this.apiservice.userRegistration(user).subscribe({
        next: (res: any) => {
          // console.log(res)
          Swal.fire({
            title: 'Success!',
            text: 'Registration is successfully completed please login',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          this.router.navigateByUrl('/user/login')

        },
        error: (res: any) => {
          // console.log(res)
          if (res.status === 406) {
            Swal.fire({
              title: 'Error!',
              text: 'user is already exist ',
              icon: 'error',
              confirmButtonText: 'OK'
            })

          }
          else {
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong',
              icon: 'error',
              confirmButtonText: 'OK'
            })

          }

        }
      })

    }
    else {
      alert('invalid')
    }
  }


}
