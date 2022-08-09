import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  email = '';
  password = '';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSingin(): void {
      var credentials = {
      username: this.email,
      password: this.password
    }
    Auth.signIn(credentials).then( data => {
      this.router.navigate(['/home-page']);
    })
    .catch(err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  onSinginFacebook(): void {
    Auth.federatedSignIn({customProvider: 'Facebook'})
  }

  onSinginGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }

}
