import { Component, HostListener } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [CommonModule,NgFor],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  features = [
    { icon: 'fas fa-file-contract', title: 'Contract Management', desc: 'Create, store, and manage all your employment contracts in one secure, accessible location.' },
    { icon: 'fas fa-balance-scale', title: 'Legal Compliance', desc: 'Stay up-to-date with changing regulations and ensure full compliance with automated alerts.' },
    { icon: 'fas fa-users', title: 'Employee Management', desc: 'Centralized employee records, performance tracking, and benefits administration.' },
  ];
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 10) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }
}
