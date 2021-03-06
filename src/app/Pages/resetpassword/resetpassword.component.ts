import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})


export class ResetpasswordComponent implements OnInit {
  hide = true;
  errors:any;

  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  getPasswordErrorMsg() {
    return this.Password.hasError('required')
      ? 'Password is Required'
      : 'please enter valid Password';
  }


  constructor() { }

  ngOnInit(): void {
    // let token = this.route.snapshot.params.token;
    // console.log(token);
    // let userData = {
    //   "newPassword": this.Password.value,
  }

}
