import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({ selector: 'app-home', standalone: true, templateUrl: './home.html' })
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  searchTerm = '';
  message = '';

  ngOnInit() { console.log('Home initialized'); }
  onEnrollClick() { this.message = 'Enrollment opened!'; }
  ngOnDestroy() { console.log('Home destroyed'); }
}