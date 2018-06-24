$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("compareElectricity.feature");
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
      "name": "@Electricity"
    }
  ]
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
  "duration": 15433575643,
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
  "duration": 3006931077,
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
  "duration": 1072680339,
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
  "duration": 5000272501,
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
  "duration": 36421767,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User Gas Comparison journey",
  "description": "",
  "id": "web-::-user-energy-comparison-journey;user-gas-comparison-journey",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I click on \"no-bill-label\" as i have my bill handy",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Electricity only label as i want to compare electricity only",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select \"Ecotricity\" as my current electricity supplier from the drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Next button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to navigate to energy page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I check the Yes checkbox as i use pre-payment meter",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I check the No checkbox as i do not have an Economy 7 meter",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select electricity current spend period as \"Monthly\" from drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter the value \"40\" as current electricity spend in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on the Next button at below right to navigate to preferences and contact details page",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should be able to navigate to preferences and contact details page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on Fixed tariff label to choose the tariff i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter my email address as \"def@gmail.com\" in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I check the given check box to confirm that i have read and undrestood terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on Go to prices button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should be able to navigate to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I see filter recommendation subheading as \"Recommended tariffs for you\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I check postcode \"PE2 6YS\" i have entered displayed under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check if it is showing \"Ecotricity\" as my electricity supplier under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I check if it is showing Projection as \"40.00 monthly\" under energy usage section",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I check if it is showing Projection as \"480 annually\" under energy usage section",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I see filter results heading as \"Personalise your results\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I check if Fixed tariff type checkbox is checked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I check if Variable tariff type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I see filter recommendation subheading as \"Recommended tariffs for you\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I see \"Supplier\" heading available under recomendation subheading",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I see \"Annual saving\" heading available next to Supplier heading",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I see \"Estimated bill\" heading available next to Annual saving heading",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I see \"Tariff type\" heading available next to Estimated bill heading",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I see \"Payment type\" heading available next to Tariff type heading",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I See \"Supplier rating\" heading available next to Payment type heading",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I should be able to see tariff results",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "I close the browser",
  "keyword": "And "
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
  "duration": 376967231,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Electricity_only_label_as_i_want_to_compare_electricity_only()"
});
formatter.result({
  "duration": 376416070,
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
  "duration": 520002156,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Next_button_at_below_right()"
});
formatter.result({
  "duration": 409349718,
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
  "duration": 2999521712,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_should_be_able_to_navigate_to_energy_page()"
});
formatter.result({
  "duration": 31386395,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_check_the_Yes_checkbox_as_i_use_pre_payment_meter()"
});
formatter.result({
  "duration": 279483120,
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
  "duration": 264770620,
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
  "duration": 110854119,
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
  "duration": 60990498,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_click_on_the_Next_button_at_below_right_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 511477126,
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
  "duration": 3000688694,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_should_be_able_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 47894530,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Fixed_tariff_label_to_choose_the_tariff_i_am_interested_in()"
});
formatter.result({
  "duration": 333542029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserDetailsStepDef.i_enter_my_email_address_as_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 190769854,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_check_the_given_check_box_to_confirm_that_i_have_read_and_undrestood_terms_and_conditions()"
});
formatter.result({
  "duration": 388925467,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Go_to_prices_button_at_below_right()"
});
formatter.result({
  "duration": 370529324,
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
  "duration": 10000425430,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_navigate_to_results_page()"
});
formatter.result({
  "duration": 42289524,
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
  "duration": 29104262,
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
  "duration": 27084878,
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
  "duration": 24006794,
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
  "duration": 23983188,
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
  "duration": 28817391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Personalise your results",
      "offset": 33
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_results_heading_as(String)"
});
formatter.result({
  "duration": 23735320,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Fixed_tariff_type_checkbox_is_checked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 57529066,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Variable_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 48212192,
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
  "duration": 22354339,
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
  "duration": 27934200,
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
  "duration": 34685662,
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
  "duration": 41010154,
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
  "duration": 22896262,
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
  "duration": 20207172,
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
  "duration": 28487926,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_see_tariff_results()"
});
formatter.result({
  "duration": 13390024,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 1276388102,
  "status": "passed"
});
formatter.uri("compareGas.feature");
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
      "name": "@Gas"
    }
  ]
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
  "duration": 10110227521,
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
  "duration": 3001507738,
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
  "duration": 1032082787,
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
  "duration": 5000276607,
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
  "duration": 30257388,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User Gas Comparison journey",
  "description": "",
  "id": "web-::-user-energy-comparison-journey;user-gas-comparison-journey",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I click on \"no-bill-label\" as i have my bill handy",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Gas only label as i want to compare gas only",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I check the \"I don\u0027t know\" checkbox as i am not aware who is my current gas supplier is",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Next button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to navigate to \"Your Energy\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I check the No checkbox as i do not use pre-payment meter",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I check the \"I don\u0027t know\" checkbox as i do not know how much i spend on gas",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Next button at below right to navigate to \"Your energy usage\" page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should be able to navigate to \"Your energy usage\" web page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I select \"1-2 Bedrooms\" as size of my home",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select \"1-2 Occupants\" as no of people live at house",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select \"Other heating\" as my main source of energy for heating",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select \"Tropical\" as temperature i keep at home",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select \"Well wrapped\" to describe insulation at my home",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select \"Electricity\" as my main source of energy for cooking",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select \"Evening and weekends\" to answer when someone stay at home",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on the Next button at below right to navigate to personal details page",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I should be able to navigate to preferences and contact details page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on Variable tariff label to choose the tariff i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Monthly direct debit label to choose payment type i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter my email address as \"ghi@gmail.com\" in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I check the given check box to confirm that i have read and undrestood terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on Go to prices button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should be able to navigate to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I check postcode \"PE2 6YS\" i have entered displayed under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I check if it is showing \"British Gas\" as my default gas supplier under supplier details section",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I see filter results heading as \"Personalise your results\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I check if Fixed tariff type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I check if Variable tariff type checkbox is checked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I check if Monthly Payment type checkbox is checked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I check if Quarterly Payment type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I check if Pay on receipt of bill Payment type checkbox is unchecked under Personalise your results section",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I see filter recommendation subheading as \"Recommended tariffs for you\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I see \"Supplier\" heading available under recomendation subheading",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I see \"Annual saving\" heading available next to Supplier heading",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I see \"Estimated bill\" heading available next to Annual saving heading",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I see \"Tariff type\" heading available next to Estimated bill heading",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I see \"Payment type\" heading available next to Tariff type heading",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I See \"Supplier rating\" heading available next to Payment type heading",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I should be able to see tariff results",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I close the browser",
  "keyword": "And "
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
  "duration": 355508913,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Gas_only_label_as_i_want_to_compare_gas_only()"
});
formatter.result({
  "duration": 394331359,
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
  "duration": 577080645,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Next_button_at_below_right()"
});
formatter.result({
  "duration": 724308290,
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
  "duration": 3000049266,
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
  "duration": 37729361,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_check_the_No_checkbox_as_i_don_t_use_pre_payment_meter()"
});
formatter.result({
  "duration": 287430303,
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
  "duration": 292038192,
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
  "duration": 509386923,
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
  "duration": 3000172943,
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
  "duration": 24202318,
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
  "duration": 274726922,
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
  "duration": 263329083,
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
  "duration": 273774450,
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
  "duration": 256310251,
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
  "duration": 302616473,
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
  "duration": 293263677,
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
  "duration": 281070401,
  "status": "passed"
});
formatter.match({
  "location": "EnergyUsageQuestionaryStepDef.i_click_on_the_Next_button_at_below_right_to_navigate_to_personal_details_page()"
});
formatter.result({
  "duration": 477976409,
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
  "duration": 2999690550,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_should_be_able_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "duration": 26228886,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Variable_tariff_label_to_choose_the_tariff_i_am_interested_in()"
});
formatter.result({
  "duration": 300826484,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Monthly_direct_debit_label_to_choose_payment_type_i_am_interested_in()"
});
formatter.result({
  "duration": 348612220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserDetailsStepDef.i_enter_my_email_address_as_in_the_given_textbox(String)"
});
formatter.result({
  "duration": 235909095,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_check_the_given_check_box_to_confirm_that_i_have_read_and_undrestood_terms_and_conditions()"
});
formatter.result({
  "duration": 442553301,
  "status": "passed"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Go_to_prices_button_at_below_right()"
});
formatter.result({
  "duration": 373030076,
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
  "duration": 10000023607,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_navigate_to_results_page()"
});
formatter.result({
  "duration": 34957136,
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
  "duration": 34957136,
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
  "duration": 39955558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Personalise your results",
      "offset": 33
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_results_heading_as(String)"
});
formatter.result({
  "duration": 54294974,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Fixed_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 158028652,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Variable_tariff_type_checkbox_is_checked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 73961249,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Monthly_Payment_type_checkbox_is_checked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 69268686,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Quarterly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 65766198,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Pay_on_receipt_of_bill_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "duration": 61713063,
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
  "duration": 25535573,
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
  "duration": 24591825,
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
  "duration": 20576153,
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
  "duration": 19924408,
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
  "duration": 48369226,
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
  "duration": 37194110,
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
  "duration": 27775625,
  "status": "passed"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_see_tariff_results()"
});
formatter.result({
  "duration": 14030478,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDef.i_close_the_browser()"
});
formatter.result({
  "duration": 1492189580,
  "status": "passed"
});
formatter.uri("compareGasElectricity.feature");
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
      "name": "@GasElectricity"
    }
  ]
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
  "duration": 10095699766,
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
  "duration": 3003026765,
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
  "duration": 941192591,
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
  "duration": 4999688496,
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
  "duration": 72768607,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Gas \u0026 Electricity Comparison journey",
  "description": "",
  "id": "web-::-user-energy-comparison-journey;user-gas-\u0026-electricity-comparison-journey",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I click on \"have-bill-label\" as i have my bill handy",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Gas \u0026 Electricity as i want to compare both",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I check the No checkbox as my gas \u0026 electricity are not from the same supplier",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on EDF Energy as my current electricity supplier",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on British Gas as my current gas supplier",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Next button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to navigate to energy electricity page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I select \"Simply Fixed Apr20\" as my current electricity tariff under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I check the Yes checkbox as i have an Economy 7 meter",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select \"Monthly Direct Debit\" as my electricity method of pay under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I check the Yes checkbox to indicate that electricity as my main source of heating",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I check the kWh checkbox to give my current electricty usgae",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select \"Annually\" as option from drop down to enter day electricity usage",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter the value \"240\" as day electricity usage in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter the value \"120\" as night electricity usage in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on Next button at below right to navigate to Gas energy page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should be able to navigate to energy gas page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I select \"HomeEnergy Fix July 2019\" as my current gas tariff under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select \"Monthly Direct Debit\" as my gas method of pay under drop down option",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I check the No checkbox to indicate that gas is not my main source of heating",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I check the kWh checkbox to give my current gas usgae",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I select \"Annually\" as option from drop down to enter current gas usage",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter the value \"340\" as current gas usage in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the Next button at below right to navigate to preferences and contact details page",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should be able to navigate to preferences and contact details page",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I click on All tariffs option to choose the tariff i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on All payment types option to choose payment type i am interested in",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter my email address as \"abc@gmail.com\" in the given textbox",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I check the given check box to confirm that i have read and undrestood terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on Go to prices button at below right",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I should be able to navigate to results page",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I see filter recommendation subheading as \"Recommended tariffs for you\"",
  "keyword": "And "
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
  "name": "I see filter results heading as \"Personalise your results\"",
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
formatter.step({
  "line": 81,
  "name": "I close the browser",
  "keyword": "And "
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
  "duration": 487117260,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Gas_Electricity_as_i_want_to_compare_both()"
});
formatter.result({
  "duration": 684460501,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_check_the_No_checkbox_as_my_gas_electricity_are_not_from_the_same_supplier()"
});
formatter.result({
  "duration": 600586570,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_EDF_Energy_as_my_current_electricity_supplier()"
});
formatter.result({
  "duration": 514720969,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_British_Gas_as_my_current_gas_supplier()"
});
formatter.result({
  "duration": 676734501,
  "status": "passed"
});
formatter.match({
  "location": "EnergySupplierStepDef.i_click_on_Next_button_at_below_right()"
});
formatter.result({
  "duration": 615675750,
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
  "duration": 3000144718,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_should_be_able_to_navigate_to_energy_electricity_page()"
});
formatter.result({
  "duration": 36801010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simply Fixed Apr20",
      "offset": 10
    }
  ],
  "location": "EnergyElectricityStepDef.i_select_as_my_current_electricity_tariff_under_drop_down_option(String)"
});
formatter.result({
  "duration": 583693547,
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
  "duration": 287163960,
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
  "duration": 80350402,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_check_the_Yes_checkbox_to_indicate_that_electricity_as_my_main_source_of_heating()"
});
formatter.result({
  "duration": 275048689,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_check_the_kWh_checkbox_to_give_my_current_electricty_usgae()"
});
formatter.result({
  "duration": 291283809,
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
  "duration": 133293647,
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
  "duration": 127678890,
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
  "duration": 79000726,
  "status": "passed"
});
formatter.match({
  "location": "EnergyElectricityStepDef.i_click_on_Next_button_at_below_right_to_navigate_to_Gas_energy_page()"
});
formatter.result({
  "duration": 302662660,
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
  "duration": 3000344860,
  "status": "passed"
});
formatter.match({
  "location": "EnergyGasStepDef.i_should_be_able_to_navigate_to_energy_gas_page()"
});
formatter.result({
  "duration": 40788971,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Gas]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.test.steps.EnergyGasStepDef.i_should_be_able_to_navigate_to_energy_gas_page(EnergyGasStepDef.java:26)\r\n\tat ✽.Then I should be able to navigate to energy gas page(compareGasElectricity.feature:44)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EnergyGasStepDef.i_check_the_No_checkbox_to_indicate_that_gas_is_not_my_main_source_of_heating()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnergyGasStepDef.i_check_the_kWh_checkbox_to_give_my_current_gas_usgae()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EnergyGasStepDef.i_click_on_the_Next_button_at_below_right_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "UserDetailsStepDef.i_should_be_able_to_navigate_to_preferences_and_contact_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_All_tariffs_option_to_choose_the_tariff_i_am_interested_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_All_payment_types_option_to_choose_payment_type_i_am_interested_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 29
    }
  ],
  "location": "UserDetailsStepDef.i_enter_my_email_address_as_in_the_given_textbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserDetailsStepDef.i_check_the_given_check_box_to_confirm_that_i_have_read_and_undrestood_terms_and_conditions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserDetailsStepDef.i_click_on_Go_to_prices_button_at_below_right()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_navigate_to_results_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Personalise your results",
      "offset": 33
    }
  ],
  "location": "EnergyResultsStepDef.i_see_filter_results_heading_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Fixed_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Variable_tariff_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Monthly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Quarterly_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_check_if_Pay_on_receipt_of_bill_Payment_type_checkbox_is_unchecked_under_Personalise_your_results_section()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EnergyResultsStepDef.i_should_be_able_to_see_tariff_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonStepDef.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});