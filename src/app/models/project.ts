export class Project {
  name: string;
  webURL: string;
  gitURL: string;
  imgURL: string;


  constructor(name: string, webURL: string, gitURL: string, imgURL: string) {
    this.name = name;
    this.webURL = webURL;
    this.gitURL = gitURL;
    this.imgURL = imgURL;
  }
}
