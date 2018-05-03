import { Component, OnInit, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() bannerpath: string;
  @Input() title: string;
  @Input() stitle: string;
  @Input() button: boolean;
  constructor() { }

  ngOnInit() {
  }

}
