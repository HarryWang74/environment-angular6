import { Component, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements  AfterViewChecked, AfterViewInit  {
  private prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildComponent) viewChild: ChildComponent;
  
  constructor() { }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit');
    this.doSomething();
    debugger
  }

  ngAfterViewChecked() {
    debugger;
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      console.log('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      console.log('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    console.log("prevHero", this.prevHero);
    console.log("this.viewChild.hero", this.viewChild.hero);
  }

}
