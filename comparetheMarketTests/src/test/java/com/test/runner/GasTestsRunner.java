package com.test.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/cucumber/energyGascompare","json:target/cucumber-energyGascompare.json" }, 
		glue = { "com.test.steps" },
	    features = "src/test/resources/stories/", 
		tags ={"@Gas"}
        ,monochrome=true
)


public class GasTestsRunner {
	//This is just a runner
	
}
