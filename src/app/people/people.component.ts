import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  isAddingNewPerson: boolean = false;

  people = [];

  constructor() { }

  ngOnInit() {
    this.people = [
      {
        name: 'Jamal Johnson',
        status: 'Currently coding',
        pic: 'http://maltardesigns.com/wp-content/uploads/2016/10/Jamal.jpg',
        website: {
          url: 'http://maltardesigns.com',
          name: 'MalTar Designs'
          },
        instagram: {
          url: 'http://instagram.com/mr_maltar',
          name: '@mr_maltar'
          }
        },

        {
        name: 'Jayden Johnson',
        status: 'Playing video games',
        website: {
          url: 'http://maltardesigns.com/jamal-johnson',
          name: "Jayden's website"
          },
        instagram: {
          url: 'http://instagram.com/mr_maltar',
          name: '@jayden'
          }
        },

        {
        name: 'Nicole',
        status: 'Saving Money',
        pic: 'https://media.licdn.com/media/p/2/005/09c/3b2/319f575.jpg',
        website: {
          url: 'http://nikkisnaturalcare.com',
          name: "Nikki's Natural Care"
          },
        instagram: {
          url: 'http://instagram.com/butafly_357',
          name: "@butafly_357"
          }
        }

        
        
      ]//*this.people end

  }//*ngOnInit end

  onSubmit(newPerson) {
    //adding a newPerson to the people array
    this.people.push(newPerson);

    //hides the new-person form when submitted
    this.isAddingNewPerson = false;

  
  }

}
