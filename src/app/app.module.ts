import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, ROUTES } from "@angular/router";
// import { CustomMaterialModule } from "./core/material.module";
import { LayoutModule } from '@angular/cdk/layout';
import { DatePipe } from '@angular/common';
// import { EllipsisModule } from 'ngx-ellipsis';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChatComponent } from './chat/chat.component';
import { RoomComponent } from './room/room.component';
import { CreateRoomComponent } from "./create-room/create-room.component";

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';



const appRoutes: Routes = [
  { path: '', component: RoomComponent, data: { title: 'Room Component' } },
  { path: 'room', component: RoomComponent, data: { title: 'Room Component' } },
  { path: 'create-room', component: CreateRoomComponent, data: { title: 'Create Room Component' } },
  { path: 'chat', component: ChatComponent, data: { title: 'Chat Component' } },


]
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RoomComponent,
    CreateRoomComponent
  ],


  imports: [ LayoutModule, FlexLayoutModule,
    BrowserModule, AppRoutingModule,
    BrowserAnimationsModule, FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatButtonModule,
     MatCardModule,
     
     MatFormFieldModule,
     
     
     // HttpModule,
    // RouterModule.forRoot(appRoutes) // <-- debugging purposes only
    RouterModule.forRoot(appRoutes),
    
  ],
  entryComponents: [],
  bootstrap: [AppComponent],

providers: [],
})
export class AppModule { }
