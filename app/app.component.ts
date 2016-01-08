/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/core';

@Component({
    selector: 'my-app'
})
@View({
    template: `
    <ul>
        <li *ngFor="#name of names">Hello {{name}}</li>
    </ul>
    `
})
export class AppComponent {
    names: Array<string>;

    constructor() {
        this.names = ['Ari','Carlos','Felipe','Nate'];
    }
} //missed this in the tutorial.