import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('ContentParagraph') paragraph: ElementRef;
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }


  ngOnInit()  {
    console.log(this.paragraph)
  }

  ngDoCheck(){
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentchecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    console.log(this.header.nativeElement.textContent);   
  }
    
  ngAfterViewChecked(){
    console.log("ngAfterViewChceked called")

  }

  ngOnDestroy(){
    console.log("ngOnDestroy called")
  }
}
