import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
//import * as $ from "jquery";

@Component({
  selector: 'app-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.css']
})
export class AllmatchesComponent {
  title = 'Cricket Live Scores';
  products: any = [];
  flags: any = [];
  Temproducts: any = [];

  constructor(private appservice: AppService, private router: Router) {

  }

  NavigatetoList() {
    this.router.navigate(['/List']);
  }
  getScoreDetails(data) {

    this.appservice.getScore().subscribe((getdata) => {

      this.Temproducts = getdata["data"];
      
      if (getdata["reason"] !=null ) {
        this.products = getdata["reason"]
      }
      this.products = this.Temproducts.filter(function (item) {

        return item.matchType == data;
      })
    }

    )
  }
  getAllCountryFlags() {
    this.appservice.getAllFlags().subscribe((getdata) => {
      this.flags = getdata["data"];
    })
  }
};
