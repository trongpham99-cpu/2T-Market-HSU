import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChatIoRoutingModule } from './chat-io-routing.module';
import { ChatIoComponent } from './chat-io.component';
import {UsernnameComponent} from '../../components/chat-io/usernname/usernname.component'
import { ChatComponent } from '../../components/containers/chat/chat.component'
@NgModule({
  declarations: [ChatIoComponent,UsernnameComponent,ChatComponent],
  imports: [
    CommonModule,
    ChatIoRoutingModule,
    FormsModule
  ]
})
export class ChatIoModule { }
