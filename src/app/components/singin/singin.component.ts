import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  email = '';
  password = '';

  @ViewChild('asPassword') pass!: ElementRef;
  @ViewChild('eyeShow') eyeShow!: ElementRef;
  @ViewChild('eyeHide') eyeHide!: ElementRef;
  
  constructor(private router: Router, private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  show(): void{
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'text');
    this.renderer2.addClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-none');
    this.renderer2.addClass(hide, 'd-block');
  }

  hide(): void {
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'password');
    this.renderer2.removeClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-block');
    this.renderer2.addClass(hide, 'd-none');
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
