import { Component, OnInit } from '@angular/core';

// 追加
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css']
})
export class ToppageComponent implements OnInit {
  subscription: Subscription;
  public loggedIn: boolean = false;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.subscription = this.auth.isAuthenticated()
      .subscribe(result => {
        this.loggedIn = result;
      });

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickLogout() {
    this.auth.signOut();
  }

}
