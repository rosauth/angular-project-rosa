import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../constant/Trip';

@Injectable({
    providedIn: 'root'
})
export class TripService{
    private BASE_API = 'http://localhost:8080/api';
    constructor(private httpClient: HttpClient){}

    getAllTrip(agencyId){
        var formData: any = new FormData();
        formData.set("agencyId", agencyId);

        return this.httpClient.post<Trip[]>(`${this.BASE_API}/trip/getAllTrip`, formData);
    }

    newTrip(trip: Trip){
        return this.httpClient.post(`${this.BASE_API}/trip/createTrip`, trip);
    }

}