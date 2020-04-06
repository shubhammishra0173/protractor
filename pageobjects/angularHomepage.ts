import { ElementFinder,element,by } from "protractor";

export class angularHomepage
{
    angularlink : ElementFinder;
    search :ElementFinder;

    constructor()
    {
      this.angularlink = element(by.linkText("angular.io"));
      this.search = element(by.css("input[type='search']"));
    }
}