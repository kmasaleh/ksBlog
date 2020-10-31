import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[FBhRef]'
})
export class FacebookHRefDirective {
    @Input() FBhRef :string;
  constructor(el:ElementRef) { 
    el.nativeElement.setAttribute('data-hrref','')
  }
}