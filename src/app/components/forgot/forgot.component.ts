import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email = '';
  password = '';
  confirmPassword = '';

  verifying = false;
  verifyCode = '';

  constructor() { }

  ngOnInit(): void {
  }

}
