import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './pages/post/post.component';
import { PostService } from './services/post.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersListComponent } from './pages/users_list/users_list.component';
import { UserProfileComponent } from './pages/user_profile/user_profile.component';

import { AccountService } from './services/account.service';
import { ArtistService } from './services/artist.service';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    PostComponent,
    ProfileComponent,
    RegisterComponent,
    UserProfileComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'post', component: PostComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'users_list', component: UsersListComponent},
        { path: 'user_profile', component: UserProfileComponent },
        { path: '**', redirectTo: '', pathMatch: 'full' }
    ],
    { enableTracing: true}
  )
  ],
  providers: [AccountService, ArtistService, SessionService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
