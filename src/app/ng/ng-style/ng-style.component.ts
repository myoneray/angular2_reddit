import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // 点击按钮 实现输入框改变字体大小背景颜色
  color: string;
  fontSize: number;
  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }

}
