import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  email = '';
  userName = '';
  password = '';

  verifying = false;
  verifyCode = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    const user = {
      username: this.email,
      password: this.password,
      attributes: {
        email: this.email,
        given_name: this.userName
      }
    }
    Auth.signUp(user).then(data => {
      this.verifying = true;
      alert("Te hemos enviado un correo con el código de verficación");
    }).catch(err => {
      alert(err.message || JSON.stringify(err))
    });
  }

  onVerify(): void {

    Auth.confirmSignUp(this.email, this.verifyCode, { forceAliasCreation: true }).then(data => {
      this.verifying = false;
      alert("Tu correo ha sido verificado");
      this.router.navigate(['/home-page']);
    }).catch(err => {
      alert(err.message || JSON.stringify(err))
    });
  }

  onSinginFacebook(): void {
    Auth.federatedSignIn({customProvider: 'Facebook'})
  }

  onSinginGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }

}
