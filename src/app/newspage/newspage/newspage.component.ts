import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent {
  cricketNews: any =[];
  filteredArray : any = [];

  ngOnInit(): void {
    this.getnews();
  }

 constructor(private router: Router, private appservice: AppService)
 {

 }
 navigateTo(url: string): void {
  window.location.href = url;
}
 getnews()
 {
   this.appservice.getAllCricketNews().subscribe(cricdata=>{
   this.cricketNews = cricdata["articles"];
  });
 }
};
