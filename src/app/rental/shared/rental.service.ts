import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {

    private rentals: Rental[] = [{
        id: '1',
        title: 'Central Apartment',
        city: 'Berlin',
        street: 'Times Square',
        category: 'Apartment',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        description: 'Very nice apartment',
        dailyRate: 34,
        shared: false,
        createdOn : '24/12/2018'
      },
      {
        id: '2',
        title: 'Your new place',
        city: 'New York',
        street: 'Times Square',
        category: 'Apartment',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 2,
        description: 'Very nice apartment',
        dailyRate: 34,
        shared: true,
        createdOn : '24/12/2014'
      },
      {
        id: '3',
        title: 'Loops Ltd',
        city: 'New York',
        street: 'Times Square',
        category: 'Apartment',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        description: 'Very nice apartment',
        dailyRate: 34,
        shared: false,
        createdOn : '24/12/2017'
      },
      {
        id: '4',
        title: 'A little condo',
        city: 'New York',
        street: 'Times Square',
        category: 'Condo',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        description: 'Great apartment',
        dailyRate: 34,
        shared: false,
        createdOn : '24/12/2018'
      }
    ];

    public getRentalById(rentalId: string): Observable<Rental> {
        
        return new Observable<Rental> ((observer) => {

            setTimeout(() => {
                const foundRental = this.rentals.find((rental) => {
                    return rental.id == rentalId;
                });

                observer.next(foundRental);
            }, 500)
        });
    }

    public getRentals(): Observable<Rental[]> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);

            setTimeout(() => {
                observer.error('I am an error :(');
            }, 2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);
        });
    }

}