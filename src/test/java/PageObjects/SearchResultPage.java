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

public class SearchResultPage {
	
	public SearchResultPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		}
	
	String SearchResult = "(//span[contains(@class ,'a-size-medium a-color-base a-text-normal')])";
	
	@FindBy(how = How.XPATH, using = "//input[@id='add-to-cart-button']")
	private WebElement input_addToCart;
	
	@FindBy(how = How.XPATH, using = "//button[contains(@id,'NoCoverage-announce')]")
	private WebElement input_NoThanks;
	
	@FindBy(how = How.XPATH, using = "//h4[contains(.,'Add to your order')]|//h2[contains(.,'Add to your order')]|//h3[contains(.,'Add to your order')]|//h1[contains(.,'Add to your order')]")
	private WebElement h4_AddToOrder;
	
	@FindBy(how = How.XPATH, using = "//h4[contains(.,'Add to Order')]|//h2[contains(.,'Add to Order')]|//h3[contains(.,'Add to Order')]|//h1[contains(.,'Add to Order')]")
	private WebElement header_AddToOrder2;
	
	@FindBy(how = How.XPATH, using = "//h1[contains(.,'Added to Cart')]|//h2[contains(.,'Added to Cart')]|//h3[contains(.,'Added to Cart')]|//h4[contains(.,'Added to Cart')]")
	private WebElement h1_AddedToCart;
	
	@FindBy(how = How.XPATH, using = "//i[@class='a-icon a-icon-close']")
	private WebElement i_closePopup;
	
	@FindBy(how = How.XPATH, using = "//select[@id='quantity']")
	private WebElement select_Quantity;
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Continue')]")
	private WebElement macbook_continue_toorder;
	
	  

	public void SelectSearchResult(WebDriver driver, String option) {
		WebElement searchResultOption = driver.findElement(By.xpath(SearchResult+"["+option+"]"));
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(searchResultOption));
		searchResultOption.click();
		
	}
	
	public boolean SearchResultDisplayed(WebDriver driver) {
		WebElement searchResultOption = driver.findElement(By.xpath(SearchResult+"[1]"));
		boolean display;
		try {
		 display = searchResultOption.isDisplayed();
			
	    } catch (NoSuchElementException exception) {
	       return false;
	    }
		return display;
		
	}
	public void click_AddToCart(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(input_addToCart));
		input_addToCart.click();
	}
	
	public boolean AddtoOrderPopup2Displayed(WebDriver driver) {
	
		boolean display;
		try {
		 display = header_AddToOrder2.isDisplayed();
			
	    } catch (NoSuchElementException exception) {
	       return false;
	    }
		return display;
		
	}
	
	public boolean AddtoOrderPopupDisplayed(WebDriver driver) {
		
		boolean display;
		try {
		 display = h4_AddToOrder.isDisplayed();
			
	    } catch (NoSuchElementException exception) {
	       return false;
	    }
		return display;
		
	}
	public void click_Nothankyou(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(input_NoThanks));
		input_NoThanks.click();
	}
	
	public void click_ClosePopup(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(i_closePopup));
		i_closePopup.click();
	}
	
	public boolean AddedToCart_Displayed(WebDriver driver) {
	
		boolean display;
		try {
		 display = h1_AddedToCart.isDisplayed();
			
	    } catch (NoSuchElementException exception) {
	       return false;
	    }
		return display;
		
	}
	
	public void SelectQuantity(WebDriver driver, String option) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(select_Quantity));
		Select Quantity =new Select(select_Quantity);
		Quantity.selectByVisibleText(option);
		
	}
	
	public boolean SelectQty_Displayed(WebDriver driver) {
		
		boolean display;
		try {
		 display = select_Quantity.isDisplayed();
			
	    } catch (NoSuchElementException exception) {
	       return false;
	    }
		return display;
		
	}
}
