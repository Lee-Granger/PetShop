import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  newPet : object;
  errors = [];

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      type: "",
      description: "",
      skill1: "",
      skill2: "",
      skill3: "",
    };
  }


  AddNewPet(){
    console.log("Sending this info to the service");
    console.log(this.newPet);
    console.log(this.newPet)
    let obs = this._http.AddNewPet(this.newPet);
    obs.subscribe(data => {
      if(data['errors']){
        for(var key in data['errors']){
          console.log(data['errors'][key]['message']);
          this.errors.push(data['errors'][key]['message']);
        }
      } else {
      this.newPet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""};
      this._router.navigate(['/pets']);
      }
    })
  }

}
