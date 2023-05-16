import { Component, Input, OnInit } from '@angular/core';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  // @Input() categoryName: string;
  // @Input() group: GroupComponent[];

  constructor() { }

  ngOnInit(): void {
  }

}
