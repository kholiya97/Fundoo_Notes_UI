import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  errors:any;

  constructor() { }
  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }
  login() {
    let userData = {
      "email": this.Email.value,
      "password": this.Password.value
    }
    // if (this.Email.valid && this.Password.valid) {
    //   this.user.login(userData).subscribe(response => {
    //     localStorage.setItem("Token", response['data']['token'])
    //     localStorage.setItem("EmployeeFirstName", response['data']['employeeFirstName'])
    //     localStorage.setItem("Email", response['data']['email'])
    //     console.log(response)
    //     console.log(localStorage.getItem("Token"))
    //     console.log(localStorage.getItem("EmployeeFirstName"))
    //     console.log(localStorage.getItem("Email"))
    //     this.utility.displayMessage("Login Successful");
    //     this.route.navigate(['dashboard/notes'])
    //   },
    //     error => {
    //       this.utility.displayMessage("Login Unsuccessful");
    //     })
    }

  ngOnInit(): void {
  }

  

}
