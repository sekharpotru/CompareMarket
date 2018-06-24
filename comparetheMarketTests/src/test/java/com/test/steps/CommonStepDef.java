package com.test.steps;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.JavascriptExecutor;

import com.test.pages.EnergyElectricityPlatform;
import com.test.pages.EnergyGasPlatform;
import com.test.pages.EnergySupplierPlatform;
import com.test.pages.EnergyUsagePlatform;
import com.test.pages.Utilityfunc;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CommonStepDef  extends CommonUsefulMethods{
	//CommonUsefulMethods common = new CommonUsefulMethods();
	
	Utilityfunc util = new Utilityfunc();

	public EnergyUsagePlatform EnergyUsagePlatformPage;

	public CommonStepDef() {
		EnergyUsagePlatformPage = new EnergyUsagePlatform(driver);
		System.out.println("DRIVER VALUEEEEEE");
	}

	@When("^I wait for \"([^\"]*)\" seconds$")
	public void i_wait_for_seconds(String seconds) throws Throwable {
		util.sleep(Integer.parseInt(seconds));
	}
	
	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
	//util.testShutdown();
	driver.close();
	driver = null;
	}
}
