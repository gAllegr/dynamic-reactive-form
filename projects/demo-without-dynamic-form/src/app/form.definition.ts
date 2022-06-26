import { FormControl } from '@angular/forms';

export type colors = 'Red' | 'Blue' | 'Yellow';
export type seasons = 'Spring' | 'Summer' | 'Fall' | 'Winter';
export type musics = 'Classic' | 'Country' | 'Folk' | 'Rap' | 'Rock';
export type foods = 'icecream-0' | 'pizza-1' | 'tacos-2';

export interface Food {
  value: foods,
  viewValue: string
}

export interface FormLeftRepresentation {
  firstName: FormControl<string | null>
  lastName: FormControl<string | null>
  faveFood: FormControl<foods | null>
  faveColor: FormControl<colors | null>
}

export interface FormRightRepresentation {
  phone: FormControl<string | null>
  email: FormControl<string | null>
  faveSeason: FormControl<seasons | null>
  faveMusic: FormControl<musics | null>
}
