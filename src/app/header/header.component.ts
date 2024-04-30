import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() mode: 'dark' | 'light' | any;
  @Output() toggleColorMode: EventEmitter<void> = new EventEmitter<void>();

  isSidebarOpen = false;

  toggleDrawer() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
