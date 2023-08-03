import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { sharedmodule } from './shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, sharedmodule,HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
