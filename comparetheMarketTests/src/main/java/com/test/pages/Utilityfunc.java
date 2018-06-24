package com.test.pages;

import org.openqa.selenium.JavascriptExecutor;
import com.test.steps.Common;

public class Utilityfunc extends Common {

	public void sleep(final int seconds) throws InterruptedException {
		Thread.sleep(seconds * 1000);
	}

	public void scrollDown() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,500)");
	}

	public void testShutdown() {
		driver.quit();
		driver = null;
	}

	

}
