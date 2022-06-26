import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { colors, Food, FormLeftRepresentation, FormRightRepresentation, musics, seasons } from '../form.definition';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  formLeft = new FormGroup<FormLeftRepresentation>({
    firstName: new FormControl(),
    lastName: new FormControl(),
    faveFood: new FormControl(),
    faveColor: new FormControl()
  });

  formRight = new FormGroup<FormRightRepresentation>({
    phone: new FormControl(),
    email: new FormControl(),
    faveSeason: new FormControl(),
    faveMusic: new FormControl()
  });

  foods: Food[] = [
    {value: 'icecream-0', viewValue: 'Ice Cream'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  colors: colors[] = ['Red', 'Blue', 'Yellow'];
  seasons: seasons[] = ['Spring', 'Summer', 'Fall', 'Winter'];
  musics: musics[] = ['Classic', 'Country', 'Folk', 'Rap', 'Rock'];

  ngOnInit(): void {
    this.formLeft.valueChanges.subscribe(values => {
      console.log('what changed on the left?', values);
    });

    this.formRight.valueChanges.subscribe(values => {
      console.log('what changed on the right?', values);
    });
  }

}
