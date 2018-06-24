package com.test.steps;

import static org.junit.Assert.assertEquals;
import com.test.pages.EnergyUsagePlatform;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnergyUsageQuestionaryStepDef extends Common {

	public EnergyUsagePlatform EnergyUsagePlatformPage;

	public EnergyUsageQuestionaryStepDef() {
		EnergyUsagePlatformPage = new EnergyUsagePlatform(driver);
	}

	@Then("^I should be able to navigate to \"([^\"]*)\" page$")
	public void i_should_be_able_to_navigate_to_page(String title) throws Throwable {
		assertEquals(title, EnergyUsagePlatformPage.getPageTitle());
	}

	@Then("^I should be able to navigate to \"([^\"]*)\" web page$")
	public void i_should_be_able_to_navigate_to_web_page(String title) throws Throwable {
		assertEquals(title, EnergyUsagePlatformPage.getUsagePageTitle());
	}

	@When("^I select \"([^\"]*)\" as size of my home$")
	public void i_select_as_size_of_my_home(String arg1) throws Throwable {
		EnergyUsagePlatformPage.selectHomeSize1to2();
	}

	@When("^I select \"([^\"]*)\" as no of people live at house$")
	public void i_select_as_no_of_people_live_at_house(String arg1) throws Throwable {
		EnergyUsagePlatformPage.noOccupied1to2();
	}

	@When("^I select \"([^\"]*)\" as my main source of energy for heating$")
	public void i_select_as_my_main_source_of_energy_for_heating(String arg1) throws Throwable {
		EnergyUsagePlatformPage.heatingSourceOther();
		;
	}

	@When("^I select \"([^\"]*)\" as temperature i keep at home$")
	public void i_select_as_temperature_i_keep_at_home(String arg1) throws Throwable {
		EnergyUsagePlatformPage.tempTropical();
	}

	@When("^I select \"([^\"]*)\" to describe insulation at my home$")
	public void i_select_to_describe_insulation_at_my_home(String arg1) throws Throwable {
		EnergyUsagePlatformPage.insulationWellWrap();
	}

	@When("^I select \"([^\"]*)\" as my main source of energy for cooking$")
	public void i_select_as_my_main_source_of_energy_for_cooking(String arg1) throws Throwable {
		EnergyUsagePlatformPage.cookSourceElectric();
	}

	@When("^I select \"([^\"]*)\" to answer when someone stay at home$")
	public void i_select_to_answer_when_someone_stay_at_home(String arg1) throws Throwable {
		EnergyUsagePlatformPage.OccuppiedEveWeekend();
	}

	@When("^I click on the Next button at below right to navigate to personal details page$")
	public void i_click_on_the_Next_button_at_below_right_to_navigate_to_personal_details_page() throws Throwable {
		EnergyUsagePlatformPage.clickNextButtonOnPage();
	}

}
