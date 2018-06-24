PROJECT  TITLE :   comparetheMarketTests

Project Description : 
As a user in order to collate the information required to get quotes from companies that provide the energy,  I want a website which will allow me to search with different options to compare and find the best price for my energy.

Prerequisites :
IDE :  example: Eclipse, IntelliJ 
Operating system : Windows OS /Mac OS
Browser i used : Firefox version 54.0
Maven version : maven 3.3.0 or above version
Java version : Java 1.8

Running the Tests:
To run all tests follow either of below step :
    (i) Right click on AllTestsRunner.java --> Run As --> JUnit Test
      Note : AllTestsRunner.java location is  src\test\java\com\test\runner\AllTestsRunner.java
    (ii) Open the compareEnergy.feature --> Right click --> Run As --> Cucumber.feature
      Note : compareEnergy.feature location is  src\test\resources\stories\compareEnergy.feature
      
To Run the individual test follow the below instructions :
1- To run the Scenario "User Electricity Comparison journey" follow the below step
   (i) Right click on ElectricityTestsRunner.java --> Run As --> JUnit Test
Note : ElectricityTestsRunner.java location is src\test\java\com\test\runner\ElectricityTestsRunner.java

2- To run the Scenario "User Gas Comparison journey" follow the below step
   (i) Right click on GasTestsRunner.java --> Run As --> JUnit Test
Note : GasTestsRunner.java location is src\test\java\com\test\runner\GasTestsRunner.java

3- To run the Scenario "User Gas & Electricity Comparison journey" follow the below step
   (i) Right click on GasElectricityTestsRunner.java --> Run As --> JUnit Test
Note :-> GasElectricityTestsRunner.java location as below : 
                src\test\java\com\test\runner\GasElectricityTestsRunner.java
