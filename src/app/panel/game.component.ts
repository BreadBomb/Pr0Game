import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from './router.animations';
import {CommunicationService} from './service/communication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [routerTransition]
})
export class GameComponent implements OnInit {

  @ViewChild('messageContainer') messageContainer: any;

  messages = [];
  chat_draft_msg: string;

  tabIndex = 1;

  constructor(private communicationService: CommunicationService, private router: Router, private activeRoute: ActivatedRoute) {
    this.communicationService.onMessage().subscribe(next => {
      this.messages.push(next);
      setTimeout(() => {
        this.messageContainer.nativeElement.scrollTo({
          top: this.messageContainer.nativeElement.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      }, 20);
    });

    if (this.activeRoute.snapshot.children[0].url[0].path === 'search') {
      this.tabIndex = 1;
    } else {
      this.tabIndex = 0;
    }
  }

  ngOnInit() {
  }

  sendMessage() {
    if (this.chat_draft_msg.length === 0) {
      return;
    }
    this.communicationService.send(this.chat_draft_msg);
    this.chat_draft_msg = '';
  }

  changeView(index: number) {
    if (index === 0) {
      this.router.navigate(['game', 'scoreboard']);
    } else {
      this.router.navigate(['game', 'search']);
    }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
