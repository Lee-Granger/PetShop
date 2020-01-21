import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-allpets',
  templateUrl: './allpets.component.html',
  styleUrls: ['./allpets.component.css']
})
export class AllpetsComponent implements OnInit {
  petList: any;

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllPets();

  }

  getAllPets(){
    let obs = this._http.getAllPets();
      obs.subscribe(data => {
        this.petList = data;
        console.log(this.petList)
      })
    } 

}
