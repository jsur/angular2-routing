import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about/about-user.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from './shared/services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
   ],
  declarations: [
    AppComponent,
    AboutComponent,
    AboutUserComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
   ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
