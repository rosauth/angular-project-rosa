import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { BusService } from '../../utils/bus-service';
import { Bus } from '../../constant/Bus';
import { AuthService } from 'src/app/auth/auth.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  closeResult: String;

  busList: Array<Bus>;
  bus: Bus;
  dataFromWeb: any;

  constructor(public authService: AuthService, private service: BusService, private modalService: NgbModal) {
    this.dataFromWeb = authService.decodeJWT();
    this.createNew();
  }

  ngOnInit(): void {
    this.getAllBuses();
  }

  createNew() {
    this.bus = new Bus();
    this.bus.agencyId = this.dataFromWeb.agencyId;
  }

  public getAllBuses() {
    this.service.getAllBuses(this.dataFromWeb.agencyId).subscribe((buses) => {
      this.busList = buses;
      this.loadItems();
    })
  }

  // Kendo
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.busList.slice(this.skip, this.skip + this.pageSize),
      total: this.busList.length
    };
  }

  // add new bus
  addBus(content) {
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
      
      this.service.newBus(this.bus).subscribe((newBuses) => {
        this.createNew();
        this.getAllBuses();
      });

      return `with: ${reason}`;
    } else {
      return  `with: ${reason}`;
    }
  }

  // edit bus data
  editBus(content, id){
    this.service.getById(id).subscribe((buses) => {
      this.bus = buses;
    })
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed: ${this.getDismissEditReason(reason)}`;
    });
  }

  private getDismissEditReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else if (reason === 'save'){

      this.service.updateBuses(this.bus).subscribe((editedBus) => {
        this.createNew();
        this.getAllBuses();
      })

      return `with: ${reason}`;
    } else {
      return  `with: ${reason}`;
    }
  }

  // remove bus
  removeBus(content, id){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed: ${this.getDismissRemoveReason(reason, id)}`;
    });
  }

  private getDismissRemoveReason(reason: any, id): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else if (reason === 'save'){

      this.service.deleteBus(id).subscribe((deletedBus) => {
        this.getAllBuses();
      });

      return `with: ${reason}`;
    } else {
      return  `with: ${reason}`;
    }
  }

}
