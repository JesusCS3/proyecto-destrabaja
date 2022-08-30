import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  profileImg = '';
  name = '';
  fathersLastName = '';
  mothersLastName = '';
  gender = '';
  dateBirth = '';
  contry = '';
  city = '';

  resumeSummary = '';

  firstPart = false;
  secondPart = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerFirstPart(): void {
    const registerFirstPart = {
      profileImg: this.profileImg,
      name: this.name,
      fathersLastName: this.fathersLastName,
      mothersLastName: this.mothersLastName,
      gender: this.gender,
      dateBirth: this.dateBirth,
      contry: this.contry,
      city: this.city,
    }
    this.firstPart = true;
    console.log(this.firstPart);
    console.log(registerFirstPart);
  }

  registerSecondPart(): void {
    const registerSecondPart ={
      resumeSummary: this.resumeSummary
    }
    this.secondPart = true;
  }

  registerThirdPart(): void {
    this.router.navigate(['/profile']);
  }

}
