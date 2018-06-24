package com.test.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.pagefactory.ElementLocatorFactory;

public class UserDetailsPlatform {

	private WebDriver driver;

	@FindBy(xpath = "//*[text()='Your Preferences']")
	private WebElement preferenceContactPageTitle;

	@FindBy(xpath = "//*[@id='tariff-selection-question']/div/label[3]/span/span")
	private WebElement AllTariffs;

	@FindBy(xpath = "//*[@id='tariff-selection-question']/div/label[1]/span/span")
	private WebElement fixedTariff;

	@FindBy(xpath = "//*[@id='tariff-selection-question']/div/label[2]/span/span")
	private WebElement variableTariff;

	@FindBy(xpath = "//*[@id='payment-selection-question']/div/label[4]/span/span")
	private WebElement allPaymentType;

	@FindBy(xpath = "//*[@id='payment-selection-question']/div/label[1]/span/span")
	private WebElement monthlyDirectDebit;

	@FindBy(xpath = "//*[@id='payment-selection-question']/div/label[2]/span/span")
	private WebElement quarterlyDirectDebit;

	@FindBy(id = "Email")
	private WebElement emailId;

	@FindBy(xpath = "//*[@id='terms-label']/span[2]")
	private WebElement tc;

	@FindBy(id = "email-submit")
	private WebElement nextButton;

	public UserDetailsPlatform(WebDriver driver) {
		ElementLocatorFactory finder = new AjaxElementLocatorFactory(driver, 30);
		PageFactory.initElements(finder, this);
		this.driver = driver;
	}

	public String getPageTitle() {
		return preferenceContactPageTitle.getText();
	}

	public void selectAlltariffs() {
		AllTariffs.click();
	}

	public void selectFixedTariff() {
		fixedTariff.click();
	}

	public void selectVariableTariff() {
		variableTariff.click();
	}

	public void clickAllPaymentTypes() {
		allPaymentType.click();
	}

	public void clickMonthlyDirectDebit() {
		monthlyDirectDebit.click();
	}

	public void clickQuarterlyDirectDebit() {
		quarterlyDirectDebit.click();
	}

	public void enterEmail(String email) {
		emailId.sendKeys(email);
	}

	public void acceptTc() {
		tc.click();
	}

	public void clickNextToResultsPage() {
		nextButton.click();
	}

}
