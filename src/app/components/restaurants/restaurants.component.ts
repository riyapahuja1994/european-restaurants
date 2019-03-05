import { Component, OnInit, Input } from "@angular/core";
import { Restaurant } from "../../interfaces/restaurant";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.scss"]
})
export class RestaurantsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() restaurant: Restaurant;
}
