import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'ant-row';
  @Input() article: Article;

  constructor() {

  }

  voteUp(): boolean {
    this.article.votesUp();
    return false;
  }

  voteDown(): boolean {
    this.article.votesDown();
    return false;
  }

  ngOnInit() {
  }

}
