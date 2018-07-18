package stepPack;

import org.openqa.selenium.By;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BMICalculator extends AbstractClass{

	@Given("^I am on BMI Calculator Webpage$")
	public void i_am_on_BMI_Calculator_Webpage() {
	    driver.get("file:///Users/tarek.rahman/Desktop/AutoTrainingWebSite/bmicalculator.html");
	}

	@When("^I enter height in Centimeters \"([^\"]*)\" and Weight in Kilograms \"([^\"]*)\"$")
	public void i_enter_height_in_Centimeters_and_Weight_in_Kilograms(String height, String weight) {
		
		driver.findElement(By.id("heightCMS")).sendKeys(height);
		driver.findElement(By.id("weightKg")).sendKeys(weight);
	    
	}

	@When("^I click on calculate button$")
	public void i_click_on_calculate_button() throws InterruptedException {
		
		driver.findElement(By.id("Calculate")).click();
		Thread.sleep(1000);
	    
	}

	@Then("^I should get BMI value \"([^\"]*)\"$")
	public void i_should_get_BMI_value(String BMIValue) {
		
		String actualValue = driver.findElement(By.id("bmi")).getAttribute("value"); 
		Assert.assertEquals(actualValue, BMIValue);
	   System.out.println("change");
	}

	@Then("^I should get BMI Category \"([^\"]*)\"$")
	public void i_should_get_BMI_Category(String Category) {
		
		String actualCategory = driver.findElement(By.id("bmi_category")).getAttribute("value"); 
		Assert.assertEquals(actualCategory, Category); 
	  
	}
}
