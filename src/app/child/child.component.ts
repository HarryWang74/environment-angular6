import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() config;

  constructor() { }

  ngOnInit() {
  }

  /*
    不使用 OnPush 在 parent 里 click btn 会触发 angular check 所有 component,
    child 里的 runChangeDetection 会被运行两次 2次
    check parnet 时触发一次
    check child 时再触发一次
  */
  runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  click() {

  }
}
