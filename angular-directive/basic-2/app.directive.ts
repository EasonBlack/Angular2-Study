import {Directive, ElementRef, HostListener, Renderer, Input} from '@angular/core';

@Directive({
    selector: '[myColor]'
})
export class MyColorDirective {
    constructor(private el: ElementRef, private renderer: Renderer) { }

    @Input() hoverColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        console.log(this.hoverColor);
        this.highlight(this.hoverColor || 'yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}