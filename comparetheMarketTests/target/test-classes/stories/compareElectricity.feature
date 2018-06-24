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
@Electricity
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
    And I click on Electricity only label as i want to compare electricity only
    And I select "Ecotricity" as my current electricity supplier from the drop down option
    When I click on Next button at below right
    And I wait for "3" seconds
    Then I should be able to navigate to energy page
    And I check the Yes checkbox as i use pre-payment meter
    And I check the No checkbox as i do not have an Economy 7 meter
    And I select electricity current spend period as "Monthly" from drop down option
    And I enter the value "40" as current electricity spend in the given textbox
    When I click on the Next button at below right to navigate to preferences and contact details page
    And I wait for "3" seconds
    Then I should be able to navigate to preferences and contact details page
    And I click on Fixed tariff label to choose the tariff i am interested in
    And I enter my email address as "def@gmail.com" in the given textbox
    And I check the given check box to confirm that i have read and undrestood terms and conditions
    When I click on Go to prices button at below right
    And I wait for "10" seconds
    Then I should be able to navigate to results page
    And I see filter recommendation subheading as "Recommended tariffs for you"
    And I check postcode "PE2 6YS" i have entered displayed under supplier details section
    And I check if it is showing "Ecotricity" as my electricity supplier under supplier details section
    And I check if it is showing Projection as "40.00 monthly" under energy usage section
    And I check if it is showing Projection as "480 annually" under energy usage section
    And I see filter results heading as "Personalise your results"
    And I check if Fixed tariff type checkbox is checked under Personalise your results section
    And I check if Variable tariff type checkbox is unchecked under Personalise your results section
    And I see filter recommendation subheading as "Recommended tariffs for you"
    And I see "Supplier" heading available under recomendation subheading
    And I see "Annual saving" heading available next to Supplier heading
    And I see "Estimated bill" heading available next to Annual saving heading
    And I see "Tariff type" heading available next to Estimated bill heading
    And I see "Payment type" heading available next to Tariff type heading
    And I See "Supplier rating" heading available next to Payment type heading    
    Then I should be able to see tariff results
   And I close the browser
   
