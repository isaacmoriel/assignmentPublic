import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';


const material = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatListModule ]
const shareModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule]

@NgModule({
  imports: [
    shareModules,
    material
  ],
  exports:[material,
    shareModules,
    ToolbarComponent
  ],
  declarations: [ToolbarComponent]
})
export class SharedModule { }
