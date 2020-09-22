import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../constant/User';

@Injectable({
    providedIn: 'root'
})

export class ProfileService{
    private BASE_API = 'http://localhost:8080/api';
    private profile: User;

    constructor(private httpClient: HttpClient){
        this.profile = new User();
    }

    getProfile(id){
        var formData: any = new FormData();
        formData.set("userId", id);

        return this.httpClient.post<User>(`${this.BASE_API}/showProfile`, formData);
    }

    editProfile(user: User){
        return this.httpClient.post<User>(`${this.BASE_API}/editProfile`, user);
    }
}