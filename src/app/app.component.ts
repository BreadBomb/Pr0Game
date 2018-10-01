import { Component } from '@angular/core';
import {CommunicationService} from './panel/service/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private  communicationService: CommunicationService) {
    this.communicationService.initSocket();
    this.communicationService.send('test');
  }
}
