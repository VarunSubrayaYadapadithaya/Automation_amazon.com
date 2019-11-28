#Author:Varun Subraya Yadapadithaya
#San Jose, California.
#vyadapadithaya@alumni.scu.edu
###################################################

@LoginPageScenarios
Feature: Login page scenarios of amazon.com

  @TC001
  Scenario: Login to amazon.com without any username and password 
    Given I enter the URL "https://www.amazon.com" and move to signIn page
    When I click on Sign in button without entering username and password
    Then I should see the error messages to input username and password
    
  @TC002
  Scenario: Login to amazon.com with wrong username and wrong password
    Given I enter the URL "https://www.amazon.com" and move to signIn page
    When I enter a wrong username:"testwrongemail1@gmail.com" and wrong password:"test123!"
    And I click on SignIn Button
    Then I should see the error message regarding the wrong user credentials
    
  @TC003
  Scenario: Login to amazon.com with valid username and wrong password
    Given I enter the URL "https://www.amazon.com" and move to signIn page
    When I enter a correct username:"testcucumberautomation@gmail.com" and wrong password:"test123!"
    And I click on SignIn Button
    Then I should see the error message regarding the wrong password
    
  @TC004
  Scenario: Login to amazon.com with valid username and password
    Given I enter the URL "https://www.amazon.com" and move to signIn page
    When I enter a correct username:"testcucumberautomation@gmail.com" and password:"Test1234!"
    And I click on SignIn Button
    Then I should be logged in to amazon.com
    
  @TC005
  Scenario: Log Out scenario
    Given I enter the URL "https://www.amazon.com" and move to signIn page
    When I enter a correct username:"testcucumberautomation@gmail.com" and password:"Test1234!"
    And I click on SignIn Button
    And I should be logged in
    When I click on SignOut Link
    Then I should be logged out
    
 
