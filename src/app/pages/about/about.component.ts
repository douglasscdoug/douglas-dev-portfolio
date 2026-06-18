import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  ngOnInit(): void{
  }

  ngAfterViewInit(): void {
  AOS.init({
    once: true,
    duration: 700
  });
}
}
