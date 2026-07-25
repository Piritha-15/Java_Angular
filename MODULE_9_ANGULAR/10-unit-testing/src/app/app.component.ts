describe('CourseCardComponent', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h3'))
      .nativeElement.textContent).toContain('Data Structures');
  });
});