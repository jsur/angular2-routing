import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
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
])

@Injectable()
export class UserService {
  // get all users
  getUsers() {
    return usersPromise;
  }
  // find a specific user
  getUser(username) {
    return usersPromise.then(users =>
      users.find(user => user.username === username));
  }
}
