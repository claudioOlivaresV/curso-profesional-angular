import { Component , HostListener, OnInit} from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {AngularFireMessaging } from '@angular/fire/messaging';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private swUpdate: SwUpdate, private messages: AngularFireMessaging) {}

  ngOnInit() {
    this.updatePWA();
    this.requestPermission();
    this.listenerNotification();

  }

  updatePWA(){
    this.swUpdate.available
    .subscribe(value => {
      console.log('uodate', value);
      window.location.reload();
    });
  }
  requestPermission(){
    this.messages.requestToken
    .subscribe(token => {
      console.log(token)
    })

  }
  listenerNotification(){
    this.messages.messages
    .subscribe(message => {
      console.log(message)
    })
  }

}
