import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from '../constant/Bus'
 
@Injectable({
    providedIn: 'root'
})
export class BusService{
    private BASE_API = 'http://localhost:8080/api';
    constructor(private httpClient: HttpClient){}
    
    getAllBuses(agencyId){
        var formData: any = new FormData();
        formData.set("agencyId", agencyId);

        return this.httpClient.post<Bus[]>(`${this.BASE_API}/showAllBus`, formData);
    }

    getById(id){
        var formData: any = new FormData();
        formData.set("id", id);

        return this.httpClient.post<Bus>(`${this.BASE_API}/getBus`, formData);
    }

    newBus(bus: Bus){
        return this.httpClient.post(`${this.BASE_API}/newBus`, bus);
    }

    updateBuses(bus: Bus){
        return this.httpClient.post(`${this.BASE_API}/editBus`, bus);
    }

    deleteBus(id: any){
        var formData = new FormData();
        formData.set("id", id);

        return this.httpClient.post(`${this.BASE_API}/removeBus`, formData);
    }
}