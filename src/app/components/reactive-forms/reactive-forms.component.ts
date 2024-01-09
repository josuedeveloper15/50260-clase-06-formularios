import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Provincia {
  id: number;
  name: string;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  userFormGroup: FormGroup;

  // provincias: string[] = ['Buenos Aires', 'Neuquen', 'Cordoba'];
  provincias: Provincia[] = [
    {
      id: 1,
      name: 'Buenos Aires',
    },
    {
      id: 2,
      name: 'Mendoza',
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.userFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      email: this.formBuilder.control('test@mail.com'),
      acceptTerms: this.formBuilder.control(false),

      location: this.formBuilder.group({
        address: this.formBuilder.control(''),
        address2: this.formBuilder.control(''),
        city: this.formBuilder.control(''),
        state: this.formBuilder.control(''),
        zip: this.formBuilder.control(''),
      }),
    });

    // this.formBuilder.control();
    // this.formBuilder.array();
  }
}
