import { Bus } from './Bus';
import { Stop } from './Stop';

export class Trip{
    id: String;
    bus: Bus;
    sourceStop: Stop;
    destStop: Stop;
    fare: number;
    journeyTime: number;
    agencyId: String;
    createdDate: Date;
    updatedDate: Date;
}