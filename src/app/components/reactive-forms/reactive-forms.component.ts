import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { noHomeroValidator } from '../../utils/custom-validators';

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
      firstName: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(2),
        noHomeroValidator,
      ]),
      lastName: this.formBuilder.control('', [Validators.required]),

      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),

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

  getErrors(formControlName: string): ValidationErrors | null | undefined {
    return this.userFormGroup.get(formControlName)?.errors;
  }

  applyValidationStyleClass(formControlName: string): string {
    const control = this.userFormGroup.get(formControlName);
    if (control?.touched) {
      if (control?.invalid) {
        return 'is-invalid';
      } else {
        return 'is-valid';
      }
    }
    return '';
  }

  onSubmit(): void {
    if (this.userFormGroup.invalid) {
      // marcar todos los controles del formulario como que se han tocado
      this.userFormGroup.markAllAsTouched();
    } else {
      console.log(this.userFormGroup.value);
    }
  }
}
