import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: 'auth', 
    loadChildren: './pages/auth/auth.module#AuthPageModule' 
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'class-schedule', loadChildren: './class-schedule/class-schedule.module#ClassSchedulePageModule' },
  { path: 'grade-report', loadChildren: './grade-report/grade-report.module#GradeReportPageModule' },
  { path: 'public-relations', loadChildren: './public-relations/public-relations.module#PublicRelationsPageModule' },
  { path: 'floor-teacher', loadChildren: './floor-teacher/floor-teacher.module#FloorTeacherPageModule' },
  { path: 'contact-school', loadChildren: './contact-school/contact-school.module#ContactSchoolPageModule' },
  { path: 'report-problems', loadChildren: './report-problems/report-problems.module#ReportProblemsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
