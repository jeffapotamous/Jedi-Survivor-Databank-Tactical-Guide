import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public nextEntryID: number;

  constructor(private router: Router) { }

  public routeToNewEntry() {
    if (this.nextEntryID !== undefined && this.nextEntryID !== null) {
      this.router.navigate(['/entry/' + this.nextEntryID]);
    }
  }

}
