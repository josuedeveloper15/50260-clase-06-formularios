import { AbstractControl } from '@angular/forms';

// FormControl
// FormArray
// FormGroup

export function noHomeroValidator(formControl: AbstractControl) {
  if (
    typeof formControl.value === 'string' &&
    formControl.value.toLowerCase().includes('homero')
  ) {
    return {
      noHomeroError: 'No se admiten Homeros',
    };
  }

  // Si retornan null significa que el campo es VALIDO
  return null;
}
