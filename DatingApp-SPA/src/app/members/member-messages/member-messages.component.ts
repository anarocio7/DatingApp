import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/_models/message.interface';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {

  @Input() receiverId: number;
  @Input() messages: Message[];

  constructor(private userService: UserService,
              private authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loadMessages(){
    this.userService.getMessageThread(this.authService.decodedToken.nameid, this.receiverId)
        .subscribe(messages => {
          this.messages = messages;
        }, error => {
          this.alertify.error(error);
        });
  }

}
