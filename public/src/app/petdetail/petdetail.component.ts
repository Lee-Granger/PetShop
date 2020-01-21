import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetdetailComponent implements OnInit {
  id: any;
  petDisplay: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.getDisplay(this.id);
    })
  }

  getDisplay(id){
    let obs = this._http.getEdit(id);
    obs.subscribe(data => {
      this.petDisplay = data;
    })
  }

  deleteThis(){
    let obs = this._http.deleteThis(this.id);
    obs.subscribe(data => {
      this._router.navigate(['/pets']);
    })
  }

}
