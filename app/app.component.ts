/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/core';

class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }
}

@Component({
    selector: 'one-article',
    properties: ['article: article']
})
@View({
    template: `
    <article>
        <div class="votes">{{ article.votes }}</div>
        <div class="main">
            <h2><a href="{{ article.link }}">{{ title }}</a></h2>
            <ul>
                <li><a href (click)="voteUp()">upvote</a></li>
                <li><a href (click)="voteDown()">downvote</a></li>
            </ul>
        </div>
    </article>`
})
class RedditArticle {


    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
}
@Component({
    selector: 'reddit',
})
@View({
    directives: [RedditArticle],
    template: `
        <section class="new-link">
            <div class="control-group">
                <div><label for="title">Title:</label></div>
                <div><input name="title" #newtitle></div>
            </div>
            <div class="control-group">
                <div><label for="link">Link:</label></div>
                <div><input name="link" #newlink></div>
            </div>
            <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
        </section>

        <one-article *ngFor='#article of articles' [article]="article"></one-article>
    `
})
export class RedditApp {
    articles: Array<Article>;

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io'),
            new Article('Fullstack', 'http://angular.io'),
        ];
    }
    addArticle(title, link) {
        this.articles.push(new Article(title.value, link.value))
        ;
        title.value = '';
        link.value = '';

        console.log("Adding article with title", title.value, "and link", link.value);
    }
}