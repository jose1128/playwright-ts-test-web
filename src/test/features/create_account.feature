Feature: Create Account

  Scenario: Successful account creation
    Given I am on the registration page
    When I enter valid user information
    Then I should see a confirmation message