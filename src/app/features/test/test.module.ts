import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './pages/test1/test1.component';
import { Test2Component } from './pages/test2/test2.component';
import { TestRoutingModule } from './test-routing.module';



@NgModule({
  declarations: [
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  exports: [
    Test1Component,
    Test2Component
  ]
})
export class TestModule { }
