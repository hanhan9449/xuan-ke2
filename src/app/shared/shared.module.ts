import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
