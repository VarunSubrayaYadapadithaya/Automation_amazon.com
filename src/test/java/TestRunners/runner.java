package TestRunners;

import java.io.File;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin ={"pretty" , "html:Reports/cucumber-reports", "com.cucumber.listener.ExtentCucumberFormatter:Reports/cucumber-reports/Cucumber_report.html"},
features= {"src/test/resources/features"},monochrome = true, glue="" /*, tags= {"~@TestA","~@TestC"}*/)
public class runner {
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src/test/resources/Config/extent-config.xml"));
		Reporter.setSystemInfo("User", System.getProperty("user.name"));
		Reporter.setSystemInfo("OS", System.getProperty("os.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		
	}
}