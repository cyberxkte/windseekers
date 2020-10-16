import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Windseekers';

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if ((e instanceof NavigationEnd)) {
        if (e.urlAfterRedirects.replace('/', '') == '')
          this.router.navigate(['/home']);
      }
    });
  }
}
