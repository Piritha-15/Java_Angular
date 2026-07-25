getCourses(): Observable<Course[]> {
  return this.http.get<Course[]>('http://localhost:3000/courses').pipe(
    map(courses => courses.filter(c => c.credits > 0)),
    tap(courses => console.log('Courses loaded:', courses.length)),
    retry(2),
    catchError(() => throwError(() => new Error('Failed to load courses')))
  );
}