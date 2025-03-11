import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit {
  enquiryForm!: FormGroup;
  countries: string[] = [];
  isEnquiryOpen = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize the form
    this.enquiryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      designation: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      landline: [''],
      message: ['', Validators.required],
    });

    // Fetch countries from the REST API
    this.getCountries();
  }

  getCountries() {
    this.http.get<any[]>('https://restcountries.com/v2/all')
      .subscribe({
        next: (data) => {
          this.countries = data.map(country => country.name);
        },
        error: (error) => {
          console.error('Error fetching countries:', error);
        }
      });
  }

  openEnquiryForm() {
    this.isEnquiryOpen = true;
  }

  closeEnquiryForm() {
    this.isEnquiryOpen = false;
  }

  submitEnquiry() {
    if (this.enquiryForm.valid) {
      const formData = this.enquiryForm.value;

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        designation: formData.designation,
        company: formData.company,
        email: formData.email,
        country: formData.country,
        mobile: formData.mobile,
        landline: formData.landline || 'N/A',
        message: formData.message,
      };

      emailjs
        .send(
          'service_7mvzcuq', // Service ID
          'template_sy6fmhq', // Template ID
          templateParams,
          '2Xtch0BW21lHRY5eP' // Public Key from EmailJS
        )
        .then(
          (response) => {
            console.log('Form submitted successfully!', response);
            alert('Enquiry submitted successfully!');
            this.enquiryForm.reset();
            this.closeEnquiryForm();
          },
          (error) => {
            console.error('Error submitting form:', error);
            alert('Failed to submit enquiry. Please try again.');
          }
        );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
