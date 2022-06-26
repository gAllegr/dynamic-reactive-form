import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  formLeft = new UntypedFormGroup({
    firstName: new FormControl<string | null>(''),
    lastName: new FormControl<string | null>(''),
    faveFood: new FormControl<string | null>(''),
    faveColor: new FormControl<string | null>('')
  });

  formRight = new UntypedFormGroup({
    phone: new FormControl<string | null>(''),
    email: new FormControl<string | null>(''),
    faveSeason: new FormControl<string | null>(''),
    faveMusic: new FormControl<string | null>('')
  });

  foods = [
    {value: 'icecream-0', viewValue: 'Ice Cream'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  colors = ['Red', 'Blue', 'Yellow'];
  seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
  musics = ['Classic', 'Country', 'Folk', 'Rap', 'Rock'];

  ngOnInit(): void {
    this.formLeft.valueChanges.subscribe(values => {
      console.log('what changed on the left?', values);
    });

    this.formRight.valueChanges.subscribe(values => {
      console.log('what changed on the right?', values);
    });
  }

}
