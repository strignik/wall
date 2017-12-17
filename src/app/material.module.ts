import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ]
})

export class MaterialModule { }
