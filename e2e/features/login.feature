Feature: Login page at RWA

    Scenario: A user with a valid username and password can login
        Given I am at the login page
        When I set a valid username and a valid password
        Then I should be redirected to the dashboard page
