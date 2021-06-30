Feature: Welcome to the-internet Tests

    Background:
        Given I am on the-internet homepage

    @focus
    Scenario: Add/Remove Elements
        When I navigate to "Add/Remove Elements"
        Then "Add/Remove Elements" page opens
        When I click Add Element
        Then There is 1 Delete button
        When I click Add Element
        Then There is 2 Delete button
        When I click Add Element
        Then There is 3 Delete button
        When I click first Delete button
        Then There is 2 Delete button
        When I click first Delete button
        Then There is 1 Delete button
        When I click first Delete button
        Then There is 0 Delete button

