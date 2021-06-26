import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RestaurantsService } from "../../restaurants/restaurants.service";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  public reviews: any[]

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']

    this.restaurantService.reviewsOfRestaurant(id)
      .subscribe(reviews => {
        console.log(reviews)
        this.reviews = reviews
      })
  }

}
