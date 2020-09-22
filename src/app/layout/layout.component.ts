import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'routing-test-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  userData: any;

  constructor(public auth: AuthService, router: Router) {
    console.log(auth.isLoggedIn());
  }

  ngOnInit(): void {
    this.userData = this.auth.decodeJWT();
    console.log(this.userData)
    
    $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide');
      }
    });
  }

  doLogOut() {
    this.auth.logout;
  }
}