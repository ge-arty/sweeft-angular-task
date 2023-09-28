import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollDirective } from 'src/app/directives/infinite-scroll.directive';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedUsers: User[] = [];

  @ViewChild(InfiniteScrollDirective)
  _infiniteScroll: InfiniteScrollDirective;

  constructor(private _userService: UserService) {}
  ngAfterViewInit(): void {
    this._infiniteScroll.reloadData();
  }

  getUsers = (start: number, end: number) => {
    return this._userService.getUsers(start, end);
  };

  ngOnInit(): void {}
}
