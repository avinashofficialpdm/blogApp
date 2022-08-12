import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


const materialModules=[MatFormFieldModule,
  MatButtonModule,
  MatInputModule
]
@NgModule({
  imports: [
    CommonModule,
    materialModules
    
  ],
  exports:[materialModules],
  declarations: [MaterialComponent]
})
export class MaterialModule { }
