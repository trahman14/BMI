$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/BMI.feature");
formatter.feature({
  "name": "BMI Calculator Functionality",
  "description": "\tAs a user I want to calculate my BMI by using BMI Calculator ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Category Under weight",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculator Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculator.i_am_on_BMI_Calculator_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter height in Centimeters \"170\" and Weight in Kilograms \"50\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculator.i_enter_height_in_Centimeters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"17.3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Underweight\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Category Over weight",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculator Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculator.i_am_on_BMI_Calculator_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter height in Centimeters \"170\" and Weight in Kilograms \"80\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculator.i_enter_height_in_Centimeters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"27.7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Overweight\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Category Normal",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculator Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculator.i_am_on_BMI_Calculator_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter height in Centimeters \"170\" and Weight in Kilograms \"60\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculator.i_enter_height_in_Centimeters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"20.8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Normal\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Category Obesity",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BMI Calculator Webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "BMICalculator.i_am_on_BMI_Calculator_Webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter height in Centimeters \"170\" and Weight in Kilograms \"90\"",
  "keyword": "When "
});
formatter.match({
  "location": "BMICalculator.i_enter_height_in_Centimeters_and_Weight_in_Kilograms(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on calculate button",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_click_on_calculate_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI value \"31.1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get BMI Category \"Obesity\"",
  "keyword": "And "
});
formatter.match({
  "location": "BMICalculator.i_should_get_BMI_Category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Datadriven.feature");
formatter.feature({
  "name": "Registration form fillup",
  "description": "  As a user he will able to Registration by using valid data",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@OurWebSite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.step({
  "name": "user will Enter \"\u003cFirstName\u003e\", \"\u003cLastName\u003e\",\"\u003cEmail\u003e\", \"\u003cAgEmail\u003e\",\"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user will click on \"\u003cSex\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user will select \"\u003cMonth\u003e\",\"\u003cDay\u003e\", \"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "AgEmail",
        "Password",
        "Sex",
        "Month",
        "Day",
        "Year"
      ]
    },
    {
      "cells": [
        "Farhana",
        "Zaman",
        "farhana@yahoo.com",
        "farhana@yahoo.com",
        "far7645",
        "Female",
        "Jun",
        "25",
        "1987"
      ]
    },
    {
      "cells": [
        "Mohammed",
        "Islam",
        "islam@gmail.com",
        "islam@gmail.com",
        "islam423",
        "Male",
        "May",
        "26",
        "1975"
      ]
    },
    {
      "cells": [
        "Padma",
        "Khan",
        "padma@yahoo.com",
        "padma@yahoo.com",
        "padm1432",
        "Female",
        "Feb",
        "27",
        "1985"
      ]
    },
    {
      "cells": [
        "Farhana",
        "Zaman",
        "farhana@yahoo.com",
        "farhana@yahoo.com",
        "far7645",
        "Female",
        "Jun",
        "28",
        "1987"
      ]
    },
    {
      "cells": [
        "Mohammed",
        "Zahir",
        "islam@gmail.com",
        "islam@gmail.com",
        "islam423",
        "Male",
        "May",
        "29",
        "1975"
      ]
    },
    {
      "cells": [
        "Oyshi",
        "Khan",
        "padma@yahoo.com",
        "padma@yahoo.com",
        "padm1432",
        "Female",
        "Feb",
        "30",
        "1985"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebSite"
    },
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataDrivenSite.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Farhana\", \"Zaman\",\"farhana@yahoo.com\", \"farhana@yahoo.com\",\"far7645\"",
  "keyword": "When "
});
formatter.match({
  "location": "DataDrivenSite.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Jun\",\"25\", \"1987\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenSite.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebSite"
    },
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataDrivenSite.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Mohammed\", \"Islam\",\"islam@gmail.com\", \"islam@gmail.com\",\"islam423\"",
  "keyword": "When "
});
formatter.match({
  "location": "DataDrivenSite.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"May\",\"26\", \"1975\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenSite.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebSite"
    },
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataDrivenSite.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Padma\", \"Khan\",\"padma@yahoo.com\", \"padma@yahoo.com\",\"padm1432\"",
  "keyword": "When "
});
formatter.match({
  "location": "DataDrivenSite.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Feb\",\"27\", \"1985\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenSite.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebSite"
    },
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataDrivenSite.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Farhana\", \"Zaman\",\"farhana@yahoo.com\", \"farhana@yahoo.com\",\"far7645\"",
  "keyword": "When "
});
formatter.match({
  "location": "DataDrivenSite.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Jun\",\"28\", \"1987\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenSite.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebSite"
    },
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataDrivenSite.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Mohammed\", \"Zahir\",\"islam@gmail.com\", \"islam@gmail.com\",\"islam423\"",
  "keyword": "When "
});
formatter.match({
  "location": "DataDrivenSite.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"May\",\"29\", \"1975\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenSite.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User will able to Registration by using valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@OurWebSite"
    },
    {
      "name": "@DataDriven"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on registration form web page",
  "keyword": "Given "
});
formatter.match({
  "location": "DataDrivenSite.user_is_on_registration_form_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Enter \"Oyshi\", \"Khan\",\"padma@yahoo.com\", \"padma@yahoo.com\",\"padm1432\"",
  "keyword": "When "
});
formatter.match({
  "location": "DataDrivenSite.user_will_Enter(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will click on \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will select \"Feb\",\"30\", \"1985\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataDrivenSite.user_will_select(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenSite.user_will_able_to_register_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/SuperTech.feature");
formatter.feature({
  "name": "Fund Transfer",
  "description": "  I want to transfer funds Online through the funds transfer Application",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "1 User should be able to transfer funds successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@validTransfer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Online funds transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransfer.i_am_on_Online_funds_transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select my Name \"Jim\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransfer.i_select_my_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount \"500\"",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.i_click_on_the_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am prompted a success validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransfer.i_am_prompted_a_success_validation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 User does not have enough funds and is declined fund transfer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@declinedTransfer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Online funds transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransfer.i_am_on_Online_funds_transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select my name \"Tim\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransfer.i_select_my_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount \"7000\"",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.i_click_on_the_Transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am prompted a failed validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransfer.i_am_prompted_a_failed_validation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "3 User is not approved for funds transfer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@invalidPayee"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Online funds transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransfer.i_am_on_Online_funds_transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select my name \"John\" from the dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransfer.i_select_my_name_from_the_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.i_click_on_the_Transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am prompted a failed validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransfer.i_am_prompted_a_failed_validation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});