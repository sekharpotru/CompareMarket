package com.test.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.pagefactory.ElementLocatorFactory;
import org.openqa.selenium.support.ui.Select;

public class EnergyGasPlatform {

	private WebDriver driver;

	@FindBy(xpath = "//*[@id='your-energy']/section[2]/h2")
	private WebElement gasEnergyPageTitle;

	@FindBy(xpath = "//*[@id='gas-main-heating-source-question']/div/div/label[2]/span")
	private WebElement gsourceNo;

	@FindBy(xpath = "//*[@id='gas-type-of-bill-question']/div/div/div[1]/label[1]/span")
	private WebElement gaskWh;

	@FindBy(id = "gas-usage")
	private WebElement gasUsgaeValue;

	@FindBy(id = "prepay-yes-no")
	private WebElement prePayYes;

	@FindBy(id = "gas-dont-know-check")
	private WebElement gasDontKnow;

	@FindBy(id = "goto-your-energy")
	private WebElement nextButton;

	public EnergyGasPlatform(WebDriver driver) {
		ElementLocatorFactory finder = new AjaxElementLocatorFactory(driver, 30);
		PageFactory.initElements(finder, this);
		this.driver = driver;
	}

	public String getPageTitle() {
		return gasEnergyPageTitle.getText();
	}

	public void selectGasPlan(String planName) {
		Select gPlan = new Select(driver.findElement(By.xpath("//*[@id='gas-tariff-additional-info']")));
		gPlan.selectByVisibleText(planName);
	}

	public void gasSourceHeatNo() {
		gsourceNo.click();
	}

	public void gasUsageKwh() {
		gaskWh.click();
	}

	public void gasPayMode(String mode) {
		Select gPay = new Select(driver.findElement(By.xpath("//*[@id='gas-payment-method-dropdown-link']")));
		gPay.selectByVisibleText(mode);
	}

	public void gasUsagePeriod(String billType) {
		Select usagePeriod = new Select(driver.findElement(By.xpath("//*[@id='type-of-Gas-bill-usage-dropdown']")));
		usagePeriod.selectByVisibleText(billType);
	}

	public void gasUsageValue(String value) {
		gasUsgaeValue.sendKeys(value);
	}

	public void clickNextButtonOnPage() {
		nextButton.click();
	}

	public void selectPrePayYes() {
		prePayYes.click();
	}

	public void selectGasSpendDontKnow() {
		gasDontKnow.click();
	}

}
