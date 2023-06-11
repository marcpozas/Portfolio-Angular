import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contactme-section',
  templateUrl: './contactme-section.component.html',
  styleUrls: ['./contactme-section.component.scss']
})
export class ContactmeSectionComponent implements OnInit {
  title = "Contáctame"
  subtitle = "Me encantaría escuchar tus ideas y ayudarte a convertirlas en realidad. Ponte en contacto conmigo para empezar"
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.contactForm.invalid) {
      // Handle invalid form submission
      return;
    }
  
    // Handle valid form submission and send the data to the server
    const formData = this.contactForm.value;
    console.log(formData);
  
    this.http.post('https://5264v0m0rd.execute-api.eu-north-1.amazonaws.com/dev/sendcontact', formData)
      .subscribe(
        (response) => {
          console.log(response); // Example: Print server response to the console
          // Handle the server response as needed
        },
        (error) => {
          console.error(error); // Example: Print error to the console
          // Handle the error as needed
        }
      );
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