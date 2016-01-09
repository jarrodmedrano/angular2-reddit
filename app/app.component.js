/// <reference path="../typings/angular2/angular2.d.ts" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Article, RedditArticle, RedditApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link) {
                    this.title = title;
                    this.link = link;
                    this.votes = 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                return Article;
            })();
            RedditArticle = (function () {
                function RedditArticle() {
                }
                RedditArticle.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                RedditArticle.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                RedditArticle = __decorate([
                    core_1.Component({
                        selector: 'one-article',
                        properties: ['article: article']
                    }),
                    core_1.View({
                        template: "\n    <article>\n        <div class=\"votes\">{{ article.votes }}</div>\n        <div class=\"main\">\n            <h2><a href=\"{{ article.link }}\">{{ title }}</a></h2>\n            <ul>\n                <li><a href (click)=\"voteUp()\">upvote</a></li>\n                <li><a href (click)=\"voteDown()\">downvote</a></li>\n            </ul>\n        </div>\n    </article>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditArticle);
                return RedditArticle;
            })();
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new Article('Angular 2', 'http://angular.io'),
                        new Article('Fullstack', 'http://angular.io'),
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    this.articles.push(new Article(title.value, link.value));
                    title.value = '';
                    link.value = '';
                    console.log("Adding article with title", title.value, "and link", link.value);
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                    }),
                    core_1.View({
                        directives: [RedditArticle],
                        template: "\n        <section class=\"new-link\">\n            <div class=\"control-group\">\n                <div><label for=\"title\">Title:</label></div>\n                <div><input name=\"title\" #newtitle></div>\n            </div>\n            <div class=\"control-group\">\n                <div><label for=\"link\">Link:</label></div>\n                <div><input name=\"link\" #newlink></div>\n            </div>\n            <button (click)=\"addArticle(newtitle, newlink)\">Submit Link</button>\n        </section>\n\n        <one-article *ngFor='#article of articles' [article]=\"article\"></one-article>\n    "
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