import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  bannerpath = '../../../assets/images/bg-banner/contact.jpg';
  title = 'Want to say something ?';
  stitle = 'Please let me know what do you think :)';
  constructor() { }

  ngOnInit() {
  }

}
