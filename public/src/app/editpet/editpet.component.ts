import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  id: any;
  petToEdit: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.getEdit(this.id);
    })
  }

  getEdit(id){
    let obs = this._http.getEdit(id);
    obs.subscribe(data => {
      this.petToEdit = data;
    })
  }

  updatePet(){
    let obs = this._http.updatePet(this.petToEdit);
    obs.subscribe(data => {
      this._router.navigate([`/pets/${this.id}`]);
    })
  }
}