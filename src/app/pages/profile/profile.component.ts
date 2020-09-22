import { Component, OnInit } from '@angular/core';
import { User } from '../../constant/User';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../utils/profile-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  data: any;
  password: String;

  constructor(public authService: AuthService, private service: ProfileService, private router: Router) {
    this.user = new User();
   }

  ngOnInit(): void {
    this.data = this.authService.decodeJWT();

    this.service.getProfile(this.data.id).subscribe((result) => {
      this.user = result;
    })
  }

  updateProfile(){
    this.user.password = this.password;

    this.service.editProfile(this.user).subscribe((updateResult) => {
      location.reload();
      // this.router.navigate(["/dashboard"]);
    })
  }

}
