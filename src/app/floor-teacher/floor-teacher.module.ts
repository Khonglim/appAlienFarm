import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FloorTeacherPage } from './floor-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: FloorTeacherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FloorTeacherPage]
})
export class FloorTeacherPageModule {}
