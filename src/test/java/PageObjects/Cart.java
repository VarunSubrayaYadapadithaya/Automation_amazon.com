package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Cart {
	public Cart(WebDriver driver) {
		PageFactory.initElements(driver, this);
		}
	
	@FindBy(how = How.XPATH, using = "//a[@id='nav-cart']")
	private WebElement a_Cart;
	
	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Select a shipping address')]")
	private WebElement a_CheckoutAddressHeader;
	
	@FindBy(how = How.XPATH, using = "//input[@name='proceedToCheckout']")
	private WebElement input_proceedtoCheckout;
	
	String DeleteLink = "(//*[@value= 'Delete'])";
	String Select_Qty = "(//select[@name='quantity'])";
	
	public void click_CartIcon(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(a_Cart));
		a_Cart.click();
	}
	
	public void click_DeleteFromCart(WebDriver driver, String Item) {
		WebElement DeleteItem = driver.findElement(By.xpath(DeleteLink+"["+Item+"]"));
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(DeleteItem));
		DeleteItem.click();
	}
	
	public void Cart_Select_Qty(WebDriver driver, String Item,String Qty) {
		WebElement select_Quantity = driver.findElement(By.xpath(Select_Qty+"["+Item+"]"));
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(select_Quantity));
		Select Quantity =new Select(select_Quantity);
		Quantity.selectByVisibleText(Qty);
	}
	
	public void click_proceedToCheckout(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(input_proceedtoCheckout));
		input_proceedtoCheckout.click();
	}
	
public boolean DeleteCartItem_Displayed(WebDriver driver) {
	
		boolean display;
		try {
		WebElement DeleteItem = driver.findElement(By.xpath(DeleteLink+"[1]"));
		 display = DeleteItem.isDisplayed();
			
	    } catch (NoSuchElementException exception) {
	       return false;
	    }
		return display;
		
	}

public boolean CheckoutAddressPage_Displayed(WebDriver driver) {
	
	boolean display;
	try {
	 display = a_CheckoutAddressHeader.isDisplayed();
		
    } catch (NoSuchElementException exception) {
       return false;
    }
	return display;
	
}
}

