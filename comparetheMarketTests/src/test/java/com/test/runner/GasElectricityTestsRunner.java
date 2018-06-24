package com.test.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/cucumber/energyGasEleccompare","json:target/cucumber-energyGasEleccompare.json" }, 
		glue = { "com.test.steps" },
	    features = "src/test/resources/stories/", 
		tags ={"@GasElectricity"}
        ,monochrome=true
)


public class GasElectricityTestsRunner {
	//This is just a runner
	
}
