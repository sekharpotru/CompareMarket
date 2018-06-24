#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#@ (Tags/Labels):To group Scenarios
#""
## (Comments)
@Gas
Feature: Web :: User Energy Comparison journey
  In order to collate the information required to get quotes from companies that provide the energy 
  As a user
  I want a website which will allow me to search with different options to compare and find the best price for my energy

  Background: 
    Given I navigate to energy comparethemarket website
    And I wait for "3" seconds
    When I click on Find postcode button after I enter postcode as "PE2 6YS"
    And I wait for "5" seconds
    Then Website accepts it and displays option to "change-postcode" if needed

  
  Scenario: User Gas Comparison journey
    And I click on "no-bill-label" as i have my bill handy
    And I click on Gas only label as i want to compare gas only
    And I check the "I don't know" checkbox as i am not aware who is my current gas supplier is
    When I click on Next button at below right
    And I wait for "3" seconds
    Then I should be able to navigate to "Your Energy" page
    And I check the No checkbox as i do not use pre-payment meter
    And I check the "I don't know" checkbox as i do not know how much i spend on gas
    And I click on Next button at below right to navigate to "Your energy usage" page
    And I wait for "3" seconds
    Then I should be able to navigate to "Your energy usage" web page
    And I select "1-2 Bedrooms" as size of my home
    And I select "1-2 Occupants" as no of people live at house
    And I select "Other heating" as my main source of energy for heating
    And I select "Tropical" as temperature i keep at home
    And I select "Well wrapped" to describe insulation at my home
    And I select "Electricity" as my main source of energy for cooking
    And I select "Evening and weekends" to answer when someone stay at home
    When I click on the Next button at below right to navigate to personal details page
    And I wait for "3" seconds
    Then I should be able to navigate to preferences and contact details page
    And I click on Variable tariff label to choose the tariff i am interested in
    And I click on Monthly direct debit label to choose payment type i am interested in
    And I enter my email address as "ghi@gmail.com" in the given textbox
    And I check the given check box to confirm that i have read and undrestood terms and conditions
    When I click on Go to prices button at below right
    And I wait for "10" seconds
    Then I should be able to navigate to results page
    And I check postcode "PE2 6YS" i have entered displayed under supplier details section
    And I check if it is showing "British Gas" as my default gas supplier under supplier details section
    And I see filter results heading as "Personalise your results"
    And I check if Fixed tariff type checkbox is unchecked under Personalise your results section
    And I check if Variable tariff type checkbox is checked under Personalise your results section
    And I check if Monthly Payment type checkbox is checked under Personalise your results section
    And I check if Quarterly Payment type checkbox is unchecked under Personalise your results section
    And I check if Pay on receipt of bill Payment type checkbox is unchecked under Personalise your results section
    And I see filter recommendation subheading as "Recommended tariffs for you"
    And I see "Supplier" heading available under recomendation subheading
    And I see "Annual saving" heading available next to Supplier heading
    And I see "Estimated bill" heading available next to Annual saving heading
    And I see "Tariff type" heading available next to Estimated bill heading
    And I see "Payment type" heading available next to Tariff type heading
    And I See "Supplier rating" heading available next to Payment type heading
    Then I should be able to see tariff results
    And I close the browser
