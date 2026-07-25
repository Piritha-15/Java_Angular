submitted = false;
onSubmit(form: NgForm) {
  console.log(form.value, form.valid);
  if (form.valid) this.submitted = true;
}