import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Agency } from '../constant/Agency';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private BASE_API = 'http://localhost:8080/api';
    constructor(private httpClient: HttpClient){}

    postAuth(email, password){
        var formData: any = new FormData();
        formData.set("email", email);
        formData.set("password", password);

        return this.httpClient.post(`${this.BASE_API}/user/login`, formData);
    }
}