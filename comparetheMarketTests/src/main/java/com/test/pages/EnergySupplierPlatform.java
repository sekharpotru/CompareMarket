package com.test.pages;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.pagefactory.ElementLocatorFactory;
import org.openqa.selenium.support.ui.Select;

import com.test.configutils.LoadProperties;

public class EnergySupplierPlatform {

	private WebDriver driver;

	@FindBy(css = "h2.main-heading")
	private WebElement supplierPageTitle;

	@FindBy(id = "your-postcode")
	private WebElement postCode;

	@FindBy(id = "find-postcode")
	private WebElement findPostcode;

	@FindBy(id = "compare-both-label")
	private WebElement gasAndElectricity;

	@FindBy(id = "compare-electricity-label")
	private WebElement electricity;

	@FindBy(id = "compare-gas-label")
	private WebElement gas;

	@FindBy(xpath = "//*[@id='same-supplier-question']/div/div/label[1]/span")
	private WebElement sameSupplierYes;

	@FindBy(xpath = "//*[@id='same-supplier-question']/div/div/label[2]/span")
	private WebElement sameSupplierNo;

	@FindBy(xpath = "//*[@id='gas-energy-suppliers-question']/div/div/div[1]/label[1]/span/span")
	private WebElement britishGas;

	@FindBy(xpath = "//*[@id='elec-energy-suppliers-question']/div/div/div[1]/label[2]/span/span")
	private WebElement edfEnergyElectricity;

	@FindBy(xpath = "//*[@id='gas-energy-suppliers-question']/div/div/div[2]/label/span")
	private WebElement iDontKnow;

	@FindBy(id = "goto-your-supplier-details")
	private WebElement nextButton;

	public EnergySupplierPlatform(WebDriver driver) {
		ElementLocatorFactory finder = new AjaxElementLocatorFactory(driver, 30);
		PageFactory.initElements(finder, this);
		this.driver = driver;
	}

	public String getPageTitle() {
		return supplierPageTitle.getText();
	}

	public void gotoHomePage() {

		driver.get(LoadProperties.getWebEndPoint());
	}

	public void enterPostcode(String postcode) {
		postCode.sendKeys(postcode);
	}

	public void clickFindPostcode() {
		findPostcode.click();
	}

	public void allowChangePostcode(String id) {
		assertEquals("Change postcode", driver.findElement(By.id(id)).getText());
	}

	public void haveBill(String id) {
		driver.findElement(By.id(id)).click();
	}

	public void clickGasAndElectricity() {
		gasAndElectricity.click();
	}

	public void clickElectricityOnly() {
		electricity.click();
	}

	public void clickGasOnly() {
		gas.click();
	}

	public void sameSupplierYes() {
		sameSupplierYes.click();
	}

	public void sameSupplierNo() {
		sameSupplierNo.click();
	}

	public void selectBritishgas() {
		britishGas.click();
	}

	public void selectEdfEnergyElectricity() {
		edfEnergyElectricity.click();
	}

	public void clickIdontKnow() {
		iDontKnow.click();
	}

	public void selectFromOtherSupplier(String energySupplier) {
		Select otherSupplier = new Select(driver.findElement(By.id("sel1")));
		otherSupplier.selectByVisibleText(energySupplier);

	}

	public void clickNextButton() {
		nextButton.click();
	}

}
