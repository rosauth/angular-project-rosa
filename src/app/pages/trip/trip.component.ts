import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Trip } from '../../constant/Trip';
import { TripService } from '../../utils/trip-service';
import { AuthService } from '../../auth/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  closeResult: String;

  tripList: Array<Trip>;
  trip: Trip;
  dataFromWeb: any;

  busCode: any;
  sourceStop: any;
  destStop: any;

  constructor(public authService: AuthService, private service: TripService, private modalService: NgbModal) {
    this.dataFromWeb = this.authService.decodeJWT();
    this.createNew();
  }

  ngOnInit(): void {
    this.getTrip();
  }

  public createNew() {
    this.trip = new Trip();
    this.trip.agencyId = this.dataFromWeb.agencyId;
  }

  public getTrip() {
    this.service.getAllTrip(this.dataFromWeb.agencyId).subscribe((result) => {
      this.tripList = result;
      this.loadItems();
    })
  }

  // kendo
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.tripList.slice(this.skip, this.skip + this.pageSize),
      total: this.tripList.length
    };
  }

  addTrip(content){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed: ${this.getDismissAddReason(reason)}`;
    });
  }

  private getDismissAddReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else if (reason === 'save'){
      
      this.service.newTrip(this.trip).subscribe((newTrip) => {
        this.createNew();
        this.getTrip();
      });

      return `with: ${reason}`;
    } else {
      return  `with: ${reason}`;
    }
  }
}
