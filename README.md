## testcafe-demo
=================  
Demo project voor testtool Testcafé, inclusief Cucumber voorbeeld.  
* Informatie Testcafé: https://devexpress.github.io/testcafe/  
* Informatie gherkin-testcafe module: https://github.com/Arthy000/gherkin-testcafe

### Installatie
`npm install`

### Runnen van standaard Testcafé tests
`npx testcafe chrome testcafe-demo01-test.ts`  
`npm run tc`

### Runnen van Cucumber tests
`npx gherkin-testcafe chrome cucumber/*.ts cucumber/demo01.feature`   
`npm run cucumber`  
Alleen tests met tag '@focus': `npm run cucumber -- --tags @focus`  
Live modus (wijziging in een test herstart de test): `npm run cucumber-live`  
Focus (alleen tests met tag @focus): `npm run cucumber-focus`

### Debuggen van tests
Kies Run -> Start Debugging. De test stopt dan op breakpoints in de code van de test met tag @focus.

### API test
Om de API-test te runnen, start eerst de api-stub: `npm run api-stub`.  
Vervolgens: `npm run tc-api`.

### Nieuwe installatie van Testcafé
Als je een nieuwe, schone, installatie van Testcafé wilt doen, inclusief typescript en cucumber, maak dan een nieuwe folder, gaa daar naar toe en run deze commando's:  
`npm init`  
`npm install testcafe typescript gherkin-testcafe cucumber@5.1.0 testcafe-reporter-html --save-dev`  
`npx typescript`