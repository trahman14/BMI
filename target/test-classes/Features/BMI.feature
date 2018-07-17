Feature: BMI Calculator Functionality 
	As a user I want to calculate my BMI by using BMI Calculator 
	
	Scenario: Category Under weight
	
	Given I am on BMI Calculator Webpage 
	When  I enter height in Centimeters "170" and Weight in Kilograms "50" 
	And   I click on calculate button 
	Then  I should get BMI value "17.3"
	And   I should get BMI Category "Underweight" 
	
	
		Scenario: Category Over weight
	
	Given I am on BMI Calculator Webpage 
	When  I enter height in Centimeters "170" and Weight in Kilograms "80" 
	And   I click on calculate button 
	Then  I should get BMI value "27.7"
	And   I should get BMI Category "Overweight" 
	
	
	
		Scenario: Category Normal 
	
	Given I am on BMI Calculator Webpage 
	When  I enter height in Centimeters "170" and Weight in Kilograms "60" 
	And   I click on calculate button 
	Then  I should get BMI value "20.8"
	And   I should get BMI Category "Normal" 
	
		Scenario: Category Obesity
	
	Given I am on BMI Calculator Webpage 
	When  I enter height in Centimeters "170" and Weight in Kilograms "90" 
	And   I click on calculate button 
	Then  I should get BMI value "31.1"
	And   I should get BMI Category "Obesity" 