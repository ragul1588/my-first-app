import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from  './app-routing.module';
import { sharedmodule } from './shared.module';
import {HttpClientModule} from '@angular/common/http';
import {AllmatchesComponent} from './allmatches/allmatches.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {MainpagedetailComponent} from './mainpage/mainpagedetail/mainpagedetail.component';
import { NewspageComponent } from './newspage/newspage/newspage.component';

@NgModule({
  declarations: [
    AppComponent,
    AllmatchesComponent,
    MainpageComponent,
    MainpagedetailComponent,
    NewspageComponent
  ],
  imports: [
    BrowserModule, sharedmodule,HttpClientModule,AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
