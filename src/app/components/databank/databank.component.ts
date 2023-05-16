import { Component, ViewChild } from '@angular/core';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-databank',
  templateUrl: './databank.component.html',
  styleUrls: ['./databank.component.scss']
})
export class DatabankComponent {

  public categories: any[];
  public currentlySelectedCategory: any;

  @ViewChild('databankGroup') databankGroup: GroupComponent;

  constructor() {
    this.categories = [
      { label: 'Quest', link: 'quest', image: 'Quest', startID: 466, endID: 488 },
      { label: 'Characters', link: 'characters', image: 'Characters', startID: 0, endID: 90 },
      { label: 'Lore', link: 'lore', image: 'Lore', startID: 393, endID: 431 },
      { label: 'Flora And Fauna', link: 'floraAndFauna', image: 'FloraAndFauna', startID: 303, endID: 324 },
      { label: 'Coruscant', link: 'coruscant', image: 'Coruscant', startID: 91, endID: 103 },
      { label: 'Koboh', link: 'koboh', image: 'Koboh', startID: 104, endID: 302 },
      { label: 'Shattered Moon', link: 'shatteredMoon', image: 'ShatteredMoon', startID: 432, endID: 451 },
      { label: 'Jedah', link: 'jedah', image: 'Jedah', startID: 340, endID: 392 },
      { label: 'Nova Garon', link: 'novaGaron', image: 'NovaGaron', startID: 325, endID: 339 },
      { label: 'Tanalorr', link: 'tanalorr', image: 'Tanalorr', startID: 489, endID: 496 },
      { label: 'Bode\'s Story', link: 'bodesStory', image: 'BodesStory', startID: 452, endID: 465 }
    ];
  }

  public setCurrentlySelectedRoute(newCategory: any) {
    this.currentlySelectedCategory = newCategory;
    if (this.databankGroup) {
      this.databankGroup.setEntry(newCategory.startID);
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
