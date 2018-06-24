package com.test.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/cucumber/energyEleccompare","json:target/cucumber-energyEleccompare.json" }, 
		glue = { "com.test.steps" },
	    features = "src/test/resources/stories/", 
		tags ={"@Electricity"}
        ,monochrome=true
)


public class ElectricityTestsRunner {
	//This is just a runner
	
}
