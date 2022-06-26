import { FormControl } from '@angular/forms';

export interface FormLeftRepresentation {
  firstName: FormControl<string | null>
  lastName: FormControl<string | null>
  faveFood: FormControl<string | null>
  faveColor: FormControl<string | null>
}

export interface FormRightRepresentation {
  phone: FormControl<string | null>
  email: FormControl<string | null>
  faveSeason: FormControl<string | null>
  faveMusic: FormControl<string | null>
}
