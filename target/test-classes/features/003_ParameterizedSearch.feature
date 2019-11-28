#Author:Varun Subraya Yadapadithaya
#San Jose, California.
#vyadapadithaya@alumni.scu.edu
###################################################
@ParameterizeSearch
Feature: Data drive/parameterize to search for multiple different products via search bar

@TC011
  Scenario: Login to amazon.com with valid username and password
    Given I enter the URL "https://www.amazon.com" and move to signIn page
    When I enter a correct username:"testcucumberautomation@gmail.com" and password:"Test1234!"
    And I click on SignIn Button
    Then I should be logged in

  @TC012
  Scenario Outline: Data drive/parameterize to search for multiple different products via search bar
    Given I type "<SearchTerm>" on the search bar
    When I am on the results page
    And select the search result number "<Num>" Product and add to cart with Quantity "<Qty>"
    When I click on Shopping Cart
    Then I am on the Shopping Cart page

    Examples: 
      | SearchTerm	  |Num|Qty|
      |	HeadPhones		|	1	|	1	|
      | MacBook Air		| 1	|	1	|
      | Macbook Pro		| 3 |	2	| 
       
      
 @TC013
  Scenario: Proceed to checkout scenario
    Given I am on the Shopping Cart page
    And Click on proceed to checkout
    Then i Should be on the checkout page
