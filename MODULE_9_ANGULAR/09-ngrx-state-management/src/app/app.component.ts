export const loadCourses = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const courseReducer = createReducer(
  initialState,
  on(loadCourses, state => ({ ...state, loading: true })),
  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state, courses, loading: false
  }))
);