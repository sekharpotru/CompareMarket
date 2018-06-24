$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("compareEnergy.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 2,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 3,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 4,
      "value": "#When: Some key actions"
    },
    {
      "line": 5,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 6,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 7,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 8,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 9,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 10,
      "value": "#\"\""
    },
    {
      "line": 11,
      "value": "## (Comments)"
    }
  ],
  "line": 13,
  "name": "Web :: User Energy Comparison journey",
  "description": "In order to collate the information required to get quotes from companies that provide the energy \nAs a user\nI want a website which will allow me to search with different options to compare and find the best price for my energy",
  "id": "web-::-user-energy-comparison-journey",
  "keyword": "Feature",
  "tags": [
    {
      "line": 12,
      "name": "@EnergyCompare"
    }
  ]
});
formatter.before({
  "duration": 7129209721,
  "status": "passed"
});
formatter.background({
  "line": 18,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 19,
  "name": "I navigate to energy comparethemarket website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Find postcode button after I enter postcode as \"PE2 6YS\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Website accepts it and displays option to \"change-postcode\" if needed",
  "keyword": "Then "
});
formatter.match({
  "location": "EnergySupplierStepDef.i_navigate_to_energy_comparethemarket_website()"
});
formatter.result({
  "duration": 3028010151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3004372850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 59
    }
  ],
  "location": "EnergySupplierStepDef.i_click_on_Find_postcode_button_after_I_enter_postcode_as(String)"
});
formatter.result({
  "duration": 1212874272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 5000184746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "change-postcode",
      "offset": 43
    }
  ],
  "location": "EnergySupplierStepDef.website_accepts_it_and_give_the_user_option_to_if_needed(String)"
});
formatter.result({
  "duration": 28847668,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User Gas \u0026 Electricity Comparison journey",
  "description": "",
  "id": "web-::-user-energy-comparison-journey;user-gas-\u0026-electricity-comparison-journey",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@GasElectricity"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I click on \"have-bill-label\" as i have my bill handy",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Gas \u0026 Electricity as i want to compare both",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I check the No checkbox as my gas \u0026 electricity are not from the same supplier",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on EDF Energy as my current electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on British Gas as my current gas supplier",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Next button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to navigate to energy electricity page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I select \"Simply Fixed Apr20\" as my current electricity plan under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I check the Yes checkbox as i have an Economy 7 meter",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select \"Monthly Direct Debit\" as my electricity method of pay under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I check the Yes checkbox to indicate that electricity as my main source of heating",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I check the kWh checkbox to give my current electricty usgae",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \"Annually\" as option from drop down to enter day electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter the value \"240\" as day electricity usage in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter the value \"120\" as night electricity usage in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Next button at below right to navigate to Gas energy page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should be able to navigate to energy gas page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I select \"HomeEnergy Fix July 2019\" as my current gas tariff under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select \"Monthly Direct Debit\" as my gas method of pay under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the No checkbox to indicate that gas is not my main source of heating",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I check the kWh checkbox to give my current gas usgae",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I select \"Annually\" as option from drop down to enter current gas usage",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter the value \"340\" as current gas usage in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the Next button at below right to navigate to preferences and contact details page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should be able to navigate to preferences and contact details page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I click on All tariffs option to choose the tariff i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on All payment types option to choose payment type i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter my email address as \"richmond.adam@gmail.com\" in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I check the given check box to confirm that i have read and undrestood terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on Go to prices button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I should be able to navigate to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "I check postcode \"PE2 6YS\" i have entered displayed under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I check if it is showing \"EDF Energy\" as my electricity supplier under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I check if it is showing \"British Gas\" as my gas supplier under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I check if it is showing Electricity as \"360 kWh\" under energy usage section",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I check if it is showing Gas as \"340 kWh\" under energy usage section",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I see filter results heading as \"Personalise your results\" on leftside",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I check if Fixed tariff type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I check if Variable tariff type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I check if Monthly Payment type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I check if Quarterly Payment type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I check if Pay on receipt of bill Payment type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I see filter recommendation subheading as \"Recommended tariffs for you\"",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I see \"Supplier\" heading available under recomendation subheading",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I see \"Annual saving\" heading available next to Supplier heading",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I see \"Estimated bill\" heading available next to Annual saving heading",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I see \"Tariff type\" heading available next to Estimated bill heading",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I see \"Payment type\" heading available next to Tariff type heading",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I See \"Supplier rating\" heading available next to Payment type heading",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I should be able to see tariff results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "have-bill-label",
      "offset": 12
    }
  ],
  "location": "EnergySupplierStepDef.i_click_on_as_i_have_my_bill_handy(String)"
});
formatter.result({
  "duration": 308915819,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Gas_Electricity_as_i_want_to_compare_both()"
});
formatter.result({
  "duration": 365520126,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_check_the_No_checkbox_as_my_gas_electricity_are_not_from_the_same_supplier()"
});
formatter.result({
  "duration": 359477886,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_EDF_Energy_as_my_current_electricity_supplier()"
});
formatter.result({
  "duration": 391460089,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_British_Gas_as_my_current_gas_supplier()"
});
formatter.result({
  "duration": 428076864,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Next_button_at_below_right()"
});
formatter.result({
  "duration": 342446815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 2999476038,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_should_be_able_to_navigate_to_energy_electricity_page()"
});
formatter.result({
  "duration": 35613499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simply Fixed Apr20",
      "offset": 10
    }
  ],
  "location": "EnergyElectricityStepDef.i_select_as_my_current_electricity_plan_under_drop_down_option(String)"
});
formatter.result({
  "duration": 372614395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 46
    }
  ],
  "location": "EnergyElectricityStepDef.i_check_the_Yes_checkbox_as_i_have_an_Economy_meter(int)"
});
formatter.result({
  "duration": 310012496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly Direct Debit",
      "offset": 10
    }
  ],
  "location": "EnergyElectricityStepDef.i_select_as_my_electricity_method_of_pay_under_drop_down_option(String)"
});
formatter.result({
  "duration": 171087157,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_check_the_Yes_checkbox_to_indicate_that_electricity_as_my_main_source_of_heating()"
});
formatter.result({
  "duration": 342086046,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_check_the_kWh_checkbox_to_give_my_current_electricty_usgae()"
});
formatter.result({
  "duration": 377136581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annually",
      "offset": 10
    }
  ],
  "location": "EnergyElectricityStepDef.i_select_as_option_from_drop_down_to_enter_day_electricity_usage(String)"
});
formatter.result({
  "duration": 156138591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "240",
      "offset": 19
    }
  ],
  "location": "EnergyElectricityStepDef.i_enter_the_value_as_day_electricity_usage_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 123011472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 19
    }
  ],
  "location": "EnergyElectricityStepDef.i_enter_the_value_as_night_electricity_usage_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 103374448,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_click_on_Next_button_at_below_right_to_navigate_to_Gas_energy_page()"
});
formatter.result({
  "duration": 428131263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3000297134,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_should_be_able_to_navigate_to_energy_gas_page()"
});
formatter.result({
  "duration": 41277010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HomeEnergy Fix July 2019",
      "offset": 10
    }
  ],
  "location": "EnergyGasStepDef.i_select_as_my_current_gas_tariff_under_drop_down_option(String)"
});
formatter.result({
  "duration": 384073817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly Direct Debit",
      "offset": 10
    }
  ],
  "location": "EnergyGasStepDef.i_select_as_my_gas_method_of_pay_under_drop_down_option(String)"
});
formatter.result({
  "duration": 128726814,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_check_the_No_checkbox_to_indicate_that_gas_is_not_my_main_source_of_heating()"
});
formatter.result({
  "duration": 377754969,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_check_the_kWh_checkbox_to_give_my_current_gas_usgae()"
});
formatter.result({
  "duration": 415954922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annually",
      "offset": 10
    }
  ],
  "location": "EnergyGasStepDef.i_select_as_option_from_drop_down_to_enter_current_gas_usage(String)"
});
formatter.result({
  "duration": 144195236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "340",
      "offset": 19
    }
  ],
  "location": "EnergyGasStepDef.i_enter_the_value_as_current_gas_usage_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 144211145,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_click_on_the_Next_button_at_below_right_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 663933614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3000546029,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_should_be_able_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 35366658,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_All_tariffs_option_to_choose_the_tariff_i_am_interested_in()"
});
formatter.result({
  "duration": 345041991,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_All_payment_types_option_to_choose_payment_type_i_am_interested_in()"
});
formatter.result({
  "duration": 393418402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "richmond.adam@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserDetailsStepDef.i_enter_my_email_address_as_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 275604981,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_check_the_given_check_box_to_confirm_that_i_have_read_and_undrestood_terms_and_conditions()"
});
formatter.result({
  "duration": 472082479,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Go_to_prices_button_at_below_right()"
});
formatter.result({
  "duration": 405354572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 5000027712,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_navigate_to_results_page()"
});
formatter.result({
  "duration": 46011655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 18
    }
  ],
  "location": "EnergyResultsStepDef.i_check_postcode_i_have_entered_displayed_under_supplier_details_section(String)"
});
formatter.result({
  "duration": 29938700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EDF Energy",
      "offset": 26
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_as_my_electricity_supplier_under_supplier_details_section(String)"
});
formatter.result({
  "duration": 27967556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Gas",
      "offset": 26
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_as_my_gas_supplier_under_supplier_details_section(String)"
});
formatter.result({
  "duration": 29142751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "360 kWh",
      "offset": 41
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_Electricity_as_under_energy_usage_section(String)"
});
formatter.result({
  "duration": 26283797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "340 kWh",
      "offset": 33
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_Gas_as_under_energy_usage_section(String)"
});
formatter.result({
  "duration": 30202477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Personalise your results",
      "offset": 33
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_results_heading_as_on_leftside(String)"
});
formatter.result({
  "duration": 22178316,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Fixed_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 50224390,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Variable_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 41047103,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Monthly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 67853321,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Quarterly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 49505931,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Pay_on_receipt_of_bill_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 50561039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended tariffs for you",
      "offset": 43
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_recommendation_subheading_as(String)"
});
formatter.result({
  "duration": 30384658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_under_recomendation_subheading(String)"
});
formatter.result({
  "duration": 24007308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual saving",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Supplier_heading(String)"
});
formatter.result({
  "duration": 32551838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimated bill",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Annual_saving_heading(String)"
});
formatter.result({
  "duration": 26522940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tariff type",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Estimated_bill_heading(String)"
});
formatter.result({
  "duration": 25426265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment type",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Tariff_type_heading(String)"
});
formatter.result({
  "duration": 23099996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier rating",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_See_heading_available_next_to_Payment_type_heading(String)"
});
formatter.result({
  "duration": 17803928,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_see_tariff_results()"
});
formatter.result({
  "duration": 13325362,
  "status": "passed"
});
formatter.after({
  "duration": 1278859600,
  "status": "passed"
});
formatter.before({
  "duration": 5982547091,
  "status": "passed"
});
formatter.background({
  "line": 18,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 19,
  "name": "I navigate to energy comparethemarket website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Find postcode button after I enter postcode as \"PE2 6YS\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Website accepts it and displays option to \"change-postcode\" if needed",
  "keyword": "Then "
});
formatter.match({
  "location": "EnergySupplierStepDef.i_navigate_to_energy_comparethemarket_website()"
});
formatter.result({
  "duration": 2765842406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3000115980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 59
    }
  ],
  "location": "EnergySupplierStepDef.i_click_on_Find_postcode_button_after_I_enter_postcode_as(String)"
});
formatter.result({
  "duration": 1161587076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 5000341781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "change-postcode",
      "offset": 43
    }
  ],
  "location": "EnergySupplierStepDef.website_accepts_it_and_give_the_user_option_to_if_needed(String)"
});
formatter.result({
  "duration": 23713766,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "User Gas Comparison journey",
  "description": "",
  "id": "web-::-user-energy-comparison-journey;user-gas-comparison-journey",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@Gas"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I click on \"no-bill-label\" as i have my bill handy",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on Gas only label as i want to compare gas only",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I check the \"I don\u0027t know\" checkbox as i am not aware who is my current gas supplier is",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click on Next button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I should be able to navigate to \"Your Energy\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I check the No checkbox as i do not use pre-payment meter",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I check the \"I don\u0027t know\" checkbox as i do not know how much i spend on gas",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I click on Next button at below right to navigate to \"Your energy usage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I should be able to navigate to \"Your energy usage\" web page",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I select \"1-2 Bedrooms\" as size of my home",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I select \"1-2 Occupants\" as no of people live at house",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I select \"Other heating\" as my main source of energy for heating",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I select \"Tropical\" as temperature i keep at home",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I select \"Well wrapped\" to describe insulation at my home",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I select \"Electricity\" as my main source of energy for cooking",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I select \"Evening and weekends\" to answer when someone stay at home",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click on the Next button at below right to navigate to personal details page",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I should be able to navigate to preferences and contact details page",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I click on Variable tariff label to choose the tariff i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click on Monthly direct debit label to choose payment type i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I enter my email address as \"shushi.muvva@hotmail.com\" in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I check the given check box to confirm that i have read and undrestood terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I click on Go to prices button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I should be able to navigate to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "I check postcode \"PE2 6YS\" i have entered displayed under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I check if it is showing \"British Gas\" as my default gas supplier under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I see filter results heading as \"Personalise your results\" on leftside",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I check if Fixed tariff type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I check if Variable tariff type checkbox is checked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I check if Monthly Payment type checkbox is checked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I check if Quarterly Payment type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I check if Pay on receipt of bill Payment type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I see filter recommendation subheading as \"Recommended tariffs for you\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I see \"Supplier\" heading available under recomendation subheading",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I see \"Annual saving\" heading available next to Supplier heading",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I see \"Estimated bill\" heading available next to Annual saving heading",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I see \"Tariff type\" heading available next to Estimated bill heading",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I see \"Payment type\" heading available next to Tariff type heading",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I See \"Supplier rating\" heading available next to Payment type heading",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I should be able to see tariff results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "no-bill-label",
      "offset": 12
    }
  ],
  "location": "EnergySupplierStepDef.i_click_on_as_i_have_my_bill_handy(String)"
});
formatter.result({
  "duration": 345175933,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Gas_only_label_as_i_want_to_compare_gas_only()"
});
formatter.result({
  "duration": 329303121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I don\u0027t know",
      "offset": 13
    }
  ],
  "location": "EnergySupplierStepDef.i_check_the_checkbox_as_i_am_not_aware_who_is_my_current_gas_supplier_is(String)"
});
formatter.result({
  "duration": 305535984,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Next_button_at_below_right()"
});
formatter.result({
  "duration": 538510172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 2999310792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Energy",
      "offset": 33
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_should_be_able_to_navigate_to_page(String)"
});
formatter.result({
  "duration": 20473516,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_check_the_No_checkbox_as_i_don_t_use_pre_payment_meter()"
});
formatter.result({
  "duration": 265572727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I don\u0027t know",
      "offset": 13
    }
  ],
  "location": "EnergyGasStepDef.i_check_the_checkbox_as_i_do_not_know_how_much_i_spend_on_gas(String)"
});
formatter.result({
  "duration": 308826012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your energy usage",
      "offset": 54
    }
  ],
  "location": "EnergyGasStepDef.i_click_on_Next_button_at_below_right_to_navigate_to_page(String)"
});
formatter.result({
  "duration": 600210406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 2999811148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your energy usage",
      "offset": 33
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_should_be_able_to_navigate_to_web_page(String)"
});
formatter.result({
  "duration": 25788059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1-2 Bedrooms",
      "offset": 10
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_select_as_size_of_my_home(String)"
});
formatter.result({
  "duration": 274356915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1-2 Occupants",
      "offset": 10
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_select_as_no_of_people_live_at_house(String)"
});
formatter.result({
  "duration": 280605969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Other heating",
      "offset": 10
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_select_as_my_main_source_of_energy_for_heating(String)"
});
formatter.result({
  "duration": 266273225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tropical",
      "offset": 10
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_select_as_temperature_i_keep_at_home(String)"
});
formatter.result({
  "duration": 269463183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Well wrapped",
      "offset": 10
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_select_to_describe_insulation_at_my_home(String)"
});
formatter.result({
  "duration": 289674461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electricity",
      "offset": 10
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_select_as_my_main_source_of_energy_for_cooking(String)"
});
formatter.result({
  "duration": 259892283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Evening and weekends",
      "offset": 10
    }
  ],
  "location": "EnergyUsageQuestionaryStepDef.i_select_to_answer_when_someone_stay_at_home(String)"
});
formatter.result({
  "duration": 259601820,
  "status": "passed"
});
formatter.match({
  "location": "EnergyUsageQuestionaryStepDef.i_click_on_the_Next_button_at_below_right_to_navigate_to_personal_details_page()"
});
formatter.result({
  "duration": 453307606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3000195524,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_should_be_able_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 45991127,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Variable_tariff_label_to_choose_the_tariff_i_am_interested_in()"
});
formatter.result({
  "duration": 280755306,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Monthly_direct_debit_label_to_choose_payment_type_i_am_interested_in()"
});
formatter.result({
  "duration": 337480723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shushi.muvva@hotmail.com",
      "offset": 29
    }
  ],
  "location": "UserDetailsStepDef.i_enter_my_email_address_as_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 210234449,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_check_the_given_check_box_to_confirm_that_i_have_read_and_undrestood_terms_and_conditions()"
});
formatter.result({
  "duration": 352705383,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Go_to_prices_button_at_below_right()"
});
formatter.result({
  "duration": 356295112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 9999714669,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_navigate_to_results_page()"
});
formatter.result({
  "duration": 34101657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 18
    }
  ],
  "location": "EnergyResultsStepDef.i_check_postcode_i_have_entered_displayed_under_supplier_details_section(String)"
});
formatter.result({
  "duration": 25823470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "British Gas",
      "offset": 26
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_as_my_default_gas_supplier_under_supplier_details_section(String)"
});
formatter.result({
  "duration": 26581957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Personalise your results",
      "offset": 33
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_results_heading_as_on_leftside(String)"
});
formatter.result({
  "duration": 26632250,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Fixed_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 44275549,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Variable_tariff_type_checkbox_is_checked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 51036249,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Monthly_Payment_type_checkbox_is_checked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 42053971,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Quarterly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 45434321,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Pay_on_receipt_of_bill_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 44936019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended tariffs for you",
      "offset": 43
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_recommendation_subheading_as(String)"
});
formatter.result({
  "duration": 22548836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_under_recomendation_subheading(String)"
});
formatter.result({
  "duration": 21556850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual saving",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Supplier_heading(String)"
});
formatter.result({
  "duration": 19309612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimated bill",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Annual_saving_heading(String)"
});
formatter.result({
  "duration": 24194620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tariff type",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Estimated_bill_heading(String)"
});
formatter.result({
  "duration": 19990608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment type",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Tariff_type_heading(String)"
});
formatter.result({
  "duration": 17719252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier rating",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_See_heading_available_next_to_Payment_type_heading(String)"
});
formatter.result({
  "duration": 19114089,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_see_tariff_results()"
});
formatter.result({
  "duration": 8551715,
  "status": "passed"
});
formatter.after({
  "duration": 1284871049,
  "status": "passed"
});
formatter.before({
  "duration": 5894616432,
  "status": "passed"
});
formatter.background({
  "line": 18,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 19,
  "name": "I navigate to energy comparethemarket website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Find postcode button after I enter postcode as \"PE2 6YS\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Website accepts it and displays option to \"change-postcode\" if needed",
  "keyword": "Then "
});
formatter.match({
  "location": "EnergySupplierStepDef.i_navigate_to_energy_comparethemarket_website()"
});
formatter.result({
  "duration": 2518292736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3000004105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 59
    }
  ],
  "location": "EnergySupplierStepDef.i_click_on_Find_postcode_button_after_I_enter_postcode_as(String)"
});
formatter.result({
  "duration": 1029139158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 4999824490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "change-postcode",
      "offset": 43
    }
  ],
  "location": "EnergySupplierStepDef.website_accepts_it_and_give_the_user_option_to_if_needed(String)"
});
formatter.result({
  "duration": 26070824,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "User Gas Comparison journey",
  "description": "",
  "id": "web-::-user-energy-comparison-journey;user-gas-comparison-journey",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 129,
      "name": "@Electricity"
    }
  ]
});
formatter.step({
  "line": 131,
  "name": "I click on \"no-bill-label\" as i have my bill handy",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I click on Electricity only label as i want to compare electricity only",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I select \"Ecotricity\" as my current electricity supplier from the drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I click on Next button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I should be able to navigate to energy page",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "I check the Yes checkbox as i use pre-payment meter",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I check the No checkbox as i do not have an Economy 7 meter",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I select electricity current spend period as \"Monthly\" from drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I enter the value \"40\" as current electricity spend in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I click on the Next button at below right to navigate to preferences and contact details page",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I should be able to navigate to preferences and contact details page",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "I click on Fixed tariff label to choose the tariff i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I enter my email address as \"shiva.sup@gmail.com\" in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I check the given check box to confirm that i have read and undrestood terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I click on Go to prices button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I should be able to navigate to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "I check postcode \"PE2 6YS\" i have entered displayed under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I check if it is showing \"Ecotricity\" as my electricity supplier under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I check if it is showing Projection as \"40.00 monthly\" under energy usage section",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I check if it is showing Projection as \"480 annually\" under energy usage section",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "I see filter results heading as \"Personalise your results\" on leftside",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I check if Fixed tariff type checkbox is checked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "I check if Variable tariff type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "I see filter recommendation subheading as \"Recommended tariffs for you\"",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "I see \"Supplier\" heading available under recomendation subheading",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I see \"Annual saving\" heading available next to Supplier heading",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I see \"Estimated bill\" heading available next to Annual saving heading",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "I see \"Tariff type\" heading available next to Estimated bill heading",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I see \"Payment type\" heading available next to Tariff type heading",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I See \"Supplier rating\" heading available next to Payment type heading",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "I should be able to see tariff results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "no-bill-label",
      "offset": 12
    }
  ],
  "location": "EnergySupplierStepDef.i_click_on_as_i_have_my_bill_handy(String)"
});
formatter.result({
  "duration": 325005196,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Electricity_only_label_as_i_want_to_compare_electricity_only()"
});
formatter.result({
  "duration": 338769331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ecotricity",
      "offset": 10
    }
  ],
  "location": "EnergySupplierStepDef.i_select_as_my_current_electricity_supplier_from_the_drop_down_option(String)"
});
formatter.result({
  "duration": 431437713,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Next_button_at_below_right()"
});
formatter.result({
  "duration": 386509392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3000347426,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_should_be_able_to_navigate_to_energy_page()"
});
formatter.result({
  "duration": 25280007,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_check_the_Yes_checkbox_as_i_use_pre_payment_meter()"
});
formatter.result({
  "duration": 291994057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 52
    }
  ],
  "location": "EnergyElectricityStepDef.i_check_the_No_checkbox_as_i_do_not_have_an_Economy_meter(int)"
});
formatter.result({
  "duration": 290229728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monthly",
      "offset": 46
    }
  ],
  "location": "EnergyElectricityStepDef.i_select_electricity_current_spend_period_as_from_drop_down_option(String)"
});
formatter.result({
  "duration": 180935177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 19
    }
  ],
  "location": "EnergyElectricityStepDef.i_enter_the_value_as_current_electricity_spend_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 79094126,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_click_on_the_Next_button_at_below_right_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 736896719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 3000653797,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_should_be_able_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 32853590,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Fixed_tariff_label_to_choose_the_tariff_i_am_interested_in()"
});
formatter.result({
  "duration": 295554022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shiva.sup@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserDetailsStepDef.i_enter_my_email_address_as_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 145861548,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_check_the_given_check_box_to_confirm_that_i_have_read_and_undrestood_terms_and_conditions()"
});
formatter.result({
  "duration": 344868022,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Go_to_prices_button_at_below_right()"
});
formatter.result({
  "duration": 362134644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(String)"
});
formatter.result({
  "duration": 10000885244,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_navigate_to_results_page()"
});
formatter.result({
  "duration": 38132725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6YS",
      "offset": 18
    }
  ],
  "location": "EnergyResultsStepDef.i_check_postcode_i_have_entered_displayed_under_supplier_details_section(String)"
});
formatter.result({
  "duration": 29893540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ecotricity",
      "offset": 26
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_as_my_electricity_supplier_under_supplier_details_section(String)"
});
formatter.result({
  "duration": 25599721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40.00 monthly",
      "offset": 40
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_Projection_as_under_energy_usage_section(String)"
});
formatter.result({
  "duration": 20024992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "480 annually",
      "offset": 40
    }
  ],
  "location": "EnergyResultsStepDef.i_check_if_it_is_showing_Projection_as_under_energy_usage_section(String)"
});
formatter.result({
  "duration": 19417381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Personalise your results",
      "offset": 33
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_results_heading_as_on_leftside(String)"
});
formatter.result({
  "duration": 26502413,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Fixed_tariff_type_checkbox_is_checked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 66572925,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Variable_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 46417584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Recommended tariffs for you",
      "offset": 43
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_recommendation_subheading_as(String)"
});
formatter.result({
  "duration": 25263071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_under_recomendation_subheading(String)"
});
formatter.result({
  "duration": 19679106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual saving",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Supplier_heading(String)"
});
formatter.result({
  "duration": 26049784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimated bill",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Annual_saving_heading(String)"
});
formatter.result({
  "duration": 19614445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tariff type",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Estimated_bill_heading(String)"
});
formatter.result({
  "duration": 20200502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment type",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_see_heading_available_next_to_Tariff_type_heading(String)"
});
formatter.result({
  "duration": 19542085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Supplier rating",
      "offset": 7
    }
  ],
  "location": "EnergyResultsStepDef.i_See_heading_available_next_to_Payment_type_heading(String)"
});
formatter.result({
  "duration": 17049546,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_see_tariff_results()"
});
formatter.result({
  "duration": 7163549,
  "status": "passed"
});
formatter.after({
  "duration": 1277167630,
  "status": "passed"
});
});