import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  @Input() startID: number;
  @Input() endID: number;
  @Input() path: string;
  public entryIDs: number[];

  @Output() outOfRangeEmitter: EventEmitter<number>;

  public currentlySelectedID: number;

  constructor() {
    this.outOfRangeEmitter = new EventEmitter<number>();
  }

  ngOnInit() {
    this.entryIDs = [];
    for (let i = this.startID; i < this.endID; i++) {
      this.entryIDs.push(i);
    }
    this.currentlySelectedID = this.startID;
  }

  public setEntry(newID: number) {
    this.currentlySelectedID = newID;
  }

  public next() {
    this.currentlySelectedID++;
    if (this.currentlySelectedID > this.endID) {
      this.outOfRangeEmitter.next(this.currentlySelectedID);
    }
  }

  public back() {
    this.currentlySelectedID--;
    if (this.currentlySelectedID < this.startID) {
      this.outOfRangeEmitter.next(this.currentlySelectedID);
    }
  }
}
