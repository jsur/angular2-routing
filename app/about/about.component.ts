import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/823645540126756865/7zKZyNvg_400x400.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/812414483696123905/ge4FYRoY_400x400.jpg'
  },
  {
    id: 3,
    name: 'Seppo',
    username: 'seppohovi',
    avatar: 'https://pbs.twimg.com/profile_images/590697195118145537/TLy3JFtC_400x400.jpg'
  },
]

@Component({
  selector: 'about-page',
  styles: [`
    .profile-card {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 30px;
      text-align: center;
    }
    .profile-card img {
      max-width: 50%;
      margin: 15px auto;
    }
  `],
  template: `
    <div class="row" *ngIf="users">
      <div class="col-sm-4" *ngFor="let user of users">
        <div class="profile-card">
          <img [src]="user.avatar" class="img-responsive img-circle">

          <h2>{{ user.name }}</h2>
          <p><a href="#"> {{ user.username }} </a></p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  users: User[] = users;
}
