import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';
import { CComponent } from './c/c.component';
import { FrontendComponent } from './frontend/frontend.component';
import { SecurityComponent } from './security/security.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    FirstComponent,
    PythonComponent,
    JavaComponent,
    CComponent,
    FrontendComponent,
    SecurityComponent,
    AlgorithmComponent,
    PagesComponent,
  ],
  imports: [SharedModule],
  exports: [
    PagesComponent,
    FirstComponent,
    PythonComponent,
    JavaComponent,
    CComponent,
    FrontendComponent,
    SecurityComponent,
    AlgorithmComponent,
  ],
})
export class PagesModule {}
