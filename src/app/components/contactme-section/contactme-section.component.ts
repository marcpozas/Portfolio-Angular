import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactme-section',
  templateUrl: './contactme-section.component.html',
  styleUrls: ['./contactme-section.component.scss']
})
export class ContactmeSectionComponent implements OnInit {
  title = "Contáctame"
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  submitForm() {
    if (this.contactForm.invalid) {
      // Handle invalid form submission
      return;
    }
  
    // Handle valid form submission and send the data to the server
    const formData = this.contactForm.value;
    console.log(formData); // Example: Print form data to the console
  }

  isInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return control ? (control.invalid && control.touched) : false;
  }
  
  setInvalid(fieldName: string) {
    const control = this.contactForm.get(fieldName);
    if (control && control.invalid) {
      control.markAsTouched();
    }
  }
  
  
}