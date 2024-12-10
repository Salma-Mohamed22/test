import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    CdkStepperModule,
    MatStepperModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    StepperComponent,
    CdkStepperModule,
    MatStepperModule,
    MatIconModule
  ]
})
export class StepperModule { }
