import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  //Gives newPerson back to the People Component (parent component)
  @Output() onSubmitted:EventEmitter<any> = new EventEmitter();

  @Output() onCancel:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(newPerson) {
    //adding a newPerson to the people array
    this.onSubmitted.emit(newPerson);

  }

  cancel() {
    //emit moves this event from new-person to people (child to parent)
    this.onCancel.emit();
  }

}
