import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Auth } from 'aws-amplify';
import { userModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  //login variables
  email: string = '';
  password: string = '';
  //current session variables
  attributes: any;
  id: string= '';
  given_name: string= '';
  token: string = '';

  @ViewChild('asPassword') pass!: ElementRef;
  @ViewChild('eyeShow') eyeShow!: ElementRef;
  @ViewChild('eyeHide') eyeHide!: ElementRef;
  
  constructor(private router: Router, private renderer2: Renderer2, private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  // show password in login form
  show(): void{
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'text');
    this.renderer2.addClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-none');
    this.renderer2.addClass(hide, 'd-block');
  }

  // hide password in login form
  hide(): void {
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'password');
    this.renderer2.removeClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-block');
    this.renderer2.addClass(hide, 'd-none');
  }

  // Login with email account
  onSingin(): void {
      var credentials = {
      username: this.email,
      password: this.password
    }
    // submit data for Login
    Auth.signIn(credentials).then( data => {
      // get current session
      Auth.currentSession().then(data => {
        // get data for userModel
        this.attributes = data;
        this.id = this.attributes.idToken.payload.sub; 
        this.given_name = this.attributes.idToken.payload.given_name;
        this.token = JSON.stringify(this.attributes.idToken.jwtToken);

        let modelo = new userModel();
        modelo.userName = this.email;
        modelo.email = this.email;
        modelo.given_name = this.given_name;
        modelo.idToken = this.token;

        this.AuthService.storeSessionDataLocally(modelo);
      })
      .catch(err => {
        console.log(err);
      });
      this.router.navigate(['/home-page']);
    })
    .catch(err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  // login with facebook account
  onSinginFacebook(): void {
    Auth.federatedSignIn({customProvider: 'Facebook'})
  }

  // login with google account
  onSinginGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }
}
