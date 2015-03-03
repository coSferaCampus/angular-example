@javascript
Feature: Sign Up
  As an user
  I want to sign up
  In order to use the platform

  Scenario: Invalid sign up
    Given I visit sign up page
    When I fill user sign up form with invalid parameters
    Then I should see errors on sign up form

  Scenario: Valid sign up
    Given I visit sign up page
    When I fill user sign up form with valid parameters
    Then I should be in home info page
