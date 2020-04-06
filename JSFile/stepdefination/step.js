"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageobjects/calculator"); // two dot here beacuse its is child arent reltnshp with step efination file
const protractor_1 = require("protractor");
const angularHomepage_1 = require("../pageobjects/angularHomepage");
let calc = new calculator_1.calculator();
let as = new angularHomepage_1.angularHomepage();
// Given('I will navigate calculator site', async()=> {
//     // Write code here that turns the phrase above into concrete actions
//    await  browser.get('http://juliemr.github.io/protractor-demo/')
//   });
cucumber_1.Given('I will navigate {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "Angularjs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I click on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield as.angularlink.click();
}));
cucumber_1.When('you will navigate to angular page', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("I am on angular home page");
});
cucumber_1.Then('You will enter {string} in search page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield as.search.sendKeys(string);
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firsteditbox.sendKeys(string);
    yield calc.secondEditbox.sendKeys(string2);
}));
cucumber_1.Then('Ouptut should be display {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.click.click();
    // syntex for multiple css path in dome
    //    calc.getresult.getText().then(function (string)//for getting a result from row
    //  {
    //     console.log(string);
    //  })
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbmF0aW9uL3N0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBOEM7QUFDOUMsMERBQXVELENBQUEsNEVBQTRFO0FBQ25JLDJDQUFxQztBQUNyQyxvRUFBaUU7QUFDakUsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDNUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDL0IsdURBQXVEO0FBQ3ZELDJFQUEyRTtBQUMzRSxxRUFBcUU7QUFFckUsUUFBUTtBQUdDLGdCQUFLLENBQUMsK0JBQStCLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUNyRCxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUksTUFBTSxFQUNuQjtRQUNDLE1BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtLQUMvRDtTQUNJLElBQUcsTUFBTSxJQUFHLFdBQVcsRUFDNUI7UUFDRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDN0M7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQVMsRUFBRTtJQUN6QyxvRUFBb0U7SUFDcEUsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7SUFDeEMsb0VBQW9FO0lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzdELG9FQUFvRTtJQUNwRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHVCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDdEUsb0VBQW9FO0lBRXBFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDeEQsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV6Qix1Q0FBdUM7SUFDekMsb0ZBQW9GO0lBRXBGLEtBQUs7SUFDTCwyQkFBMkI7SUFDM0IsTUFBTTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==