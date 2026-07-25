@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Angular', code: 'CS202', credits: 3, gradeStatus: 'pending' }
  ];
  getCourses() { return this.courses; }
  addCourse(course: Course) { this.courses.push(course); }
}