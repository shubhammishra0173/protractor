import { Given, When, Then, } from "cucumber";
import { calculator } from "../pageobjects/calculator";// two dot here beacuse its is child arent reltnshp with step efination file
import { browser } from "protractor";
import { angularHomepage } from "../pageobjects/angularHomepage";
let calc = new calculator();
let as = new angularHomepage();
// Given('I will navigate calculator site', async()=> {
//     // Write code here that turns the phrase above into concrete actions
//    await  browser.get('http://juliemr.github.io/protractor-demo/')
   
//   });
  

         Given('I will navigate {string} page', async (string)=> {
           // Write code here that turns the phrase above into concrete actions
           if(string == "calc")
           {
            await  browser.get('http://juliemr.github.io/protractor-demo/') 
           }
           else if(string =="Angularjs")
           {
             await browser.get("https://angularjs.org/");
           }
         });
         When('I click on header link', async () =>{
          // Write code here that turns the phrase above into concrete actions
          await as.angularlink.click();
        });
        When('you will navigate to angular page', function () {
          // Write code here that turns the phrase above into concrete actions
        console.log("I am on angular home page")
        });
        Then('You will enter {string} in search page', async (string)=> {
          // Write code here that turns the phrase above into concrete actions
          await as.search.sendKeys(string);
        });
       

  When('I add two numbers {string} and {string}', async(string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    
    await calc.firsteditbox.sendKeys(string);

    await calc.secondEditbox.sendKeys(string2);
  });
  Then('Ouptut should be display {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.click.click();
  
    // syntex for multiple css path in dome
  //    calc.getresult.getText().then(function (string)//for getting a result from row

  //  {
  //     console.log(string);
  //  })
    });


    
  