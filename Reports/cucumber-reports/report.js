$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("001_Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:Varun Subraya Yadapadithaya"
    },
    {
      "line": 2,
      "value": "#San Jose, California."
    },
    {
      "line": 3,
      "value": "#vyadapadithaya@alumni.scu.edu"
    },
    {
      "line": 4,
      "value": "###################################################"
    }
  ],
  "line": 7,
  "name": "Login page scenarios of amazon.com",
  "description": "",
  "id": "login-page-scenarios-of-amazon.com",
  "keyword": "Feature",
  "tags": [
    {
      "line": 6,
      "name": "@LoginPageScenarios"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Login to amazon.com without any username and password",
  "description": "",
  "id": "login-page-scenarios-of-amazon.com;login-to-amazon.com-without-any-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter the URL \"https://www.amazon.com\" and move to signIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Sign in button without entering username and password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the error messages to input username and password",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 17
    }
  ],
  "location": "StepDefination.i_enter_the_URL(String)"
});
formatter.result({
  "duration": 7988797887,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_Sign_in_button_without_entering_username_and_password()"
});
formatter.result({
  "duration": 316883443,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_see_the_error_messages_to_input_username_and_password()"
});
formatter.result({
  "duration": 3917901540,
  "status": "passed"
});
formatter.after({
  "duration": 141110,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login to amazon.com with wrong username and wrong password",
  "description": "",
  "id": "login-page-scenarios-of-amazon.com;login-to-amazon.com-with-wrong-username-and-wrong-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter the URL \"https://www.amazon.com\" and move to signIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter a wrong username:\"testwrongemail1@gmail.com\" and wrong password:\"test123!\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message regarding the wrong user credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 17
    }
  ],
  "location": "StepDefination.i_enter_the_URL(String)"
});
formatter.result({
  "duration": 6815664163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testwrongemail1@gmail.com",
      "offset": 26
    },
    {
      "val": "test123!",
      "offset": 73
    }
  ],
  "location": "StepDefination.i_enter_a_wrong_username_and_wrong_password(String,String)"
});
formatter.result({
  "duration": 457787670,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_SignIn_Button()"
});
formatter.result({
  "duration": 965924351,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_see_the_error_message_regarding_the_wrong_user_credentials()"
});
formatter.result({
  "duration": 3752026042,
  "status": "passed"
});
formatter.after({
  "duration": 32484,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login to amazon.com with valid username and wrong password",
  "description": "",
  "id": "login-page-scenarios-of-amazon.com;login-to-amazon.com-with-valid-username-and-wrong-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@TC003"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I enter the URL \"https://www.amazon.com\" and move to signIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter a correct username:\"testcucumberautomation@gmail.com\" and wrong password:\"test123!\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message regarding the wrong password",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 17
    }
  ],
  "location": "StepDefination.i_enter_the_URL(String)"
});
formatter.result({
  "duration": 6747106771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcucumberautomation@gmail.com",
      "offset": 28
    },
    {
      "val": "test123!",
      "offset": 82
    }
  ],
  "location": "StepDefination.i_enter_a_correct_username_and_wrong_password(String,String)"
});
formatter.result({
  "duration": 520242979,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_SignIn_Button()"
});
formatter.result({
  "duration": 1053336450,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_see_the_error_message_regarding_the_wrong_password()"
});
formatter.result({
  "duration": 3756750988,
  "status": "passed"
});
formatter.after({
  "duration": 32095,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login to amazon.com with valid username and password",
  "description": "",
  "id": "login-page-scenarios-of-amazon.com;login-to-amazon.com-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC004"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I enter the URL \"https://www.amazon.com\" and move to signIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter a correct username:\"testcucumberautomation@gmail.com\" and password:\"Test1234!\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be logged in to amazon.com",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 17
    }
  ],
  "location": "StepDefination.i_enter_the_URL(String)"
});
formatter.result({
  "duration": 6424815578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcucumberautomation@gmail.com",
      "offset": 28
    },
    {
      "val": "Test1234!",
      "offset": 76
    }
  ],
  "location": "StepDefination.i_enter_a_correct_username_and_password(String,String)"
});
formatter.result({
  "duration": 536462319,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_SignIn_Button()"
});
formatter.result({
  "duration": 2189612678,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_be_logged_in_to_amazon_com()"
});
formatter.result({
  "duration": 19303287765,
  "status": "passed"
});
formatter.after({
  "duration": 41577,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Log Out scenario",
  "description": "",
  "id": "login-page-scenarios-of-amazon.com;log-out-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@TC005"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter the URL \"https://www.amazon.com\" and move to signIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I enter a correct username:\"testcucumberautomation@gmail.com\" and password:\"Test1234!\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should be logged in",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on SignOut Link",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should be logged out",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 17
    }
  ],
  "location": "StepDefination.i_enter_the_URL(String)"
});
formatter.result({
  "duration": 6066898417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcucumberautomation@gmail.com",
      "offset": 28
    },
    {
      "val": "Test1234!",
      "offset": 76
    }
  ],
  "location": "StepDefination.i_enter_a_correct_username_and_password(String,String)"
});
formatter.result({
  "duration": 519043804,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_SignIn_Button()"
});
formatter.result({
  "duration": 2190777463,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_be_logged_in()"
});
formatter.result({
  "duration": 3444018531,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_SignOut_Link()"
});
formatter.result({
  "duration": 4050698099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_be_logged_out()"
});
formatter.result({
  "duration": 3802285436,
  "status": "passed"
});
formatter.after({
  "duration": 24355,
  "status": "passed"
});
formatter.uri("002_BuyingFromAmazon.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:Varun Subraya Yadapadithaya"
    },
    {
      "line": 2,
      "value": "#San Jose, California."
    },
    {
      "line": 3,
      "value": "#vyadapadithaya@alumni.scu.edu"
    },
    {
      "line": 4,
      "value": "###################################################"
    }
  ],
  "line": 7,
  "name": "Buying products from Amazon.com",
  "description": "",
  "id": "buying-products-from-amazon.com",
  "keyword": "Feature",
  "tags": [
    {
      "line": 6,
      "name": "@BuyingFromAmazon_Scenarios"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Login to amazon.com with valid username and password",
  "description": "",
  "id": "buying-products-from-amazon.com;login-to-amazon.com-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TC006"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter the URL \"https://www.amazon.com\" and move to signIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter a correct username:\"testcucumberautomation@gmail.com\" and password:\"Test1234!\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 17
    }
  ],
  "location": "StepDefination.i_enter_the_URL(String)"
});
formatter.result({
  "duration": 6577636736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcucumberautomation@gmail.com",
      "offset": 28
    },
    {
      "val": "Test1234!",
      "offset": 76
    }
  ],
  "location": "StepDefination.i_enter_a_correct_username_and_password(String,String)"
});
formatter.result({
  "duration": 577990943,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_SignIn_Button()"
});
formatter.result({
  "duration": 2172847333,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_be_logged_in()"
});
formatter.result({
  "duration": 3506618700,
  "status": "passed"
});
formatter.after({
  "duration": 28903,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Select Departments section \u003e Electronics \u003e Headphones \u003e Select first available headphone and Add to cart",
  "description": "",
  "id": "buying-products-from-amazon.com;select-departments-section-\u003e-electronics-\u003e-headphones-\u003e-select-first-available-headphone-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@TC007"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am in the Home page and i click on Departments section \u003e \"Electronics\" \u003e \"Headphones\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I am on the results page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "select the first available headphone and add to cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 60
    },
    {
      "val": "Headphones",
      "offset": 76
    }
  ],
  "location": "StepDefination.i_am_in_the_Home_page_and_i_click_on_Departments_section(String,String)"
});
formatter.result({
  "duration": 7602730564,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_results_page()"
});
formatter.result({
  "duration": 38965440,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.select_the_first_available_headphone_and_add_to_cart()"
});
formatter.result({
  "duration": 13911250409,
  "status": "passed"
});
formatter.after({
  "duration": 24561,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search for Macbook pro from Search bar and select 2nd available product and add to cart with Qty as 2",
  "description": "",
  "id": "buying-products-from-amazon.com;search-for-macbook-pro-from-search-bar-and-select-2nd-available-product-and-add-to-cart-with-qty-as-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@TC008"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I type \"Macbook Pro\" on the search bar",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I am on the results page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "select the Second available Product and add to cart with Quantity \"2\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook Pro",
      "offset": 8
    }
  ],
  "location": "StepDefination.i_type_on_the_search_bar(String)"
});
formatter.result({
  "duration": 5698746961,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_results_page()"
});
formatter.result({
  "duration": 34817784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 67
    }
  ],
  "location": "StepDefination.select_the_Second_available_Product_and_add_to_cart_with_Quantity(String)"
});
formatter.result({
  "duration": 29333584280,
  "status": "passed"
});
formatter.after({
  "duration": 30375,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Select cart from home and remove the earlier added headphones",
  "description": "",
  "id": "buying-products-from-amazon.com;select-cart-from-home-and-remove-the-earlier-added-headphones",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TC009"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on Shopping Cart",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I am on the Shopping Cart page",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Remove the headphones from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 4061989036,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_Shopping_Cart_page()"
});
formatter.result({
  "duration": 2014391980,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.remove_the_headphones_from_the_cart()"
});
formatter.result({
  "duration": 3135184901,
  "status": "passed"
});
formatter.after({
  "duration": 25813,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Reduce the quantity of the macbook pro product to 1 and proceed to checkout",
  "description": "",
  "id": "buying-products-from-amazon.com;reduce-the-quantity-of-the-macbook-pro-product-to-1-and-proceed-to-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@TC010"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on the Shopping Cart page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I reduce the Macbook pro Quantity to \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "i Should be on the checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_am_on_the_Shopping_Cart_page()"
});
formatter.result({
  "duration": 2008378114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "StepDefination.i_reduce_the_Macbook_pro_Quantity_to(String)"
});
formatter.result({
  "duration": 2120433718,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 7569030109,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_Should_be_on_the_checkout_page()"
});
formatter.result({
  "duration": 31511014290,
  "status": "passed"
});
formatter.after({
  "duration": 27153,
  "status": "passed"
});
formatter.uri("003_ParameterizedSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author:Varun Subraya Yadapadithaya"
    },
    {
      "line": 2,
      "value": "#San Jose, California."
    },
    {
      "line": 3,
      "value": "#vyadapadithaya@alumni.scu.edu"
    },
    {
      "line": 4,
      "value": "###################################################"
    }
  ],
  "line": 6,
  "name": "Data drive/parameterize to search for multiple different products via search bar",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@ParameterizeSearch"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Login to amazon.com with valid username and password",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;login-to-amazon.com-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@TC011"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter the URL \"https://www.amazon.com\" and move to signIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter a correct username:\"testcucumberautomation@gmail.com\" and password:\"Test1234!\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com",
      "offset": 17
    }
  ],
  "location": "StepDefination.i_enter_the_URL(String)"
});
formatter.result({
  "duration": 6215232108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcucumberautomation@gmail.com",
      "offset": 28
    },
    {
      "val": "Test1234!",
      "offset": 76
    }
  ],
  "location": "StepDefination.i_enter_a_correct_username_and_password(String,String)"
});
formatter.result({
  "duration": 533205957,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_SignIn_Button()"
});
formatter.result({
  "duration": 2132411914,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_be_logged_in()"
});
formatter.result({
  "duration": 3480534122,
  "status": "passed"
});
formatter.after({
  "duration": 28662,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Data drive/parameterize to search for multiple different products via search bar",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC012"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I type \"\u003cSearchTerm\u003e\" on the search bar",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I am on the results page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select the search result number \"\u003cNum\u003e\" Product and add to cart with Quantity \"\u003cQty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Shopping Cart",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I am on the Shopping Cart page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;",
  "rows": [
    {
      "cells": [
        "SearchTerm",
        "Num",
        "Qty"
      ],
      "line": 24,
      "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;;1"
    },
    {
      "cells": [
        "HeadPhones",
        "1",
        "1"
      ],
      "line": 25,
      "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;;2"
    },
    {
      "cells": [
        "MacBook Air",
        "1",
        "1"
      ],
      "line": 26,
      "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;;3"
    },
    {
      "cells": [
        "Macbook Pro",
        "3",
        "2"
      ],
      "line": 27,
      "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Data drive/parameterize to search for multiple different products via search bar",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC012"
    },
    {
      "line": 5,
      "name": "@ParameterizeSearch"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I type \"HeadPhones\" on the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I am on the results page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select the search result number \"1\" Product and add to cart with Quantity \"1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Shopping Cart",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I am on the Shopping Cart page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HeadPhones",
      "offset": 8
    }
  ],
  "location": "StepDefination.i_type_on_the_search_bar(String)"
});
formatter.result({
  "duration": 5020717214,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_results_page()"
});
formatter.result({
  "duration": 44877346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "1",
      "offset": 75
    }
  ],
  "location": "StepDefination.select_the_number_search_result_Product_and_add_to_cart_with_Quantity(String,String)"
});
formatter.result({
  "duration": 45231247054,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 3938111187,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_Shopping_Cart_page()"
});
formatter.result({
  "duration": 2013786887,
  "status": "passed"
});
formatter.after({
  "duration": 27244,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Data drive/parameterize to search for multiple different products via search bar",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC012"
    },
    {
      "line": 5,
      "name": "@ParameterizeSearch"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I type \"MacBook Air\" on the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I am on the results page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select the search result number \"1\" Product and add to cart with Quantity \"1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Shopping Cart",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I am on the Shopping Cart page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook Air",
      "offset": 8
    }
  ],
  "location": "StepDefination.i_type_on_the_search_bar(String)"
});
formatter.result({
  "duration": 4376429206,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_results_page()"
});
formatter.result({
  "duration": 39929980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "1",
      "offset": 75
    }
  ],
  "location": "StepDefination.select_the_number_search_result_Product_and_add_to_cart_with_Quantity(String,String)"
});
formatter.result({
  "duration": 31614690811,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 3523944738,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_Shopping_Cart_page()"
});
formatter.result({
  "duration": 2013470417,
  "status": "passed"
});
formatter.after({
  "duration": 25788,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Data drive/parameterize to search for multiple different products via search bar",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC012"
    },
    {
      "line": 5,
      "name": "@ParameterizeSearch"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I type \"Macbook Pro\" on the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I am on the results page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select the search result number \"3\" Product and add to cart with Quantity \"2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Shopping Cart",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I am on the Shopping Cart page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook Pro",
      "offset": 8
    }
  ],
  "location": "StepDefination.i_type_on_the_search_bar(String)"
});
formatter.result({
  "duration": 4654110407,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_results_page()"
});
formatter.result({
  "duration": 36201355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 33
    },
    {
      "val": "2",
      "offset": 75
    }
  ],
  "location": "StepDefination.select_the_number_search_result_Product_and_add_to_cart_with_Quantity(String,String)"
});
formatter.result({
  "duration": 31305872619,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_click_on_Shopping_Cart()"
});
formatter.result({
  "duration": 4281261793,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_the_Shopping_Cart_page()"
});
formatter.result({
  "duration": 2015007809,
  "status": "passed"
});
formatter.after({
  "duration": 22826,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Proceed to checkout scenario",
  "description": "",
  "id": "data-drive/parameterize-to-search-for-multiple-different-products-via-search-bar;proceed-to-checkout-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC013"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on the Shopping Cart page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i Should be on the checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_am_on_the_Shopping_Cart_page()"
});
formatter.result({
  "duration": 2010727300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 7667556165,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_Should_be_on_the_checkout_page()"
});
formatter.result({
  "duration": 35553805161,
  "status": "passed"
});
formatter.after({
  "duration": 26780,
  "status": "passed"
});
});