import {
  Component, Input, EventEmitter, Output, OnInit,AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges, DoCheck
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  @Input('img') PostImage = ''
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log("constructor() called", this.PostImage)
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.PostImage)
  }
  ngOnChanges() {
    console.log('OnChanges() called', this.PostImage)
  }

  ngDoCheck() {
    console.log('DoCheck() called', this.PostImage)
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked() called', this.PostImage)
  }
  ngAfterContentInit() {
    console.log('AfterContentInit() called', this.PostImage)
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked() called', this.PostImage)
  }
  ngAfterViewInit() {
    console.log('DoCheck() called', this.PostImage)
  }
}


