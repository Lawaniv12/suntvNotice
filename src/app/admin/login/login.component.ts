import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  passWordType = 'password';
  passwordImg = 'assets/images/hide.svg';

  constructor(
    private location: LocationStrategy,
    private router: Router
  ){

  }
  login() {
    this.router.navigateByUrl(`/account`)
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  toggleEye() {
    if (this.passWordType === 'password') {
      this.passWordType = 'text';
      this.passwordImg = 'assets/images/view.svg';
    } else if (this.passWordType === 'text') {
      this.passWordType = 'password';
      this.passwordImg = 'assets/images/hide.svg';
    }
  }


}
