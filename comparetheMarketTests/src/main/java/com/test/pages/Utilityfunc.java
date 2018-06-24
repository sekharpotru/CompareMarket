package com.test.pages;

import org.openqa.selenium.JavascriptExecutor;

import com.test.steps.CommonUsefulMethods;

public class Utilityfunc extends CommonUsefulMethods {

	// private WebDriver driver;
	// public void takeScreenshot() {
	// final byte[] imgBytes = ((TakesScreenshot)
	// driver).getScreenshotAs(OutputType.BYTES);
	// scenario.embed(imgBytes, "img/png");
	// }

	public void sleep(final int seconds) throws InterruptedException {
		Thread.sleep(seconds * 1000);
	}

	public void scrollDown() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
	}

	public void testShutdown() {
		System.out.println("REACHED TO DRIVER TO CLOSE");
		driver.quit();
		System.out.println("AFTER DRIVER TO CLOSE");
	}

}
