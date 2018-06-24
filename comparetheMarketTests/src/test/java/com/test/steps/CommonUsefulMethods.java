package com.test.steps;

import java.net.MalformedURLException;
import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.test.configutils.LoadProperties;
import com.test.driver.manager.DriverManager;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class CommonUsefulMethods {

	public static RemoteWebDriver driver;
	private Scenario scenario;

	public CommonUsefulMethods() {
		if (driver == null) {
			try {
				driver = DriverManager.getDriverDynamic();
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
		}
	}

//	@Before
//	public void deleteCookies() {
//		try {
//			driver.manage().deleteAllCookies();
//		} catch (WebDriverException e) {
//			System.out.println(e.getMessage());
//		}
//	}

	/*@After
	public void testShutdown() {
		driver.close();
	}*/

//	@After
//	public void embedScreenshot(Scenario scenario) {
//		if (scenario.isFailed()) {
//			System.out.println(("Scenario Failed"));
//			try {
//				byte[] bytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
//				scenario.embed(bytes, "image/png");
//			} catch (WebDriverException wde) {
//				System.err.println(wde.getMessage());
//			} catch (ClassCastException cce) {
//				cce.printStackTrace();
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		} else {
//			System.out.println("Scenario Passed");
//		}
//		// driver.close();
//		// driver=null;
//	}

/*	public void takeScreenshot() {
		final byte[] imgBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(imgBytes, "img/png");
	}*/

//	public void sleep(final int seconds) throws InterruptedException {
//		Thread.sleep(seconds * 1000);
//	}
//
//	public void scrollDown() {
//		JavascriptExecutor js = (JavascriptExecutor) driver;
//		js.executeScript("window.scrollBy(0,1000)");
//	}

}