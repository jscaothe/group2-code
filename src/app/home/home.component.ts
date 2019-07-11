import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// 追加
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  public loggedIn: boolean = false;
  baseUrl: string = "http://dummy.restapiexample.com/api/v1/employees";
  private members = [];

  constructor(public auth: AuthService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.subscription = this.auth.isAuthenticated()
      .subscribe(result => {
        this.loggedIn = result;
      });


    this.getMembers();

  }

  getMembers() {
    this.httpClient.get(this.baseUrl).subscribe((res: any[]) => {
      console.log(res);
      this.members = res;
    });
  }

}
