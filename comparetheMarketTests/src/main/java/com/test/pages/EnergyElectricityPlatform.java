package com.test.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.pagefactory.ElementLocatorFactory;
import org.openqa.selenium.support.ui.Select;

public class EnergyElectricityPlatform {

	private WebDriver driver;

	@FindBy(xpath = "//*[@id='your-energy']/section[1]/h2")
	private WebElement elecEnergyPageTitle;

	@FindBy(xpath = "//*[@id='your-energy']/h1")
	private WebElement energyPageTitle;

	@FindBy(xpath = "//*[@id='economy-7-question']/div/div/label[1]/span")
	private WebElement ecMeterYes;

	@FindBy(xpath = "//*[@id='economy-7-question']/div/div/label[2]/span")
	private WebElement ecMeterNo;

	@FindBy(xpath = "//*[@id='prepay-yes-no']/div/div/label[2]/span")
	private WebElement prePayMeterNo;

	@FindBy(xpath = "//*[@id='electricity-main-heating-source-question']/div/div/label[1]/span")
	private WebElement esourceYes;

	@FindBy(xpath = "//*[@id='electricity-usage-question']/div/div/div[1]/label[1]/span")
	private WebElement ekWh;

	@FindBy(id = "economy-7-day-usage")
	private WebElement elcDayusageValue;

	@FindBy(id = "economy-7-night-usage")
	private WebElement elcNightusageValue;

	@FindBy(id = "electricity-current-spend")
	private WebElement elecUsageValue;

	@FindBy(id = "goto-your-energy")
	private WebElement nextButton;

	public EnergyElectricityPlatform(WebDriver driver) {
		ElementLocatorFactory finder = new AjaxElementLocatorFactory(driver, 30);
		PageFactory.initElements(finder, this);
		this.driver = driver;
	}

	public String getPageTitle() {
		return elecEnergyPageTitle.getText();
	}

	public String getEnergyPageTitle() {
		return energyPageTitle.getText();
	}

	public void selectElePlan(String planName) {
		Select ePlan = new Select(driver.findElement(By.xpath("//*[@id='electricity-tariff-additional-info']")));
		ePlan.selectByVisibleText(planName);
	}

	public void economyMeterYes() {
		ecMeterYes.click();
	}

	public void economyMeterNo() {
		ecMeterNo.click();
	}

	public void prePayMeterNo() {
		prePayMeterNo.click();
	}

	public void elecPayMode(String mode) {
		Select ePay = new Select(driver.findElement(By.xpath("//*[@id='electricity-payment-method-dropdown-link']")));
		ePay.selectByVisibleText(mode);
	}

	public void electricSourceHeat() {
		esourceYes.click();
	}

	public void eleUsageKwh() {
		ekWh.click();
	}

	public void eleUsagePeriod(String period) {
		Select usagePeriod = new Select(driver.findElement(By.xpath("//*[@id='electricity-usage-dropdown']")));
		usagePeriod.selectByVisibleText(period);
	}

	public void currentEleSpendPeriod(String period) {
		Select usagePeriod = new Select(driver.findElement(By.xpath("//*[@id='electricity-current-spend-period']")));
		usagePeriod.selectByVisibleText(period);
	}

	public void enterElecDayUsageValue(String value) {
		elcDayusageValue.sendKeys(value);
	}

	public void enterElecNightUsageValue(String value) {
		elcNightusageValue.sendKeys(value);
	}

	public void enterElecUsageValue(String value) {
		elecUsageValue.sendKeys(value);
	}

	public void clickNextToGasPage() {
		nextButton.click();
	}

}
