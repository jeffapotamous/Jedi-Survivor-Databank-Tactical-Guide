import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() entryID!: number;
  @Input() path: string;
  public routeFromHome: boolean;

  public nextEntryID: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.routeFromHome = false;
  }

  ngOnInit(): void {
    const entryID = this.activatedRoute.snapshot.paramMap.get('id');
    if (entryID) {
      this.entryID = parseInt(entryID);
      this.nextEntryID = this.entryID;
      this.path = 'Databank';
      this.routeFromHome = true;
    }
  }

  public routeToNewEntry() {
    if (this.nextEntryID !== undefined && this.nextEntryID !== null) {
      this.entryID = this.nextEntryID;
    }
  }

}
