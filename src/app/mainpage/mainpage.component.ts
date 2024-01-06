import { Component , OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  allscores:any =[];

  ngOnInit(): void {
    this.getLiveScoreDetails();
  }
  constructor(private appservice:AppService)
  {

  }

  getLiveScoreDetails()
  {
   
    this.appservice.getLiveScore().subscribe(getdata=>{
      
      this.allscores=getdata["data"];
      if(this.allscores==undefined)
      {
        debugger;
        this.allscores = getdata["reason"]
        //this.allscores = [];
      }
    })
  }

}
