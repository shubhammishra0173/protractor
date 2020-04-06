import { browser } from "protractor"
import { element, by } from "protractor";
import { calculator } from "./pageobjects/calculator";
import { angularHomepage } from "./pageobjects/angularHomepage";


describe('Chain Locator Demo', () => {


	it('basic program', async () => { //async function(()=>)

		//write your code
		let calc = new calculator

		browser.get('http://juliemr.github.io/protractor-demo/')

		// repeater , Chain locator and css for identical tags
		await calc.firsteditbox.sendKeys("3");

		await calc.secondEditbox.sendKeys("5");

		await calc.click.click();
		// syntex for multiple css path in dome
		calc.getresult.getText().then(function (text)//for getting a result from row

		{
			console.log(text);
		});
		element(by.model("operator")).element(by.css("option:nth-child(4)")).getText().then(function (text)//for getting a result from row

		{
			console.log(text);
		});
	})
	it('Angular home page title validation', async () => {

		let as = new angularHomepage

		await browser.get("https://angularjs.org/");

		await as.angularlink.click();
		await as.search.sendKeys("hello");
	})

}
)