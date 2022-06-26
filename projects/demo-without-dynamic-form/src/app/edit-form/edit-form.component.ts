import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { colors, Food, FormLeftRepresentation, FormRightRepresentation, musics, seasons } from '../form.definition';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  formLeft = new FormGroup<FormLeftRepresentation>({
    firstName: new FormControl('Mickey'),
    lastName: new FormControl('Mouse'),
    faveFood: new FormControl('pizza-1'),
    faveColor: new FormControl('Blue')
  });

  formRight = new FormGroup<FormRightRepresentation>({
    phone: new FormControl('123-456-1212'),
    email: new FormControl('mickey@disney.com'),
    faveSeason: new FormControl('Summer'),
    faveMusic: new FormControl('Rock')
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
