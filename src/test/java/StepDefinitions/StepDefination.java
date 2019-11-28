package StepDefinitions;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucumber.listener.Reporter;
import com.google.common.io.Files;

import PageObjects.Cart;
import PageObjects.HomePage;
import PageObjects.LoginPage;
import PageObjects.SearchResultPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefination {
public static WebDriver driver;
LoginPage loginpage;
HomePage homepage;
SearchResultPage searchpage;
Cart cart;
	
@Given("^I enter the URL \"([^\"]*)\" and move to signIn page$")
	public void i_enter_the_URL(String arg1){
		String path = System.getProperty("user.dir");
		String os = System.getProperty("os.name");
		System.out.println(path);
		System.out.println(os);
		if(os.contains("Windows")) {			//Run on Windows Machine
			System.setProperty("webdriver.chrome.driver", path+"/src/main/resources/Drivers/chromedriver.exe");
		}
		if(os.contains("Mac")){				//Run on Apple Machine 
			System.setProperty("webdriver.chrome.driver", path+"/src/main/resources/Drivers/chromedriver");
		}
		
		  driver = new ChromeDriver();
		  driver.manage().window().maximize();
		  driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		  driver.navigate().to(arg1);
		  loginpage = new LoginPage(driver);
		  loginpage.HoverOverSignIn(driver);
		  loginpage.HomepageClickSignIn(driver);
		 boolean display = loginpage.LoginPage_Displayed();
		 assertEquals(true,display);
	}

	@When("^I click on Sign in button without entering username and password$")
	public void i_click_on_Sign_in_button_without_entering_username_and_password(){
		loginpage = new LoginPage(driver);
	    loginpage.LoginPageClickSignIn(driver);
	}

	@Then("^I should see the error messages to input username and password$")
	public void i_should_see_the_error_messages_to_input_username_and_password(){
		loginpage = new LoginPage(driver);
		boolean enterUsernameError = loginpage.UsrnameError_Displayed();
		 assertEquals(true,enterUsernameError);
		boolean enterPassError = loginpage.PasswordError_Displayed();
		assertEquals(true,enterPassError);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		    driver.quit(); 
	    
	}
	
	@And("^I click on SignIn Button$")
	public void i_click_on_SignIn_Button(){
		loginpage = new LoginPage(driver);
		loginpage.LoginPageClickSignIn(driver); 
	}
	
	@When("^I enter a wrong username:\"([^\"]*)\" and wrong password:\"([^\"]*)\"$")
	public void i_enter_a_wrong_username_and_wrong_password(String arg1, String arg2){
		loginpage = new LoginPage(driver);
		loginpage.inputEmail_SendKeys(driver, arg1);
		loginpage.inputPassword_SendKeys(driver, arg2);
		
	}

	@Then("^I should see the error message regarding the wrong user credentials$")
	public void i_should_see_the_error_message_regarding_the_wrong_user_credentials(){
		loginpage = new LoginPage(driver);
		boolean NoAccountError = loginpage.ErrorNoAccount_Displayed();
		assertEquals(true,NoAccountError);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		  driver.quit(); 
	}

	@When("^I enter a correct username:\"([^\"]*)\" and wrong password:\"([^\"]*)\"$")
	public void i_enter_a_correct_username_and_wrong_password(String arg1, String arg2){
		loginpage = new LoginPage(driver);
		loginpage.inputEmail_SendKeys(driver, arg1);
		loginpage.inputPassword_SendKeys(driver, arg2);
	    
	}

	@Then("^I should see the error message regarding the wrong password$")
	public void i_should_see_the_error_message_regarding_the_wrong_password(){
		loginpage = new LoginPage(driver);
		boolean WrongPassError = loginpage.wrongPasswordError_Displayed();
		assertEquals(true,WrongPassError);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		 driver.quit(); 
	}

	@When("^I enter a correct username:\"([^\"]*)\" and password:\"([^\"]*)\"$")
	public void i_enter_a_correct_username_and_password(String arg1, String arg2){
		loginpage = new LoginPage(driver);
		loginpage.inputEmail_SendKeys(driver, arg1);
		loginpage.inputPassword_SendKeys(driver, arg2);
	}

	@Then("^I should be logged in to amazon\\.com$")
	public void i_should_be_logged_in_to_amazon_com(){
		loginpage = new LoginPage(driver);
		boolean successLogin = loginpage.LoginSuccess_Displayed();
		assertEquals(true,successLogin);
		
		boolean HelloSignNotDisp = loginpage.HelloSignIn_Displayed();
		assertEquals(false,HelloSignNotDisp);
		
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		  driver.quit(); 
	}
	
	@Then("^I should be logged in$")
	public void i_should_be_logged_in(){
		loginpage = new LoginPage(driver);
		boolean successLogin = loginpage.LoginSuccess_Displayed();
		assertEquals(true,successLogin);
		
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	}
	@When("^I click on SignOut Link$")
	public void i_click_on_SignOut_Link(){
		loginpage = new LoginPage(driver);
		homepage = new HomePage(driver);
		loginpage.ClickUserAccountMenu(driver);
		loginpage.HoverOverUserAccountMenu(driver);
		homepage.HomepageClickSignOut(driver);
		
	}

	@Then("^I should be logged out$")
	public void i_should_be_logged_out(){
		loginpage = new LoginPage(driver);
		boolean display = loginpage.LoginPage_Displayed();
		 assertEquals(true,display); 						//SignIn Page is displayed when logged Out
		 
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		  driver.quit(); 
	}
	
	@Given("^I am in the Home page and i click on Departments section > \"([^\"]*)\" > \"([^\"]*)\"$")
	public void i_am_in_the_Home_page_and_i_click_on_Departments_section(String dept, String item){
		System.out.println(dept+" "+item);
	   homepage = new HomePage(driver);
	   homepage.SelectDepartment_Search(driver, dept);
	   try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	   homepage.SearchBox_SearchProduct(driver, item);
	   try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}


	@When("^I am on the results page$")
	public void i_am_on_the_results_page(){
		searchpage = new SearchResultPage(driver);
		boolean display = searchpage.SearchResultDisplayed(driver);
		 assertEquals(true,display); 	
	}

	@Then("^select the first available headphone and add to cart$")
	public void select_the_first_available_headphone_and_add_to_cart(){
		searchpage = new SearchResultPage(driver);
		searchpage.SelectSearchResult(driver, "1");
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		searchpage.click_AddToCart(driver);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		boolean display = searchpage.AddtoOrderPopupDisplayed(driver);
		if(display== true) {
			searchpage.click_Nothankyou(driver);
		}
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		 
		driver.navigate().refresh();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@Given("^I type \"([^\"]*)\" on the search bar$")
	public void i_type_on_the_search_bar(String SearchTerm){
		System.out.println(SearchTerm);
	  homepage = new HomePage(driver);
	  homepage.SelectDepartment_Search(driver, "All Departments");
	   homepage.SearchBox_SearchProduct(driver, SearchTerm);
	   System.out.println("SearchTerm");
	   try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}   
	}

	@Then("^select the Second available Product and add to cart with Quantity \"([^\"]*)\"$")
	public void select_the_Second_available_Product_and_add_to_cart_with_Quantity(String Quantity){
		searchpage = new SearchResultPage(driver);
		searchpage.SelectSearchResult(driver, "2");
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} 
		boolean disp = searchpage.SelectQty_Displayed(driver);
		if(disp==true) {
			searchpage.SelectQuantity(driver, Quantity);
		}
		
		searchpage.click_AddToCart(driver);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		boolean display = searchpage.AddtoOrderPopupDisplayed(driver);
		boolean display2 = searchpage.AddtoOrderPopup2Displayed(driver);
		if(display== true||display2== true) {
			searchpage.click_ClosePopup(driver);
			System.out.println("Clicked on close popup");
		}
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		 
		driver.navigate().refresh();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Given("^I click on Shopping Cart$")
	public void i_click_on_Shopping_Cart(){
	 cart = new Cart(driver);
	 cart.click_CartIcon(driver);
	 try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	 
	   
	}

	@When("^I am on the Shopping Cart page$")
	public void i_am_on_the_Shopping_Cart_page(){
	    
		String Title = driver.getTitle();
		 assertEquals("Amazon.com Shopping Cart",Title);
		 try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	}

	@Then("^Remove the headphones from the cart$")
	public void remove_the_headphones_from_the_cart(){
		cart = new Cart(driver);
	 cart.click_DeleteFromCart(driver, "2");  
	 try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	   
	}

//	@Given("^I am on the Shopping Cart page$")
//	public void i_am_on_Shopping_Cart_page(){
//	    
//	   
//	}

	@When("^I reduce the Macbook pro Quantity to \"([^\"]*)\"$")
	public void i_reduce_the_Macbook_pro_Quantity_to(String arg1){
		cart = new Cart(driver);
	  cart.Cart_Select_Qty(driver, "1", arg1);  
	  try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@When("^Click on proceed to checkout$")
	public void click_on_proceed_to_checkout(){
		cart = new Cart(driver);
		cart.click_proceedToCheckout(driver);
		  try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	   
	}

	@Then("^i Should be on the checkout page$")			//Clicking on Checkout takes to the address page
	public void i_Should_be_on_the_checkout_page(){
		cart = new Cart(driver);
		boolean display = cart.CheckoutAddressPage_Displayed(driver);
		 assertEquals(true,display); 
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		 driver.navigate().to("https://www.amazon.com/");
		 try {
				Thread.sleep(3000);					//Clearing Cart
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		 cart.click_CartIcon(driver);
		 try {
				Thread.sleep(3000);					//Clearing Cart
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		 while(cart.DeleteCartItem_Displayed(driver)==true) {
			 cart.click_DeleteFromCart(driver, "1");
			 try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
		 }
		 
		 driver.quit(); 
	}
	
	@When("^select the search result number \"([^\"]*)\" Product and add to cart with Quantity \"([^\"]*)\"$")
	public void select_the_number_search_result_Product_and_add_to_cart_with_Quantity(String searchresNum, String qty){
		searchpage = new SearchResultPage(driver);
		searchpage.SelectSearchResult(driver, searchresNum);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} 
		boolean disp = searchpage.SelectQty_Displayed(driver);
		if(disp==true) {
			searchpage.SelectQuantity(driver, qty);
		}
		
		searchpage.click_AddToCart(driver);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		boolean display = searchpage.AddtoOrderPopupDisplayed(driver);
		boolean display2 = searchpage.AddtoOrderPopup2Displayed(driver);
		if(display== true||display2== true) {
			try {
				searchpage.click_ClosePopup(driver);
					
		        } catch (NoSuchElementException exception) {
		        	searchpage.click_Nothankyou(driver);
		        }
			
			System.out.println("Clicked on close popup");
		}
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		 
		driver.navigate().to("https://www.amazon.com/");
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	@After
	public void tearDown(Scenario scenario) {
	    if (scenario.isFailed()) {
	    		String screenshotName = scenario.getName().replaceAll(" ", "_");
	            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png"); 
	            File screenshot2 = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	            File destinationPath = new File(System.getProperty("user.dir") + "/Reports/cucumber-reports/screenshots/" + screenshotName + ".png");
	            try {
					Files.copy(screenshot2, destinationPath);
					Reporter.addScreenCaptureFromPath(destinationPath.toString());
				} catch (IOException e) {
					e.printStackTrace();
				}
	            
	    }
	    
	}
	
	

}
