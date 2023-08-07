import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatIoComponent } from './chat-io.component';

const routes: Routes = [{ path: '', component: ChatIoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatIoRoutingModule { }
