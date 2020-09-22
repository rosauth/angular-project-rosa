import { Component, OnInit } from '@angular/core';
import { User } from '../../constant/user';
import { Agency } from '../../constant/Agency';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  agency: Agency;
  
  constructor() { }

  ngOnInit(): void {
  }

}
