import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-mainpagedetail',
  templateUrl: './mainpagedetail.component.html',
  styleUrls: ['./mainpagedetail.component.css']
})
export class MainpagedetailComponent {
  matchId: string;
  matchDetails: any =[];
  onematchDetails: any =[];
  constructor(private appservice: AppService, private activateroute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.matchId = this.activateroute.snapshot.paramMap.get('id');
    this.appservice.getLiveScore().subscribe(alldata => {
    this.matchDetails = alldata["data"];
    this.onematchDetails = this.matchDetails.find(obj => obj.id == this.matchId);
    });
  }
}
