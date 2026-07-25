export const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'courses', component: CourseListComponent },
 { path: 'courses/:id', component: CourseDetailComponent },
 { path: 'profile', canActivate: [authGuard], component: StudentProfileComponent },
 { path: '**', component: NotFoundComponent }
];