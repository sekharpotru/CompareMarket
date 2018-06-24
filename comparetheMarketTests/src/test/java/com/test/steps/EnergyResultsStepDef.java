package com.test.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import com.test.pages.EnergyResultsPlatform;

import cucumber.api.java.en.Then;

public class EnergyResultsStepDef  extends CommonUsefulMethods {

	//CommonUsefulMethods common = new CommonUsefulMethods();

	public EnergyResultsPlatform EnergyResultsPlatformPage;

	public EnergyResultsStepDef() {
		EnergyResultsPlatformPage = new EnergyResultsPlatform(driver);
	}

	@Then("^I should be able to navigate to results page$")
	public void i_should_be_able_to_navigate_to_results_page() throws Throwable {
		assertEquals("Your results", EnergyResultsPlatformPage.getResultsTitle());
	}
	@Then("^I see filter recommendation subheading as \"([^\"]*)\"$")
	public void i_see_filter_recommendation_subheading_as(String subHeading) throws Throwable {
		assertEquals(subHeading, EnergyResultsPlatformPage.recommendedTariffHeaderText());
	}
	
	@Then("^I check postcode \"([^\"]*)\" i have entered displayed under supplier details section$")
	public void i_check_postcode_i_have_entered_displayed_under_supplier_details_section(String postcode) throws Throwable {
		assertEquals(postcode, EnergyResultsPlatformPage.getSupplierPostcode());
	}
	
	@Then("^I check if it is showing \"([^\"]*)\" as my electricity supplier under supplier details section$")
	public void i_check_if_it_is_showing_as_my_electricity_supplier_under_supplier_details_section(String electricitySupplier) throws Throwable {
		assertEquals(electricitySupplier, EnergyResultsPlatformPage.getElectricitySupplierName(electricitySupplier));
	}
	
	@Then("^I check if it is showing Projection as \"([^\"]*)\" under energy usage section$")
	public void i_check_if_it_is_showing_Projection_as_under_energy_usage_section(String elecProjection) throws Throwable {
		assertTrue("Projection does not contain "+elecProjection+" ", EnergyResultsPlatformPage.getElectricityProjection(elecProjection).contains(elecProjection));
	}
	
	@Then("^I check if it is showing \"([^\"]*)\" as my gas supplier under supplier details section$")
	public void i_check_if_it_is_showing_as_my_gas_supplier_under_supplier_details_section(String gasSupplier) throws Throwable {
		assertEquals(gasSupplier, EnergyResultsPlatformPage.getGasSupplierName(gasSupplier));
	}

	@Then("^I check if it is showing \"([^\"]*)\" as my default gas supplier under supplier details section$")
	public void i_check_if_it_is_showing_as_my_default_gas_supplier_under_supplier_details_section(String gasSupplier) throws Throwable {
		assertEquals(gasSupplier, EnergyResultsPlatformPage.getDefaultGasSupplierName());
	}
	
	@Then("^I check if it is showing Electricity as \"([^\"]*)\" under energy usage section$")
	public void i_check_if_it_is_showing_Electricity_as_under_energy_usage_section(String eleUsage) throws Throwable {
		assertEquals(eleUsage, EnergyResultsPlatformPage.getElectricityUsage(eleUsage));
	}

	@Then("^I check if it is showing Gas as \"([^\"]*)\" under energy usage section$")
	public void i_check_if_it_is_showing_Gas_as_under_energy_usage_section(String gasUsage) throws Throwable {
		assertEquals(gasUsage, EnergyResultsPlatformPage.getGasUsage(gasUsage));
	}

	@Then("^I see filter results heading as \"([^\"]*)\"$")
	public void i_see_filter_results_heading_as(String filterHeading) throws Throwable {
		assertEquals(filterHeading, EnergyResultsPlatformPage.getFilterHeadingTitle());
	}
	
