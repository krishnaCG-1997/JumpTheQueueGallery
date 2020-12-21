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

  id: string;
  eventDetails: any;
  mail: string;
  queueNo: string;
  queue: QueueDetail[];
  events: Events[] = [];
  timer: string;

  x = setInterval(() => {
    if (this.queue[0] != null) {
      const currentTime = new Date().getTime();
      const estimatedTime = new Date(this.queue[0].minEstimatedTime).getTime();
      const diff = estimatedTime - currentTime;
      const hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((diff % (1000 * 60)) / (1000));

      if (diff > 0) {
        this.timer = hr + ':' + min + ':' + sec;
      }
      else {
        this.timer = '00:00:00';
      }
    }
    else {
      this.timer = '00:00:00';
    }
  }, 1000);

  constructor(private route: ActivatedRoute, private eventService: EventService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.route.params.subscribe(routeParams => {
      this.getDetails(routeParams.id);
    });
  }



  async getDetails(id: string) {
    let event = await this.eventService.getEventById(id);
    this.eventDetails = event;
    this.queue = this.eventService.queuesDetail.filter(e => e.eventId == this.eventDetails.id);
    if (this.eventService.joinedEvents.includes(this.eventDetails.id)) {
      this.eventDetails.isJoined = true;
    }
    console.log(this.eventDetails);
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

  async join(eventId: string) {

    let data=await this.eventService.joinEvent(eventId);
    if(data!=null)
    {
      this.updateEventList(true);
      this.checkCount(true);
      this.queue[0] =data;
      this.eventDetails.isJoined = true;
      this.openSnackBar('Joined The Queue', 'Success');
      this.eventService.fetchJoinedEvents();
    }
    else{ 
      this.openSnackBar('Error In Joining', 'Error');
    }
  }

  async leave() {

    let data= await this.eventService.leaveEvent(this.queue[0].id, this.eventDetails.id);
    this.updateEventList(false);
    this.eventDetails.isJoined = false;
    this.eventService.fetchJoinedEvents();
    this.getDetails(this.eventDetails.id);
    this.openSnackBar('Leaved The Queue', 'Success');
  }

  checkCount(isJoined: boolean)
  {
    if(isJoined===true){
      return true;
    }
    if(this.eventDetails.visitorCount===0)
    {
      return false;
    }
    else{
      return true;
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }

  ngOnDestroy() {
    clearInterval(this.x);
  }

}
