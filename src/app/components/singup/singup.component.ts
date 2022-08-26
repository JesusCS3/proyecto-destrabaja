import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('asPassword') pass!: ElementRef;
  @ViewChild('eyeShow') eyeShow!: ElementRef;
  @ViewChild('eyeHide') eyeHide!: ElementRef;

  constructor(private router: Router, private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  // show password
  show(): void{
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'text');
    this.renderer2.addClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-none');
    this.renderer2.addClass(hide, 'd-block');
  }
  // hide password
  hide(): void {
    const asPassword = this.pass.nativeElement;
    const show = this.eyeShow.nativeElement;
    const hide = this.eyeHide.nativeElement;

    this.renderer2.setAttribute(asPassword, 'type', 'password');
    this.renderer2.removeClass(show, 'd-none');
    this.renderer2.removeClass(hide, 'd-block');
    this.renderer2.addClass(hide, 'd-none');
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
