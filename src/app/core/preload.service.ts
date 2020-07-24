import { Injectable } from '@angular/core';
// carga selectiva
import {PreloadingStrategy, Route} from '@angular/router';
import { from, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PreloadService implements PreloadingStrategy {

  // constructor() { }

  //recivimos la ruta y un metodo de precarga una funcion
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of();
    } 
  }
}
