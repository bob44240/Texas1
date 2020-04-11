import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';

@NgModule({
  imports: [MatButtonModule, MatIconModule,
    MatFormFieldModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatChipsModule,
    MatButtonToggleModule
  ],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule,
     MatInputModule,
     MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
     MatSidenavModule,
     MatToolbarModule,
     MatListModule,
     MatSliderModule,
     MatChipsModule,
     MatButtonToggleModule
    ]
})
export class MaterialModule{}

