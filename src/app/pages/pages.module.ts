import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';
import { CComponent } from './c/c.component';
import { FrontendComponent } from './frontend/frontend.component';
import { SecurityComponent } from './security/security.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';



@NgModule({
  declarations: [FirstComponent, PythonComponent, JavaComponent, CComponent, FrontendComponent, SecurityComponent, AlgorithmComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
