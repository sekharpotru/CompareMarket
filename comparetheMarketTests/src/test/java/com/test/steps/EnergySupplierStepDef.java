package com.test.steps;

import static org.junit.Assert.assertEquals;
import com.test.pages.EnergySupplierPlatform;
import com.test.pages.Utilityfunc;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnergySupplierStepDef extends Common {
	Utilityfunc util = new Utilityfunc();

	public EnergySupplierPlatform EnergySupplierPlatformPage;

	public EnergySupplierStepDef() {
		EnergySupplierPlatformPage = new EnergySupplierPlatform(driver);
	}

	@Given("^I navigate to energy comparethemarket website$")
	public void i_navigate_to_energy_comparethemarket_website() throws Throwable {
		EnergySupplierPlatformPage.gotoHomePage();
		assertEquals("Your Supplier", EnergySupplierPlatformPage.getPageTitle());
	}

	@When("^I click on Find postcode button after I enter postcode as \"([^\"]*)\"$")
	public void i_click_on_Find_postcode_button_after_I_enter_postcode_as(String postcode) throws Throwable {
		EnergySupplierPlatformPage.enterPostcode(postcode);
		EnergySupplierPlatformPage.clickFindPostcode();
	}

	@Then("^Website accepts it and displays option to \"([^\"]*)\" if needed$")
	public void website_accepts_it_and_give_the_user_option_to_if_needed(String id) throws Throwable {
		EnergySupplierPlatformPage.allowChangePostcode(id);
	}

	@Then("^I click on \"([^\"]*)\" as i have my bill handy$")
	public void i_click_on_as_i_have_my_bill_handy(String id) throws Throwable {
		EnergySupplierPlatformPage.haveBill(id);
	}

	@Then("^I click on Gas & Electricity as i want to compare both$")
	public void i_click_on_Gas_Electricity_as_i_want_to_compare_both() throws Throwable {
		EnergySupplierPlatformPage.clickGasAndElectricity();
		util.scrollDown();
	}

	@Then("^I click on Electricity only label as i want to compare electricity only$")
	public void i_click_on_Electricity_only_label_as_i_want_to_compare_electricity_only() throws Throwable {
		EnergySupplierPlatformPage.clickElectricityOnly();
	}

	@Then("^I click on Gas only label as i want to compare gas only$")
	public void i_click_on_Gas_only_label_as_i_want_to_compare_gas_only() throws Throwable {
		EnergySupplierPlatformPage.clickGasOnly();
	}

	@Then("^I check the \"([^\"]*)\" checkbox as i am not aware who is my current gas supplier is$")
	public void i_check_the_checkbox_as_i_am_not_aware_who_is_my_current_gas_supplier_is(String arg1) throws Throwable {
		EnergySupplierPlatformPage.clickIdontKnow();
	}

	@Then("^I check the No checkbox as my gas & electricity are not from the same supplier$")
	public void i_check_the_No_checkbox_as_my_gas_electricity_are_not_from_the_same_supplier() throws Throwable {
		EnergySupplierPlatformPage.sameSupplierNo();
	}

	@Then("^I click on EDF Energy as my current electricity supplier$")
	public void i_click_on_EDF_Energy_as_my_current_electricity_supplier() throws Throwable {

		EnergySupplierPlatformPage.selectEdfEnergyElectricity();
	}

	@Then("^I click on British Gas as my current gas supplier$")
	public void i_click_on_British_Gas_as_my_current_gas_supplier() throws Throwable {

		EnergySupplierPlatformPage.selectBritishgas();
	}

	@Then("^I select \"([^\"]*)\" as my current electricity supplier from the drop down option$")
	public void i_select_as_my_current_electricity_supplier_from_the_drop_down_option(String energySupplier)
			throws Throwable {
		EnergySupplierPlatformPage.selectFromOtherSupplier(energySupplier);
	}

	@When("^I click on Next button at below right$")
	public void i_click_on_Next_button_at_below_right() throws Throwable {
		EnergySupplierPlatformPage.clickNextButton();
	}

}
