package com.test.steps;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.JavascriptExecutor;

import com.test.pages.EnergyElectricityPlatform;
import com.test.pages.EnergyGasPlatform;
import com.test.pages.EnergySupplierPlatform;
import com.test.pages.UserDetailsPlatform;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserDetailsStepDef  extends CommonUsefulMethods {
	//CommonUsefulMethods common = new CommonUsefulMethods();

	public UserDetailsPlatform UserDetailsPlatformPage;

	public UserDetailsStepDef() {
		UserDetailsPlatformPage = new UserDetailsPlatform(driver);
	}

	@Then("^I should be able to navigate to preferences and contact details page$")
	public void i_should_be_able_to_navigate_to_preferences_and_contact_details_page() throws Throwable {
		assertEquals("Your Preferences", UserDetailsPlatformPage.getPageTitle());
	}

	@When("^I click on All tariffs option to choose the tariff i am interested in$")
	public void i_click_on_All_tariffs_option_to_choose_the_tariff_i_am_interested_in() throws Throwable {
		UserDetailsPlatformPage.selectAlltariffs();
	}

	@Then("^I click on Fixed tariff label to choose the tariff i am interested in$")
	public void i_click_on_Fixed_tariff_label_to_choose_the_tariff_i_am_interested_in() throws Throwable {
		UserDetailsPlatformPage.selectFixedTariff();
	}

	@Then("^I click on Variable tariff label to choose the tariff i am interested in$")
	public void i_click_on_Variable_tariff_label_to_choose_the_tariff_i_am_interested_in() throws Throwable {
		UserDetailsPlatformPage.selectVariableTariff();
	}

	@Then("^I click on Monthly direct debit label to choose payment type i am interested in$")
	public void i_click_on_Monthly_direct_debit_label_to_choose_payment_type_i_am_interested_in() throws Throwable {
		UserDetailsPlatformPage.clickMonthlyDirectDebit();
	}

	@When("^I click on All payment types option to choose payment type i am interested in$")
	public void i_click_on_All_payment_types_option_to_choose_payment_type_i_am_interested_in() throws Throwable {
		UserDetailsPlatformPage.clickAllPaymentTypes();
	}

	@When("^I enter my email address as \"([^\"]*)\" in the given textbox$")
	public void i_enter_my_email_address_as_in_the_given_textbox(String email) throws Throwable {
		UserDetailsPlatformPage.enterEmail(email);
	}

	@When("^I check the given check box to confirm that i have read and undrestood terms and conditions$")
	public void i_check_the_given_check_box_to_confirm_that_i_have_read_and_undrestood_terms_and_conditions()
			throws Throwable {
		UserDetailsPlatformPage.acceptTc();
	}

	@When("^I click on Go to prices button at below right$")
	public void i_click_on_Go_to_prices_button_at_below_right() throws Throwable {
		UserDetailsPlatformPage.clickNextToResultsPage();
	}
}
