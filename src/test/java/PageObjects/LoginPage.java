package PageObjects;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
	public LoginPage(WebDriver driver) {
	     PageFactory.initElements(driver, this);
	 }
	
	@FindBy(how = How.XPATH, using = "//span[contains(.,'Hello, Sign in')]")
	private WebElement span_LoginPage_HelloSignIn;
	
	@FindBy(how = How.XPATH, using = "//div[@id='nav-flyout-ya-signin']//span[@class='nav-action-inner'][contains(text(),'Sign in')]")
	private WebElement span_SignIn_Button;
	
	@FindBy(how = How.XPATH, using = "//h1[contains(.,'Sign in')]")
	private WebElement h1_SignIn;
	
	@FindBy(how = How.XPATH, using = "//input[@type='email'][contains(@id,'email')]")
	private WebElement input_email;
	
	@FindBy(how = How.XPATH, using = "//input[contains(@id,'ap_password')]")
	private WebElement input_password;
	
	@FindBy(how = How.XPATH, using = "//input[contains(@id,'signInSubmit')]")
	private WebElement input_SignInBtn;
	
	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Enter your email or mobile phone number')]")
	private WebElement text_UseremailError;

	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Enter your password')]")
	private WebElement text_PasswordError;
	
	@FindBy(how = How.XPATH, using = "//span[contains(.,'We cannot find an account with that email address')]")
	private WebElement text_NoAccountError;
	
	@FindBy(how = How.XPATH, using = "//span[contains(.,'Your password is incorrect')]")
	private WebElement text_wrongPasswordError;
	
	@FindBy(how = How.XPATH, using = "//span[contains(.,'Hello, TestCucumber')]")
	private WebElement span_SuccessLogin;
	
	
	public void HoverOverSignIn(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(span_LoginPage_HelloSignIn));
		Actions action = new Actions(driver);
		action.moveToElement(span_LoginPage_HelloSignIn).perform();
	}
	
	public void HoverOverUserAccountMenu(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(span_SuccessLogin));
		Actions action = new Actions(driver);
		action.moveToElement(span_SuccessLogin).perform();
	}
	public void ClickUserAccountMenu(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(span_SuccessLogin));
		span_SuccessLogin.click();
	}
	
	public void HomepageClickSignIn(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(span_SignIn_Button));
		span_SignIn_Button.click();
	}
	
	public void LoginPageClickSignIn(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(input_SignInBtn));
		input_SignInBtn.click();
	}
	
public boolean LoginPage_Displayed() {
		
		boolean display;
		try {
		 display = h1_SignIn.isDisplayed();
			
        } catch (NoSuchElementException exception) {
           return false;
        }
		return display;
			 }
public boolean UsrnameError_Displayed() {
	
	boolean display;
	try {
	 display = text_UseremailError.isDisplayed();
		
    } catch (NoSuchElementException exception) {
       return false;
    }
	return display;
		 }
public boolean PasswordError_Displayed() {
	
	boolean display;
	try {
	 display = text_PasswordError.isDisplayed();
		
    } catch (NoSuchElementException exception) {
       return false;
    }
	return display;
		 }

public void inputEmail_SendKeys(WebDriver driver, String email) {
	WebDriverWait wait = new WebDriverWait(driver, 10);
	wait.until(ExpectedConditions.visibilityOf(input_email));
	input_email.clear();
	input_email.sendKeys(email);
}

public void inputPassword_SendKeys(WebDriver driver, String pass) {
	WebDriverWait wait = new WebDriverWait(driver, 10);
	wait.until(ExpectedConditions.visibilityOf(input_password));
	input_password.clear();
	input_password.sendKeys(pass);
}

public boolean ErrorNoAccount_Displayed() {
	
	boolean display;
	try {
	 display = text_NoAccountError.isDisplayed();
		
    } catch (NoSuchElementException exception) {
       return false;
    }
	return display;
		 }

public boolean wrongPasswordError_Displayed() {
	
	boolean display;
	try {
	 display = text_wrongPasswordError.isDisplayed();
		
    } catch (NoSuchElementException exception) {
       return false;
    }
	return display;
		 }

public boolean LoginSuccess_Displayed() {
	
	boolean display;
	try {
	 display = span_SuccessLogin.isDisplayed();
		
    } catch (NoSuchElementException exception) {
       return false;
    }
	return display;
		 }

public boolean HelloSignIn_Displayed() {
	
	boolean display;
	try {
	 display = span_LoginPage_HelloSignIn.isDisplayed();
		
    } catch (NoSuchElementException exception) {
       return false;
    }
	return display;
		 }

}

