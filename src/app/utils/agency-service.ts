import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '../constant/Agency';

@Injectable({
    providedIn: 'root'
})
export class AgencyService{
    private BASE_API = 'http://localhost:8080/api';
    constructor(private httpClient: HttpClient){}

    getAgency(id){
        var formData: any = new FormData();
        formData.set("agencyId", id);

        return this.httpClient.post<Agency>(`${this.BASE_API}/agency/getAgencyById`, formData);
    }

    updateAgency(agency: Agency){
        return this.httpClient.post<Agency>(`${this.BASE_API}/agency/editAgency`, agency);
    }
}