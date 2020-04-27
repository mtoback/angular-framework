import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {
  updateBackend(value){
    localStorage.setItem('backend', this.backend);
  }
  @Input() backend = "python";
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('backend', this.backend);
  }

}
