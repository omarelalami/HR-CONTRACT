import { Component, HostBinding, OnInit, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tools.html',
  styleUrls: ['./tools.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolsComponent implements OnInit {
  @HostBinding('class.dark-theme') isDarkMode = false;

  private isBrowser: boolean;

  tools = [
    {
      icon: 'fas fa-book',
      title: 'Law Monitor',
      subtitle: 'HR Legislation Archive',
      description: 'Weekly updated labor law database with compliance information and impact analysis for your HR policies.',
      buttonText: 'Browse Laws',
      buttonIcon: 'fas fa-search',
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Compliance Auditor',
      subtitle: 'Policy Compliance',
      description: 'Automated compliance checks against current regulations with actionable recommendations.',
      buttonText: 'Run Audit',
      buttonIcon: 'fas fa-search',
    },
    {
      icon: 'fas fa-comments',
      title: 'Legal Assistant',
      subtitle: 'HR Policy Guidance',
      description: 'AI-powered chat for instant answers to HR legal questions and policy interpretation.',
      buttonText: 'Start Chat',
      buttonIcon: 'fas fa-comment-dots',
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Contract Builder',
      subtitle: 'Legally-Compliant Docs',
      description: 'Generate employment contracts that automatically incorporate current legal requirements.',
      buttonText: 'Create',
      buttonIcon: 'fas fa-file-download',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.isDarkMode = storedTheme === 'dark';
      } else {
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.updateBodyTheme();
    }
  }

  toggleTheme() {
    if (!this.isBrowser) return;

    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateBodyTheme();
  }

  private updateBodyTheme() {
    if (this.isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }
}
