import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.scss'],
})
export class FeaturedContentComponent implements OnInit {
  public data = [
    { id: '01', guide_name: 'TEEMO SEJUANI - LEGENDS OF RUNETERRA META SNAPSHOT', regions: ['piltoverzaun', 'freljord', 'piltoverzaun'] },
    { id: '02', guide_name: 'TARGON EZREAL - LEGENDS OF RUNETERRA META SNAPSHOT', regions: ['ionia', 'piltoverzaun'] },
    { id: '03', guide_name: 'TARGON TEEMO - LEGENDS OF RUNETERRA META SNAPSHOT', regions: ['freljord'] },
    { id: '04', guide_name: 'EZREAL SEJUANI - LEGENDS OF RUNETERRA META SNAPSHOT', regions: ['ionia'] },
  ];
  public isGridView = false;
  public filteredata = [];
  public columnTitles: Array<{
    property: string;
    displayName: string;
    width?: string;
  }> = [];
  public name = "hola";
  constructor() {}

  ngOnInit(): void {
    this.assignCopy()
  }

  getSelectedItems(e) {
    console.log(e);
  }
  assignCopy(){
    this.filteredata = Object.assign([], this.data);
 }
 filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.filteredata = Object.assign([], this.data).filter(
       item => item.guide_name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }
 ;//when you fetch collection from server.
}
