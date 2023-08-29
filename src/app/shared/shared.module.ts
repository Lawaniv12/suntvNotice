import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule { }
