import { Component, OnInit } from '@angular/core';
import { AgencyService } from 'src/app/utils/agency-service';
import { Agency } from '../../constant/Agency';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  agency: Agency;
  userData: any;

  constructor(public authService: AuthService, private service: AgencyService, private router: Router) {
    this.agency = new Agency();
   }

  ngOnInit(): void {
    this.userData = this.authService.decodeJWT();

    this.service.getAgency(this.userData.agencyId).subscribe((agencyResult) => {
      this.agency = agencyResult;
    });
    
  }

  updateAgencyData(){
    this.userData = this.authService.decodeJWT();
    // this.agency.id = this.userData.agencyId;

    this.service.updateAgency(this.agency).subscribe((updateResult) => {
      location.reload();
    })
  }
}
