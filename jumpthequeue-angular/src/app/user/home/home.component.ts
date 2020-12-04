import { EventEmitter, Inject } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/shared/services/event.service';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(UserComponent) private parent: UserComponent, private eventService: EventService) { }

  ngOnInit(): void {

    this.eventService.getAllEvent();
  }


  show() {
    this.parent.openNav();
  }

}
