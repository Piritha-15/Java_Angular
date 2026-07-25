this.enrollForm = this.fb.group({
  studentName: ['', [Validators.required, Validators.minLength(3)]],
  studentEmail: ['', [Validators.required, Validators.email]],
  courseId: [null, Validators.required],
  preferredSemester: ['Odd', Validators.required],
  agreeToTerms: [false, Validators.requiredTrue]
});