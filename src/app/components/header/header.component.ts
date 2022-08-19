import { Component, OnInit } from '@angular/core';
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
  logged = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSingup(): void  {
    Auth.signOut().then( () => {
      this.router.navigate(['/']);
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  getAttributes(): void{
    Auth.currentUserInfo().then(user =>{
      this.attributes = user.attributes;
      if(this.attributes.length > 0){
        this.logged = true;
        console.log(this.logged);
      }
      
      /* alert(JSON.stringify(this.attributes));
      this.email = this.attributes.email; */
         
      console.log(this.email);   
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

  
  

}
