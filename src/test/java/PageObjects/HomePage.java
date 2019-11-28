package PageObjects;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {
	public HomePage(WebDriver driver) {
	     PageFactory.initElements(driver, this);
	 }
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Sign Out')]")
	private WebElement span_SignOut;
	
	@FindBy(how = How.XPATH, using = "//select[@id='searchDropdownBox']")
	private WebElement select_Departments;
	
	@FindBy(how = How.XPATH, using = "//input[contains(@id,'twotabsearchtextbox')]")
	private WebElement input_SearchBox;
	
	@FindBy(how = How.XPATH, using = "//input[contains(@value,'Go')]")
	private WebElement input_SearchButton;
	
	
	public void HomepageClickSignOut(WebDriver driver) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(span_SignOut));
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", span_SignOut);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		span_SignOut.click();
	}
	
	public void SelectDepartment_Search(WebDriver driver, String option) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(input_SearchBox));
		Select department =new Select(select_Departments);
		department.selectByVisibleText(option);
		
	}
	public void SearchBox_SearchProduct(WebDriver driver, String searchItem) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(input_SearchBox));
		input_SearchBox.clear();
		input_SearchBox.sendKeys(searchItem);
		input_SearchButton.click();
		
	}
}
