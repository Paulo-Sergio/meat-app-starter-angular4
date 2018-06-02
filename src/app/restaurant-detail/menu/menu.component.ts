import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public menu: MenuItem[]

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']

    this.restaurantsService.menuOfRestaurant(id)
      .subscribe(menu => this.menu = menu)
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }

}
