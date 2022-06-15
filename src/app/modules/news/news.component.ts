import { Component, OnInit } from '@angular/core';
import { data } from '../../shared/constants/data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  datas!: Array<any>
  orderedDatas!: Array<any>

  currentTab = 'pop';
  constructor() {}

  ngOnInit(): void {
    this.datas = data.childNodes;
    this.orderedDatas = data.childNodes.slice();

    this.datas?.forEach((element) => {
      element.date = Date.parse(element.date);
    });
  }

  clickTabs() {
    if (this.currentTab == 'pop') {
      this.currentTab = 'rec';
      this.orderDatas();
    } else {
      this.currentTab = 'pop';
      this.datas = data.childNodes;
    }
  }

  orderDatas() {
    // @ts-ignore
    this.orderedDatas.sort(
      (objA, objB) => Number(objB.date) - Number(objA.date)
    );

    this.datas = this.orderedDatas;
  }
}
