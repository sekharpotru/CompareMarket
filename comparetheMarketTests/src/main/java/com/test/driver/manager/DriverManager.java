package com.test.driver.manager;

import java.io.File;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.test.configutils.LoadProperties;

public class DriverManager {

	
	public static RemoteWebDriver getDriverDynamic() throws MalformedURLException {
		String defaultBrowser = LoadProperties.getASpecificProperty("browser");

		RemoteWebDriver driver = null;
		String gico = new File("").getAbsolutePath() + File.separatorChar + "src"+ File.separatorChar +"test"+ File.separatorChar +"resources" + File.separatorChar + "geckodriver.exe";
		System.setProperty("webdriver.gecko.driver", gico);		
		
		if (defaultBrowser.equals("firefox") || defaultBrowser.equals("ff")) {
			
			// set driver properties
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("javascript.enabled", true);
			driver = new FirefoxDriver();
			driver.manage().window().fullscreen();
			//driver.manage().window().setSize(new Dimension(1375, 725));
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		} 		
		return driver;
	}

}