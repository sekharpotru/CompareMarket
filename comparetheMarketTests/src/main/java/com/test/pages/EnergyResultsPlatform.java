package com.test.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.pagefactory.ElementLocatorFactory;

public class EnergyResultsPlatform {

	private WebDriver driver;

	@FindBy(xpath = "//*[contains(text(),'Your results')]")
	private WebElement resultsTitle;

	@FindBy(xpath = "//*[contains(text(),'PE2 6YS')]")
	private WebElement supplierPostcode;

	@FindBy(xpath = "//*[contains(text(),'British Gas')]")
	private WebElement defaultGasSupplierName;

	@FindBy(id = "recommended_tariffs_for_you_header")
	private WebElement recommdTariff;

	@FindBy(css = "h4.filter-results-heading")
	private WebElement filterHeading;

	@FindBy(css = "th.supplier")
	private WebElement supplierHeading;

	@FindBy(css = "th.annual-saving")
	private WebElement annualSavingHeading;

	@FindBy(css = "th.estimated-bill")
	private WebElement estimatedBillHeading;

	@FindBy(css = "th.tariff-type")
	private WebElement tariffTypeHeading;

	@FindBy(css = "th.payment-type")
	private WebElement paymentTypeHeading;

	@FindBy(css = "th.supplier-rating")
	private WebElement supplierRatingHeading;

	@FindBy(xpath = "//*[@id='filters-tariff-type-fixed'][@class='checked']")
	private WebElement fixedTariffChecked;

	@FindBy(xpath = "//*[@id='filters-tariff-type-fixed'][@class='']")
	private WebElement fixedTariffUnchecked;

	@FindBy(xpath = "//*[@id='filters-tariff-type-variable'][@class='checked']")
	private WebElement variableTariffChecked;

	@FindBy(xpath = "//*[@id='filters-tariff-type-variable'][@class='']")
	private WebElement variableTariffUnchecked;

	@FindBy(xpath = "//*[@id='filters-payment-type-monthly'][@class='checked']")
	private WebElement monthlyPayTypeChecked;

	@FindBy(xpath = "//*[@id='filters-payment-type-monthly'][@class='']")
	private WebElement monthlyPayTypeUnchecked;

	@FindBy(xpath = "//*[@id='filters-payment-type-quarterly'][@class='checked']")
	private WebElement quarterlyPayTypeChecked;

	@FindBy(xpath = "//*[@id='filters-payment-type-quarterly'][@class='']")
	private WebElement quarterlyPayTypeUnchecked;

	@FindBy(xpath = "//*[@id='filters-payment-type-bill-receipt'][@class='checked']")
	private WebElement payonReceiptOfBillPayTypeChecked;

	@FindBy(xpath = "//*[@id='filters-payment-type-bill-receipt'][@class='']")
	private WebElement payonReceiptOfBillPayTypeUnchecked;

	public EnergyResultsPlatform(WebDriver driver) {
		ElementLocatorFactory finder = new AjaxElementLocatorFactory(driver, 30);
		PageFactory.initElements(finder, this);
		this.driver = driver;
	}

	public String getResultsTitle() {
		return resultsTitle.getText();

	}

	public String recommendedTariffHeaderText() {
		return recommdTariff.getText();
	}

	public String getSupplierPostcode() {
		return supplierPostcode.getText();
	}

	public String getDefaultGasSupplierName() {
		return defaultGasSupplierName.getText();
	}

	public String getElectricitySupplierName(String eleSupName) {
		String electricitySupplierName = driver.findElement(By.xpath("//*[contains(text(),'" + eleSupName + "')]"))
				.getText();
		return electricitySupplierName;
	}

	public String getElectricityProjection(String elecProjection) {
		String electricityProjection = driver.findElement(By.xpath("//*[contains(text(),'" + elecProjection + "')]"))
				.getText();
		return electricityProjection;
	}

	public String getGasSupplierName(String gasSupName) {
		String gasSupplierName = driver.findElement(By.xpath("//*[contains(text(),'" + gasSupName + "')]")).getText();
		return gasSupplierName;
	}

	public String getElectricityUsage(String eleUsage) {
		String electricityUsage = driver.findElement(By.xpath("//*[text()='" + eleUsage + "']")).getText();
		return electricityUsage;
	}

	public String getGasUsage(String gasUsage) {
		String GasUsage = driver.findElement(By.xpath("//*[text()='" + gasUsage + "']")).getText();
		return GasUsage;
	}

	public String getFilterHeadingTitle() {
		return filterHeading.getText();

	}

	public boolean fixedTariffChecked() {
		try {
			fixedTariffChecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean fixedTariffUnchecked() {
		try {
			fixedTariffUnchecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean variableTariffChecked() {
		try {
			variableTariffChecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean variableTariffUnchecked() {
		try {
			variableTariffUnchecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean monthlyPayTypeChecked() {
		try {
			monthlyPayTypeChecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean monthlyPayTypeUnchecked() {
		try {
			monthlyPayTypeUnchecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean quarterlyPayTypeChecked() {
		try {
			quarterlyPayTypeChecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean quarterlyPayTypeUnchecked() {
		try {
			quarterlyPayTypeUnchecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean payonReceiptOfBillPayTypeChecked() {
		try {
			payonReceiptOfBillPayTypeChecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public boolean payonReceiptOfBillPayTypeUnchecked() {
		try {
			payonReceiptOfBillPayTypeUnchecked.isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
		return true;
	}

	public String getSupplierHeadingTitle() {
		return supplierHeading.getText();

	}

	public String getAnnualSavingHeadingTitle() {
		return annualSavingHeading.getText();

	}

	public String getEstimatedBillHeadingTitle() {
		return estimatedBillHeading.getText();

	}

	public String getTariffTypeHeadingTitle() {
		return tariffTypeHeading.getText();

	}

	public String getPaymentTypeHeadingTitle() {
		return paymentTypeHeading.getText();

	}

	public String getSupplierRatingHeadingTitle() {
		return supplierRatingHeading.getText();

	}

	public int resultSize() {
		java.util.List<WebElement> results = driver
				.findElements(By.xpath("//*[@id='tariffs-for-me']/div/section/table//tr"));
		int size = results.size();
		System.out.println("results size is :::::::" + size);
		return size;
	}

}
