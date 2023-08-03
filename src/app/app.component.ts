import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  products:any = [];

constructor (private appservice:AppService){
  this.appservice.getData().subscribe((data) => {
 this.products=data;
 console.log(data);
});  
}

}
