import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter Integration';

  constructor(private _http: Http) {}
  getAuth() {
    console.log('authenticate !!!');
    let headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this._http.post('http://localhost:3000/authorize', { headers: headers }).subscribe((res) => {
      console.log(res);
    });
  }
}
