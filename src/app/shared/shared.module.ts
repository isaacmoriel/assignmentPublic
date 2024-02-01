import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

//create list of modules that will be exported and imported
//to make it easier to add them in one place.
const material = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatListModule,
  MatDividerModule ]
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
