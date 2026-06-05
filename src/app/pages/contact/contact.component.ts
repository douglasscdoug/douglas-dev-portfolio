import { Component, OnInit } from '@angular/core';

import AOS from 'aos';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
}
