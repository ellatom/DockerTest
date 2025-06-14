# Cypress UI Automation

This project contains end-to-end UI tests for the application using Cypress and the Page Object Model pattern.

## Structure
- `cypress/e2e/ui/`: Test specifications (e.g., `HomePage.cy.ts`, `ResultInfoPage.cy.ts`)
- `cypress/pages/`: Page Object classes encapsulating selectors and actions
- `cypress/fixtures/`: Test data (e.g., `filmNames.ts`, `searchItems.json`)
- `cypress/support/`: Custom commands and helpers

## Getting Started
1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Run tests in interactive mode**
   ```sh
   npm run cy:open
   ```
3. **Run tests in headless mode**
   ```sh
   npm run cy:run
   ```

## Docker

**Build new image**
```docker build -t my-cypress-tests:latest .```

**images in docker** 
```docker images```

**add tag to dockerhub**
```docker tag my-cypress-tests:latest 27081984/cypress-tests:latest```

**docker login**
```docker login```

**doker push new image**
```docker push 27081984/cypress-tests:latest```

**Run tests on docker**
```docker run --rm my-cypress-tests:latest```

**apply file on kube**
```kubectl apply -f cypress-job.yaml```

**list of running Pods**
```kubectl get pods```

**get logs**
```kubectl logs my-cypress-tests-fvf8q``` 

**delete and rerun job**
```kubectl delete job my-cypress-tests```
```kubectl apply -f cypress-job.yaml```

**get job status**
```kubectl get jobs```
```kubectl describe job my-cypress-tests```

## Best Practices
- Tests use the Page Object Model for maintainability.
- Test data is managed in fixtures for easy updates and scalability.
- Custom Cypress commands are defined in `cypress/support/commands.ts`.

## Adding Tests
- Add new test specs in `cypress/e2e/ui/`.
- Add or update page objects in `cypress/pages/`.
- Add new test data in `cypress/fixtures/` as needed.

