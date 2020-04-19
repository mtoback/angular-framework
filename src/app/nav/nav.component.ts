import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  /**
   * we need to track the width and height of the window
   * and if it changes, flip from full screen to small screen mode
   * In large screen mode, we have standard nav menus.
   * In small screen mode, we have buttons for the main categories
   * and rows of buttons for each option under that category
   * the context variable tracks the current selected category
   */
  screenHeight;
  screenWidth;
  context = '';
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  constructor(private router: Router) {
    /**
     *  necessary to call this to initialize the size when the component is created
     */
    this.onResize();
  }
  goto(url){
    this.router.navigate([url]);
  }
  ngOnInit(): void {
  }

}
