import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/shared/modals/event.modal';
import { QueueDetail } from 'src/app/shared/modals/queue-detail.model';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-view-queue',
  templateUrl: './view-queue.component.html',
  styleUrls: ['./view-queue.component.css']
})
export class ViewQueueComponent implements OnInit {


  joined = false;
  id: string;
  eventDetails: any;
  mail: string;
  queueNo: string;
  queue: QueueDetail[];
  events: Events[] = [];

  constructor(private route: ActivatedRoute, private eventService: EventService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.route.params.subscribe(routeParams => {
      this.getDetails(routeParams.id);
    });
  }



  getDetails(id: string) {
    this.eventService.getEventById(id).subscribe(event => {
      console.log(event);
      this.eventDetails = event;
      this.queue = this.eventService.queuesDetail.filter(e => e.eventId == this.eventDetails.id);
      if (this.eventService.joinedEvents.includes(this.eventDetails.id)) {
        this.eventDetails.isJoined = true;
      }
      console.log(this.eventDetails);
    });
  }

  updateEventList(join: boolean) {
    this.events = JSON.parse(localStorage.getItem('eventList'));
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].id == this.eventDetails.id) {
        this.events[i].isJoined = join;
      }
    }
    localStorage.setItem('eventList', JSON.stringify(this.events));
  }

  join(eventId: string) {
    this.updateEventList(true);
    this.joined = true;
    this.eventDetails.isJoined = true;
    this.eventService.joinEvent(eventId).subscribe(data => {
      this.queue[0] = data;
      console.log(data);
      this.openSnackBar('Joined The Queue', 'Success');
      this.eventService.fetchJoinedEvents();
    });
  }

  leave() {
    this.updateEventList(false);
    this.joined = false;
    this.eventDetails.isJoined = false;
    this.eventService.leaveEvent(this.queue[0].id, this.eventDetails.id).subscribe(data => {
      this.eventService.fetchJoinedEvents();
      this.getDetails(this.eventDetails.id);
      this.openSnackBar('Leaved The Queue', 'Success');
    },
      err => {
        this.openSnackBar('access denied', 'OK');
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }

}
