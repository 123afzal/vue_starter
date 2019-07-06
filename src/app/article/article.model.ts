export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  votesUp(): void {
    this.votes += 1;
  }

  votesDown(): void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts 21 // the domain from a URL, which we'll explain shortly 22
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar 25
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar 27
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
