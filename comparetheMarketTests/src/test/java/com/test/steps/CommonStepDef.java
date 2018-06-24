package com.test.steps;

import org.openqa.selenium.WebDriverException;

import com.test.pages.EnergyUsagePlatform;
import com.test.pages.Utilityfunc;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CommonStepDef extends Common {

	Utilityfunc util = new Utilityfunc();

	public EnergyUsagePlatform EnergyUsagePlatformPage;

	public CommonStepDef() {
		EnergyUsagePlatformPage = new EnergyUsagePlatform(driver);
	}

	@When("^I wait for \"([^\"]*)\" seconds$")
	public void i_wait_for_seconds(String seconds) throws Throwable {
		util.sleep(Integer.parseInt(seconds));
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		util.testShutdown();
	}

	@Before
	public void deleteCookies() {
		try {
			driver.manage().deleteAllCookies();
		} catch (WebDriverException e) {
			System.out.println(e.getMessage());
		}
	}

	@After
	public void testShutdown() {
		driver.close();
		driver = null;
	}
}
