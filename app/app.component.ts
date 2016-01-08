import {Component, View} from 'angular2/core';

@Component({
    selector: 'my-app'
})
@View({
    template: `<div>Hello {{ name }}</div>`
})
export class AppComponent {
    name: string;
    constructor() {
        this.name = 'Felipe';
    }
} //missed this in the tutorial.