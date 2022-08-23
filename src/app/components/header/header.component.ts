import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  attributes: any;
  email = '';
  startupCheck = 0;
  logged = false;

  @ViewChild('outsideSession') out!: ElementRef;
  @ViewChild('insideSession') in!: ElementRef;

  constructor(private router: Router, private renderer2: Renderer2) {
    /*this.getAttributes();*/
    /*this.prueba();*/
    /* this.prueba2(); */
    this.getSession();
  }

  ngOnInit(): void {
  }

  /* get the current session */
  getSession(): void {
    Auth.currentSession()
    .then(data => {
      this.attributes = data;
      //alert(JSON.stringify(this.attributes.idToken));
      //this.token = this.attributes.idToken;
      //console.log('tamaño del token: ' + JSON.stringify(this.attributes.idToken).length);

      /* show navbar insideSession hide navbar outsideSession*/

      if((JSON.stringify(this.attributes.idToken) != null) || (JSON.stringify(this.attributes.idToken != undefined))){
        this.logged = true;
        //console.log(data);
        console.log('se inicio sesión ' + this.logged);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  /* get the current session */
  prueba2(): void {
    Auth.currentSession().then(data => {
      this.logged = true;
      console.log(data);
      console.log('se inicio sesión ' + this.logged);
      /* show navbar insideSession hide navbar outsideSession*/
      if(this.logged === true) {
        const navOut = this.out.nativeElement;
        const navIn = this.in.nativeElement;
    
        this.renderer2.addClass(navOut, 'd-none');
        this.renderer2.removeClass(navIn, 'd-none');
        this.renderer2.addClass(navIn, 'd-block');
      }
    })
      .catch(err => {
        this.logged = false;
        console.log(err);
        console.log('no se ha iniciado sesión ' + this.logged);
        /* show navbar outsideSession hide navbar insideSession*/
        if(this.logged === false){
          const navOut = this.out.nativeElement;
          const navIn = this.in.nativeElement;
      
          this.renderer2.removeClass(navOut, 'd-none');
          this.renderer2.removeClass(navIn, 'd-block');
          this.renderer2.addClass(navIn, 'd-none');
        }
      });
  }

  onSingup(): void {
    Auth.signOut().then(() => {
      this.router.navigate(['/']);
    }).catch(err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  getAttributes(): void {
    Auth.currentUserInfo().then(user => {
      if (user != null) {
        this.attributes = user.attributes;
        this.startupCheck = this.attributes.email.length;

        if (this.startupCheck > 0) {
          this.logged = true;
          console.log('se inicio sesión ' + this.logged);
          console.log(this.startupCheck);
        }

        /* alert(JSON.stringify(this.attributes));
        this.email = this.attributes.email; */

        console.log(this.email);
      } else {
        this.logged = false;
        console.log('no se ha iniciado sesión ' + this.logged);
      }
    }).catch(err => {
      alert(err.message || JSON.stringify(err));
    })
  }


  prueba() {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      if (user != null) {
        this.attributes = user.attributes;
        this.startupCheck = this.attributes.email.length;

        if (this.startupCheck > 0) {
          this.logged = true;
          console.log('se inicio sesión ' + this.logged);
          console.log(this.startupCheck);
        }

        /* alert(JSON.stringify(this.attributes));
        this.email = this.attributes.email; */

        console.log(this.email);
      } else {
        this.logged = false;
        console.log('no se ha iniciado sesión ' + this.logged);
      }
      console.log(user)
    })
      .catch(err => console.log(err));
  }
}
