PROJECT  TITLE :   comparetheMarketTests
As a user in order to collate the information required to get quotes from companies that provide the energy,  I want a website which will allow me to search with different options to compare and find the best price for my energy.
Prerequisites :
IDE :  example: Eclipse, IntelliJ 
Operating system : Windows OS /Mac OS
Maven version : maven 3.3.0 or  above version
Java version : Java 1.8
Running the Tests:
To run all tests follow the below step :
    (i) Right click on AllTestsRunner.java --> Run As --> JUnit Test
      Note : AllTestsRunner.java location is  src\test\java\com\test\runner\AllTestsRunner.java
To Run the individual test follow the below instructions :
1- To run the compareElectricity.feature you can do either of below
   (i) Open the compareElectricity.feature --> Right click --> Run As --> Cucumber.feature
   (ii) Right click on ElectricityTestsRunner.java --> Run As --> JUnit Test
Note : compareElectricity.feature location is src\test\resources\stories\compareElectricity.feature
         ElectricityTestsRunner.java location is src\test\java\com\test\runner\ElectricityTestsRunner.java

2- To run the compareGas.feature you can do either of below
   (i) Open the compareGas.feature --> Right click --> Run As --> Cucumber.feature
   (ii) Right click on GasTestsRunner.java --> Run As --> JUnit Test
Note : compareGas.feature location is src\test\resources\stories\compareGas.feature
         GasTestsRunner.java location is src\test\java\com\test\runner\GasTestsRunner.java

3- To run the compareGasElectricity.feature you can do either of below
   (i) Open the compareGasElectricity.feature --> Right click --> Run As --> Cucumber.feature
   (ii) Right click on GasElectricityTestsRunner.java --> Run As --> JUnit Test
Note :->  compareGasElectricity.feature location as below:
                   src\test\resources\stories\compareGasElectricity.feature
           -> GasElectricityTestsRunner.java location
                src\test\java\com\test\runner\GasElectricityTestsRunner.java
