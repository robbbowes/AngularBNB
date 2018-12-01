import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
@Component({
  selector: 'bnb-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentalItems: Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {

    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentalItems: Rental[]) => {
        this.rentalItems = rentalItems;
      },
      (error) => {
      },
      () => {

      }
    )
  };

}
