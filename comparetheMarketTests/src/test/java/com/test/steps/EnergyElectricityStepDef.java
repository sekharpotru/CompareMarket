package com.test.steps;

import static org.junit.Assert.assertEquals;
import com.test.pages.EnergyElectricityPlatform;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnergyElectricityStepDef extends Common {

	public EnergyElectricityPlatform EnergyElectricityPlatformPage;

	public EnergyElectricityStepDef() {
		EnergyElectricityPlatformPage = new EnergyElectricityPlatform(driver);
	}

	@Then("^I should be able to navigate to energy electricity page$")
	public void i_should_be_able_to_navigate_to_energy_electricity_page() throws Throwable {
		assertEquals("Electricity", EnergyElectricityPlatformPage.getPageTitle());
	}

	@Then("^I should be able to navigate to energy page$")
	public void i_should_be_able_to_navigate_to_energy_page() throws Throwable {
		assertEquals("Your Energy", EnergyElectricityPlatformPage.getEnergyPageTitle());
	}

	@Then("^I select \"([^\"]*)\" as my current electricity plan under drop down option$")
	public void i_select_as_my_current_electricity_plan_under_drop_down_option(String planName) throws Throwable {
		EnergyElectricityPlatformPage.selectElePlan(planName);
	}

	@Then("^I check the Yes checkbox as i have an Economy (\\d+) meter$")
	public void i_check_the_Yes_checkbox_as_i_have_an_Economy_meter(int arg1) throws Throwable {
		EnergyElectricityPlatformPage.economyMeterYes();
	}

	@Then("^I check the No checkbox as i do not have an Economy (\\d+) meter$")
	public void i_check_the_No_checkbox_as_i_do_not_have_an_Economy_meter(int arg1) throws Throwable {
		EnergyElectricityPlatformPage.economyMeterNo();
	}

	@Then("^I check the No checkbox as i do not use pre-payment meter$")
	public void i_check_the_No_checkbox_as_i_don_t_use_pre_payment_meter() throws Throwable {
		EnergyElectricityPlatformPage.prePayMeterNo();
	}

	@Then("^I select \"([^\"]*)\" as my electricity method of pay under drop down option$")
	public void i_select_as_my_electricity_method_of_pay_under_drop_down_option(String mode) throws Throwable {
		EnergyElectricityPlatformPage.elecPayMode(mode);
	}

	@Then("^I check the Yes checkbox to indicate that electricity as my main source of heating$")
	public void i_check_the_Yes_checkbox_to_indicate_that_electricity_as_my_main_source_of_heating() throws Throwable {
		EnergyElectricityPlatformPage.electricSourceHeat();
	}

	@Then("^I check the kWh checkbox to give my current electricty usgae$")
	public void i_check_the_kWh_checkbox_to_give_my_current_electricty_usgae() throws Throwable {
		EnergyElectricityPlatformPage.eleUsageKwh();
	}

	@Then("^I select \"([^\"]*)\" as option from drop down to enter day electricity usage$")
	public void i_select_as_option_from_drop_down_to_enter_day_electricity_usage(String period) throws Throwable {
		EnergyElectricityPlatformPage.eleUsagePeriod(period);
	}

	@Then("^I select electricity current spend period as \"([^\"]*)\" from drop down option$")
	public void i_select_electricity_current_spend_period_as_from_drop_down_option(String period) throws Throwable {
		EnergyElectricityPlatformPage.currentEleSpendPeriod(period);
	}

	@Then("^I enter the value \"([^\"]*)\" as current electricity spend in the given textbox$")
	public void i_enter_the_value_as_current_electricity_spend_in_the_given_textbox(String value) throws Throwable {
		EnergyElectricityPlatformPage.enterElecUsageValue(value);
	}

	@Then("^I enter the value \"([^\"]*)\" as day electricity usage in the given textbox$")
	public void i_enter_the_value_as_day_electricity_usage_in_the_given_textbox(String value) throws Throwable {
		EnergyElectricityPlatformPage.enterElecDayUsageValue(value);
	}

	@Then("^I enter the value \"([^\"]*)\" as night electricity usage in the given textbox$")
	public void i_enter_the_value_as_night_electricity_usage_in_the_given_textbox(String value) throws Throwable {
		EnergyElectricityPlatformPage.enterElecNightUsageValue(value);
	}

	@When("^I click on Next button at below right to navigate to Gas energy page$")
	public void i_click_on_Next_button_at_below_right_to_navigate_to_Gas_energy_page() throws Throwable {
		EnergyElectricityPlatformPage.clickNextToGasPage();
	}

}
