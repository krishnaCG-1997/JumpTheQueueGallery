import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Events } from '../modals/event.modal';
import { HttpClient } from '@angular/common/http';
import { FilterVisitor } from 'src/app/shared/modals/filter-visitor.model';
import { Pageable } from 'src/app/shared/modals/pageable.model';
import { QueueDetail } from '../modals/queue-detail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  isDisable = false;
  joinedEvents: any[] = [];
  private url = environment.url;
  queuesDetail: QueueDetail[] = [];
  eventDetails: Events[];
  constructor(private authService: AuthService, private http: HttpClient) { }


  async getAllEvent() {
    const filters: FilterVisitor = new FilterVisitor();
    const pageable: Pageable = new Pageable();

    pageable.pageNumber = 0;
    pageable.pageSize = 20;
    pageable.sort = [];
    filters.pageable = pageable;
    let data = await this.http.post<Events>(this.url + '/eventmanagement/v1/event/search', filters).toPromise();
    this.eventDetails = data['content'];
    for (let i = 0; i < this.eventDetails.length; i++) {
      if (this.joinedEvents.includes(this.eventDetails[i].id)) {
        this.eventDetails[i].isJoined = true;
      }
      else {
        this.eventDetails[i].isJoined = false;
      }
    }

    localStorage.setItem('eventList', JSON.stringify(this.eventDetails));
    console.log(this.eventDetails);
  }


  fetchJoinedEvents() {
    this.authService.fetchJoinedEvents().subscribe(data => {
      this.queuesDetail = data['content'];
      for (let i = 0; i < this.queuesDetail.length; i++) {
        if (!this.joinedEvents.includes(this.queuesDetail[i].eventId)) {
          this.joinedEvents.push(this.queuesDetail[i].eventId);
        }
      }
      console.log(this.queuesDetail);
      console.log(this.joinedEvents);
    });
  }

  async getEventById(id: string) {
    return await this.http.get(this.url + '/eventmanagement/v1/event/' + id).toPromise();
  }

  async joinEvent(eventId: string) {
    const queueObj: any = {};
    queueObj.eventId = eventId;
    queueObj.visitorId = this.authService.userId;
    return await this.http.post<QueueDetail>(this.url + '/queuedetailmanagement/v1/queuedetail', queueObj).toPromise();

  }

  async leaveEvent(id: string, eventId: string) {
    const joinedEventIndex = this.joinedEvents.indexOf(eventId);
    this.queuesDetail = [];
    if (joinedEventIndex !== -1) {
      this.joinedEvents.splice(joinedEventIndex, 1);
    }
    return await this.http.delete(this.url + '/queuedetailmanagement/v1/queuedetail/' + id).toPromise();
  }

  logOut() {
    this.isDisable = false;
    this.joinedEvents = [];
    this.queuesDetail = [];
    this.authService.logOut();
  }

  userCheck() {
    this.authService.userCheck();
  }
}
