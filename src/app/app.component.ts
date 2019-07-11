import { Component, OnInit, OnDestroy } from '@angular/core';

// 追加
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  baseUrl: string = "http://dummy.restapiexample.com/api/v1/employees";
  private members = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }


  get_products() {
    this.httpClient.get(this.baseUrl).subscribe((res: any[]) => {
      console.log(res);
      this.members = res;
    });
  }

}