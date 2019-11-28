#Author:Varun Subraya Yadapadithaya
#San Jose, California.
#vyadapadithaya@alumni.scu.edu
###################################################

@BuyingFromAmazon_Scenarios
Feature: Buying products from Amazon.com

@TC006
  Scenario: Login to amazon.com with valid username and password
    Given I enter the URL "https://www.amazon.com" and move to signIn page
    When I enter a correct username:"testcucumberautomation@gmail.com" and password:"Test1234!"
    And I click on SignIn Button
    Then I should be logged in
    
@TC007
  Scenario: Select Departments section > Electronics > Headphones > Select first available headphone and Add to cart
    Given I am in the Home page and i click on Departments section > "Electronics" > "Headphones"
    When I am on the results page
    Then select the first available headphone and add to cart
    
@TC008
  Scenario: Search for Macbook pro from Search bar and select 2nd available product and add to cart with Qty as 2
    Given I type "Macbook Pro" on the search bar
    When I am on the results page
    Then select the Second available Product and add to cart with Quantity "2"
    
 @TC009
  Scenario: Select cart from home and remove the earlier added headphones
    Given I click on Shopping Cart
    When I am on the Shopping Cart page
    Then Remove the headphones from the cart
    
@TC010
  Scenario: Reduce the quantity of the macbook pro product to 1 and proceed to checkout
    Given I am on the Shopping Cart page
    When I reduce the Macbook pro Quantity to "1"
    And Click on proceed to checkout
    Then i Should be on the checkout page