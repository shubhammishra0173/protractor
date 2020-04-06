
import {After,Before, Status} from  "cucumber";
Before(function () {
  // This hook will be executed before all scenarios
});
import { format } from "path";
import { browser } from "protractor";

Before({tags: "@calculatorTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo
browser.manage().window().maximize();
});
After({tags: "@calculatorTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo
  console.log("Test has been completed");
  });
  
Before({tags: "@AngularTesting"}, function () {
  console.log("I need to execute first")
});
After( async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
console.log("Test has been completed");
if(scenario.result.status=== Status.FAILED)
{
  const screenshot= await browser.takeScreenshot();
  this.attach(screenshot,"image/png")
}
});
