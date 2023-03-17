import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['../../../dist/output.css'],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
