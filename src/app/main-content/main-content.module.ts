import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { mainContentRoutes } from './main-content.routes';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainContentRoutes),
    SharedModule,
  ],
  declarations: [IntroComponent, ],
  exports: [
    IntroComponent,
  ]
})
export class MainContentModule { }
