import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../../shared/constants/data';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  id!: number;
  username!: string;
  text!: string;
  path!: string;
  like!: number;
  dislike!: number;
  date!: string;
  time!: string;
  profileImage!: string;

  baseURL = '../../../../assets/images/';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.route.queryParams._value.id;

    this.username = data.childNodes.filter(
      (elem) => elem.id == this.id
    )[0].author;

    this.text = data.childNodes.filter((elem) => elem.id == this.id)[0].text;

    this.path = data.childNodes.filter(
      (elem) => elem.id == this.id
    )[0].imagePath;

    this.like = data.childNodes.filter((elem) => elem.id == this.id)[0].like;

    this.dislike = data.childNodes.filter(
      (elem) => elem.id == this.id
    )[0].dislike;

    this.date = data.childNodes.filter((elem) => elem.id == this.id)[0].date;
    this.time = data.childNodes.filter((elem) => elem.id == this.id)[0].time;
    this.profileImage = data.childNodes.filter(
      (elem) => elem.id == this.id
    )[0].profileImage;
    this.profileImage = this.baseURL + this.profileImage;
    this.path = this.baseURL + this.path;
  }
}
