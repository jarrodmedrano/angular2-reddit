/// <reference path="../typings/angular2/angular2.d.ts" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RedditApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp() {
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article with title", title.value, "and link", link.value);
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit'
                    }),
                    core_1.View({
                        template: "\n        <section class=\"new-link\">\n            <div class=\"control-group\">\n                <div><label for=\"title\">Title:</label></div>\n                <div><input name=\"title\" #newtitle></div>\n            </div>\n            <div class=\"control-group\">\n                <div><label for=\"link\">Link:</label></div>\n                <div><input name=\"link\" #newlink></div>\n            </div>\n            <button (click)=\"addArticle(newtitle, newlink)\">Submit Link</button>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            })();
            exports_1("RedditApp", RedditApp);
        }
    }
});
//# sourceMappingURL=app.component.js.map