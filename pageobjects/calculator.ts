import { ElementFinder,element,by } from "protractor";

export class calculator//expoert keyqword used fir availing a file in whole project

{
    firsteditbox:ElementFinder;
    secondEditbox:ElementFinder;
    click:ElementFinder;
    getresult: ElementFinder;

    constructor()
    {
        this.firsteditbox=element(by.model("first"));
        this.secondEditbox= element(by.model("second"));
        this.click= element(by.id("gobutton"));
    this.getresult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
       // this.getresult= element(by.model("operator")).element(by.css("option:nth-child(4)"));
    }
}