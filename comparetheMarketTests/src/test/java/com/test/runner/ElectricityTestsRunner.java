package com.test.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/cucumber/energycompare","json:target/cucumber-energycompare.json" }, 
		glue = { "com.test.steps" },
		//dryRun=true,
		//features = "classpath:stories/", 
	    features = "src/test/resources/stories/compareElectricity.feature", 
		tags ={"@Electricity"}
        ,monochrome=true
)


public class ElectricityTestsRunner {
	//This is just a runner
	
}
