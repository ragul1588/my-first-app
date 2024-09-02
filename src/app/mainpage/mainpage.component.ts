import { Component , OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  allscores:any =[];
  filteredTeams:any =[];
  targetTeams = ['India', 'Australia', 'Srilanka', 'West Indies', 'South Africa', 'England', 'Afganistan', 'Pakistan', 'Bangladesh', 'Newzealand', 'USA', 'Ireland', 'Netherland', 'Scotland','Nepal', 'Zimbabwe'];

  ngOnInit(): void {
    this.getInternationalScoreDetails();
  }
  constructor(private appservice:AppService)
  {

  }

  getInternationalScoreDetails(){
    this.appservice.getLiveScore().subscribe(getdata=>{
    this.allscores=getdata["data"];

    this.allscores = this.allscores.filter(match => {
      return this.targetTeams.some(team => match.name.includes(team));
    });
  });
  this.allscores.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

    getDomesticScoreDetails(){
      this.appservice.getLiveScore().subscribe(getdata=>{
      this.allscores=getdata["data"];

      this.allscores = this.allscores.filter(match => {
        return !this.targetTeams.some(team => match.name.includes(team));
      });
    });
    this.allscores.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  getLeagueScoreDetails(){
    this.appservice.getLiveScore().subscribe(getdata=>{
    this.allscores=getdata["data"];

    this.allscores = this.allscores.filter(match => {
      return !this.targetTeams.some(team => match.name.includes(team));
    });
  });
  this.allscores = this.allscores.filter(function (item) {

    return item.matchType == 't20';
  })
  this.allscores.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

  refreshData(){
    localStorage.removeItem('getScore');
    localStorage.removeItem('getLiveScore');

  // Optionally, re-fetch or refresh the league score details
  this.getInternationalScoreDetails();
  }
}
