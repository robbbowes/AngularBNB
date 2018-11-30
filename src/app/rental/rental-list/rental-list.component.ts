import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bnb-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentalItems: any[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.rentalItems = this.rentalService.getRentals();
  }

}
