import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { routing } from "./app.routes";
import { AuthGuard } from "./_guard/auth.guard";

// Services
import { FriendService } from "./_services/friend";
import { LoginService } from "./_services/login";
import { UserService } from "./_services/user";

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { SignupComponent } from './_components/signup/signup.component';
import { AuthenticationComponent } from './_components/authentication/authentication.component';
import { OptionsComponent } from './_components/options/options.component';
import { ConversationsComponent } from './_components/conversations/conversations.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { ActivesComponent } from './_components/actives/actives.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FriendsComponent } from './_components/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthenticationComponent,
    OptionsComponent,
    ConversationsComponent,
    MessagesComponent,
    DashboardComponent,
    ActivesComponent,
    FriendsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    FriendService,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
