import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInputComponent} from "./user-input.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [UserInputComponent],
  exports: [
    UserInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class UserInputModule { }
