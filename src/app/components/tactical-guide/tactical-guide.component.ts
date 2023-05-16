import { Component, ViewChild } from '@angular/core';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-tactical-guide',
  templateUrl: './tactical-guide.component.html',
  styleUrls: ['./tactical-guide.component.scss']
})
export class TacticalGuideComponent {

  public categories: any[];
  public currentlySelectedCategory: any;

  @ViewChild('tacticalGuideGroup') tacticalGuideGroup: GroupComponent;

  constructor() {
    this.categories = [
      { label: '', code: 'BodeAkuna', startID: 1, endID: 2 },
      { label: '', code: 'TheGalacticEmpire', startID: 3, endID: 24 },
      { label: '', code: 'BedlamRaiders', startID: 25, endID: 45 },
      { label: '', code: 'HaxionBrood', startID: 46, endID: 53 },
      { label: '', code: 'FloraAndFauna', startID: 54, endID: 70 },
      { label: '', code: 'Droids', startID: 71, endID: 72 }
    ];
  }

  public setCurrentlySelectedRoute(newCategory: any) {
    this.currentlySelectedCategory = newCategory;
    if (this.tacticalGuideGroup) {
      this.tacticalGuideGroup.setEntry(newCategory.startID);
    }
  }

  public findNewCategory(currentID: number) {
    this.categories.forEach((category: any) => {
      if (category.startID === currentID || category.endID === currentID) {
        console.log(category);
        this.currentlySelectedCategory = category;
      }
    });
  }

}
