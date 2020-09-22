import { Component, OnInit } from '@angular/core';
import { User } from '../../constant/User'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../../utils/login-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private router: Router, public auth: AuthService, private apiService: LoginService) {
    this.user = new User();
    console.log(auth.isLoggedIn());
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(["/"]);
    }
  }

  doLogin() {
    this.apiService.postAuth(this.user.email, this.user.password).subscribe(({ data }: any) => {
      this.auth.sendToken(data);
      this.router.navigate(["/dashboard"]);
    });
  }

  doLogOut() {
    this.auth.logout;
  }

}
