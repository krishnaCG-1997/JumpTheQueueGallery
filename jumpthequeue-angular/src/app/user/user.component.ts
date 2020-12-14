import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from '../shared/services/event.service';
import { Events } from '../shared/modals/event.modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  toggle = false;
  events: Events[] = [];
  eventDetails: Events[];

  constructor(@Inject(DOCUMENT) document, private route: Router, private snackBar: MatSnackBar, public eventService: EventService) { }

  ngOnInit(): void {

    this.fetchJoinedEvents();
    this.eventService.isDisable = false;
  }

  logOut() {
    this.eventService.logOut();
  }

  fetchJoinedEvents() {
    this.eventService.fetchJoinedEvents();
  }

  getAllEvents() {
    this.eventDetails = JSON.parse(localStorage.getItem('eventList'));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }

  viewQueue(id: string, name: string) {
    this.closeNav();
    this.openSnackBar('Showing queue of ', name);
    this.route.navigate(['user/queue', id]);
  }

  openNav() {
    this.getAllEvents();
    this.toggle = true;
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    this.toggle = false;
    document.getElementById('mySidenav').style.width = '0';
  }

}
