package com.test.steps;

import static org.junit.Assert.assertEquals;
import com.test.pages.EnergyGasPlatform;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnergyGasStepDef extends Common {

	public EnergyGasPlatform EnergyGasPlatformPage;

	public EnergyGasStepDef() {
		EnergyGasPlatformPage = new EnergyGasPlatform(driver);
	}

	@Then("^I should be able to navigate to energy gas page$")
	public void i_should_be_able_to_navigate_to_energy_gas_page() throws Throwable {
		assertEquals("Gas", EnergyGasPlatformPage.getPageTitle());
	}

	@When("^I select \"([^\"]*)\" as my current gas tariff under drop down option$")
	public void i_select_as_my_current_gas_tariff_under_drop_down_option(String planName) throws Throwable {
		EnergyGasPlatformPage.selectGasPlan(planName);
	}

	@Then("^I select \"([^\"]*)\" as my gas method of pay under drop down option$")
	public void i_select_as_my_gas_method_of_pay_under_drop_down_option(String mode) throws Throwable {
		EnergyGasPlatformPage.gasPayMode(mode);
	}

	@When("^I check the No checkbox to indicate that gas is not my main source of heating$")
	public void i_check_the_No_checkbox_to_indicate_that_gas_is_not_my_main_source_of_heating() throws Throwable {
		EnergyGasPlatformPage.gasSourceHeatNo();
	}

	@When("^I check the kWh checkbox to give my current gas usgae$")
	public void i_check_the_kWh_checkbox_to_give_my_current_gas_usgae() throws Throwable {
		EnergyGasPlatformPage.gasUsageKwh();
	}

	@When("^I select \"([^\"]*)\" as option from drop down to enter current gas usage$")
	public void i_select_as_option_from_drop_down_to_enter_current_gas_usage(String billType) throws Throwable {
		EnergyGasPlatformPage.gasUsagePeriod(billType);
	}

	@When("^I enter the value \"([^\"]*)\" as current gas usage in the given textbox$")
	public void i_enter_the_value_as_current_gas_usage_in_the_given_textbox(String value) throws Throwable {
		EnergyGasPlatformPage.gasUsageValue(value);
	}

	@Then("^I check the Yes checkbox as i use pre-payment meter$")
	public void i_check_the_Yes_checkbox_as_i_use_pre_payment_meter() throws Throwable {
		EnergyGasPlatformPage.selectPrePayYes();
	}

	@Then("^I check the \"([^\"]*)\" checkbox as i do not know how much i spend on gas$")
	public void i_check_the_checkbox_as_i_do_not_know_how_much_i_spend_on_gas(String arg1) throws Throwable {
		EnergyGasPlatformPage.selectGasSpendDontKnow();
	}

	@When("^I click on the Next button at below right to navigate to preferences and contact details page$")
	public void i_click_on_the_Next_button_at_below_right_to_navigate_to_preferences_and_contact_details_page()
			throws Throwable {
		EnergyGasPlatformPage.clickNextButtonOnPage();
	}

	@When("^I click on Next button at below right to navigate to \"([^\"]*)\" page$")
	public void i_click_on_Next_button_at_below_right_to_navigate_to_page(String pageTitle) throws Throwable {
		EnergyGasPlatformPage.clickNextButtonOnPage();
	}

}
