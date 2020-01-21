import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

AddNewPet(incoming){
  console.log('We have reached the service with this:');
  console.log(incoming);
  return this._http.post('/addtopets', incoming);
}

getAllPets(){
  return this._http.get('/allPets');
}

getEdit(id){
  console.log(id);
  return this._http.get(`/pet/${id}/edit`);
}

updatePet(obj){
  return this._http.put('pet/update', obj)
}

deleteThis(id) {
  return this._http.post(`/pet/${id}/delete`, id);
}

}
