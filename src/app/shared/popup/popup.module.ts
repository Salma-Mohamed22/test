import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPopupComponent } from './input-popup/input-popup.component';
import { InputsModule } from '../inputs/inputs.module';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    InputPopupComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputsModule,
  ],
  exports:[
    InputPopupComponent,
    TestComponent
  ]
})
export class PopupModule { }
