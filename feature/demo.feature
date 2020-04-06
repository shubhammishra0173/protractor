Feature: I am going to validate  calculator functionalities
@calculatorTesting
Scenario: Calcualator add functionlaity testing
Given I will navigate "calc" page
When  I add two numbers "3" and "5"
Then Ouptut should be display "8"


@calculatorTesting
Scenario: Calcualator add functionlaity testing
Given I will navigate "calc" page
When  I add two numbers "2" and "7"
Then Ouptut should be display "9"
@AngularTesting
Scenario Outline:  Angular home page validation
 Given I will navigate "Angularjs" page
  When  I click on header link
 And you will navigate to angular page
 Then You will enter "<key>" in search page

 Examples:
 | key |  
 | Hey | 
 |Hello| 
 

 Scenario: Calcualator add functionlaity testing
 Given I will navigate "Angularjs" page
  When  I click on header link
 And you will navigate to angular page
 Then You will enter "hay" in search page