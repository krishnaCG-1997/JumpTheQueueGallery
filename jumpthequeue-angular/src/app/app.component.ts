import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jumpthequeue-angular';
  constructor(private eventService: EventService) {}
  ngOnInit() {
    this.eventService.userCheck();
  }
}