	@Then("^I check if Fixed tariff type checkbox is checked under Personalise your results section$")
	public void i_check_if_Fixed_tariff_type_checkbox_is_checked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("FIXED TARIFF CHECKBOX UNCHECKED ", EnergyResultsPlatformPage.fixedTariffChecked()==true);
	}
	
	@Then("^I check if Fixed tariff type checkbox is unchecked under Personalise your results section$")
	public void i_check_if_Fixed_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("FIXED TARIFF CHECKBOX CHECKED ", EnergyResultsPlatformPage.fixedTariffUnchecked()==true);
	}
	
	@Then("^I check if Variable tariff type checkbox is checked under Personalise your results section$")
	public void i_check_if_Variable_tariff_type_checkbox_is_checked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("VARIABLE TARIFF CHECKBOX UNCHECKED ", EnergyResultsPlatformPage.variableTariffChecked()==true);
	}

	@Then("^I check if Variable tariff type checkbox is unchecked under Personalise your results section$")
	public void i_check_if_Variable_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("VARIABLE TARIFF CHECKBOX CHECKED ", EnergyResultsPlatformPage.variableTariffUnchecked()==true);
	}
	
	@Then("^I check if Monthly Payment type checkbox is checked under Personalise your results section$")
	public void i_check_if_Monthly_Payment_type_checkbox_is_checked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("MONTHLY PAYMENT TYPE CHECKBOX UNCHECKED ", EnergyResultsPlatformPage.monthlyPayTypeChecked()==true);
	}
	
	@Then("^I check if Monthly Payment type checkbox is unchecked under Personalise your results section$")
	public void i_check_if_Monthly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("MONTHLY PAYMENT TYPE CHECKBOX CHECKED ", EnergyResultsPlatformPage.monthlyPayTypeUnchecked()==true);
	}

	@Then("^I check if Quarterly Payment type checkbox is unchecked under Personalise your results section$")
	public void i_check_if_Quarterly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("QUARTERLY PAYMENT TYPE CHECKBOX CHECKED ", EnergyResultsPlatformPage.quarterlyPayTypeUnchecked()==true);
	}

	@Then("^I check if Pay on receipt of bill Payment type checkbox is unchecked under Personalise your results section$")
	public void i_check_if_Pay_on_receipt_of_bill_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section() throws Throwable {
		assertTrue("PAY ON RECEIPT OF BILL PAYMENT TYPE CHECKBOX CHECKED ", EnergyResultsPlatformPage.payonReceiptOfBillPayTypeUnchecked()==true);
	}

	@Then("^I see \"([^\"]*)\" heading available under recomendation subheading$")
	public void i_see_heading_available_under_recomendation_subheading(String supplierHeadingTitle) throws Throwable {
		assertEquals(supplierHeadingTitle, EnergyResultsPlatformPage.getSupplierHeadingTitle());
	}

	@Then("^I see \"([^\"]*)\" heading available next to Supplier heading$")
	public void i_see_heading_available_next_to_Supplier_heading(String annualSavingheadingTitle) throws Throwable {
		assertEquals(annualSavingheadingTitle, EnergyResultsPlatformPage.getAnnualSavingHeadingTitle());
	}

	@Then("^I see \"([^\"]*)\" heading available next to Annual saving heading$")
	public void i_see_heading_available_next_to_Annual_saving_heading(String estimatedBillheadingTitle) throws Throwable {
		assertEquals(estimatedBillheadingTitle, EnergyResultsPlatformPage.getEstimatedBillHeadingTitle());
	}

	@Then("^I see \"([^\"]*)\" heading available next to Estimated bill heading$")
	public void i_see_heading_available_next_to_Estimated_bill_heading(String tariffTypeHeadingTitle) throws Throwable {
		assertEquals(tariffTypeHeadingTitle, EnergyResultsPlatformPage.getTariffTypeHeadingTitle());
	}

	@Then("^I see \"([^\"]*)\" heading available next to Tariff type heading$")
	public void i_see_heading_available_next_to_Tariff_type_heading(String paymentTypeHeadingTitle) throws Throwable {
		assertEquals(paymentTypeHeadingTitle, EnergyResultsPlatformPage.getPaymentTypeHeadingTitle());
	}

	@Then("^I See \"([^\"]*)\" heading available next to Payment type heading$")
	public void i_See_heading_available_next_to_Payment_type_heading(String supplierRatingHeadingTitle) throws Throwable {
		assertEquals(supplierRatingHeadingTitle, EnergyResultsPlatformPage.getSupplierRatingHeadingTitle());
	}
	
	@Then("^I should be able to see tariff results$")
	public void i_should_be_able_to_see_tariff_results() throws Throwable {
		assertTrue("RESULT SIZE IS EMPTY", EnergyResultsPlatformPage.resultSize()>0);
		System.out.println("COMPLETED FIRST SCENARIO :::");
	}


}
