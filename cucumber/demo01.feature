Feature: Test homepage Politie.nl

  Scenario: telefoonnummers zichtbaar
    Given gebruiker opent politie.nl
    Then is het telefoonummer voor spoed te zien
    And is het telefoonnummer voor geen spoed te zien

  Scenario: zoekveld beschikbaar
    Given gebruiker opent politie.nl
    Then is het zoekveld beschikbaar

  @focus
  Scenario: zoek adres Politie
    Given gebruiker opent politie.nl
    And gebruiker voert "Odijk" in in de zoekbox
    And gebruiker klikt op de zoekknop
    Then is het adres "Singelpark 1" te zien in het zoekresultaat
