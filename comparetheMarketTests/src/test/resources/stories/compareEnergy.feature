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
@EnergyCompare
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

  @GasElectricity
  Scenario: User Gas & Electricity Comparison journey
    And I click on "have-bill-label" as i have my bill handy
    And I click on Gas & Electricity as i want to compare both
    And I check the No checkbox as my gas & electricity are not from the same supplier
    And I click on EDF Energy as my current electricity supplier
    And I click on British Gas as my current gas supplier
    When I click on Next button at below right
    And I wait for "3" seconds
    Then I should be able to navigate to energy electricity page
    And I select "Simply Fixed Apr20" as my current electricity plan under drop down option
    And I check the Yes checkbox as i have an Economy 7 meter
    And I select "Monthly Direct Debit" as my electricity method of pay under drop down option
    And I check the Yes checkbox to indicate that electricity as my main source of heating
    And I check the kWh checkbox to give my current electricty usgae
    And I select "Annually" as option from drop down to enter day electricity usage
    And I enter the value "240" as day electricity usage in the given textbox
    And I enter the value "120" as night electricity usage in the given textbox
    And I click on Next button at below right to navigate to Gas energy page
    And I wait for "3" seconds
    Then I should be able to navigate to energy gas page
    And I select "HomeEnergy Fix July 2019" as my current gas tariff under drop down option
    And I select "Monthly Direct Debit" as my gas method of pay under drop down option
    And I check the No checkbox to indicate that gas is not my main source of heating
    And I check the kWh checkbox to give my current gas usgae
    And I select "Annually" as option from drop down to enter current gas usage
    And I enter the value "340" as current gas usage in the given textbox
    When I click on the Next button at below right to navigate to preferences and contact details page
    And I wait for "3" seconds
    Then I should be able to navigate to preferences and contact details page
    And I click on All tariffs option to choose the tariff i am interested in
    And I click on All payment types option to choose payment type i am interested in
    And I enter my email address as "richmond.adam@gmail.com" in the given textbox
    And I check the given check box to confirm that i have read and undrestood terms and conditions
    When I click on Go to prices button at below right
    And I wait for "5" seconds
    Then I should be able to navigate to results page
    And I check postcode "PE2 6YS" i have entered displayed under supplier details section
    And I check if it is showing "EDF Energy" as my electricity supplier under supplier details section
    And I check if it is showing "British Gas" as my gas supplier under supplier details section
    And I check if it is showing Electricity as "360 kWh" under energy usage section
    And I check if it is showing Gas as "340 kWh" under energy usage section
    And I see filter results heading as "Personalise your results" on leftside
    And I check if Fixed tariff type checkbox is unchecked under Personalise your results section
    And I check if Variable tariff type checkbox is unchecked under Personalise your results section
    And I check if Monthly Payment type checkbox is unchecked under Personalise your results section
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

  @Gas
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
    And I enter my email address as "shushi.muvva@hotmail.com" in the given textbox
    And I check the given check box to confirm that i have read and undrestood terms and conditions
    When I click on Go to prices button at below right
    And I wait for "10" seconds
    Then I should be able to navigate to results page
    And I check postcode "PE2 6YS" i have entered displayed under supplier details section
    And I check if it is showing "British Gas" as my default gas supplier under supplier details section
    And I see filter results heading as "Personalise your results" on leftside
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

  @Electricity
  Scenario: User Electricity Comparison journey
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
    And I enter my email address as "shiva.sup@gmail.com" in the given textbox
    And I check the given check box to confirm that i have read and undrestood terms and conditions
    When I click on Go to prices button at below right
    And I wait for "10" seconds
    Then I should be able to navigate to results page
    And I check postcode "PE2 6YS" i have entered displayed under supplier details section
    And I check if it is showing "Ecotricity" as my electricity supplier under supplier details section
    And I check if it is showing Projection as "40.00 monthly" under energy usage section
    And I check if it is showing Projection as "480 annually" under energy usage section
    And I see filter results heading as "Personalise your results" on leftside
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
