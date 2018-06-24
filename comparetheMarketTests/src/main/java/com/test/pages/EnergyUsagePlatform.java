package com.test.pages;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.pagefactory.ElementLocatorFactory;
import org.openqa.selenium.support.ui.Select;

import com.test.configutils.LoadProperties;

public class EnergyUsagePlatform {

	private WebDriver driver;
	
	@FindBy(css = "h2.main-heading")
	private WebElement energyUsagePageTitle;

	@FindBy(xpath = "//*[@id='your-energy']/h1")
	private WebElement yourEnergyPageTitle;

	@FindBy(xpath = "//*[@id='how-big-is-your-home']/div/div/label[1]/span/span")
	private WebElement size1to2bed;

	@FindBy(xpath = "//*[@id='number-of-occupants']/div/div/label[1]")
	private WebElement occup1to2;

	@FindBy(xpath = "//*[@id='main-heating-source']/div/div/label[3]")
	private WebElement otherHeat;

	@FindBy(xpath = "//*[@id='heating-usage']/div/div/label[3]")
	private WebElement tropical;

	@FindBy(xpath = "//*[@id='house-insulation']/div/div/label[2]")
	private WebElement insulWellwrap;

	@FindBy(xpath = "//*[@id='main-cooking-source']/div/div/label[2]")
	private WebElement cookSourceEle;

	@FindBy(xpath = "//*[@id='house-occupied']/div/div/label[2]")
	private WebElement houseOccupEveWkd;
	
	@FindBy(id = "goto-person-details-button")
	private WebElement nextButton;

	public EnergyUsagePlatform(WebDriver driver) {
		ElementLocatorFactory finder = new AjaxElementLocatorFactory(driver, 30);
		PageFactory.initElements(finder, this);
		this.driver = driver;
	}

	public String getPageTitle() {
		return yourEnergyPageTitle.getText();
	}
	
	public String getUsagePageTitle() {
		return energyUsagePageTitle.getText();
	}

	public void selectHomeSize1to2() {
		size1to2bed.click();
	}

	public void noOccupied1to2() {
		occup1to2.click();
	}

	public void heatingSourceOther() {
		otherHeat.click();
	}

	public void tempTropical() {
		tropical.click();
	}

	public void insulationWellWrap() {
		insulWellwrap.click();
	}

	public void cookSourceElectric() {
		cookSourceEle.click();
	}

	public void OccuppiedEveWeekend() {
		houseOccupEveWkd.click();
	}
	
	public void clickNextButtonOnPage() {
		nextButton.click();
	}

}
