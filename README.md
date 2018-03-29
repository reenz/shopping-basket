# MMT Digital Front-end Test

### User Stories

*Basket-001*  
**As a** user  
**I want** to view my current basket  
**So that** I can see what I've added  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see all added items and their cost  

*Basket-002*  
**As a** user  
**I want** to change the quantity of a basket item  
**So that** I can decide item totals before purchasing  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see an item quantity next to each item  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see each item's total cost (adjusted for quantity)  

**Given** I am on the basket page  
**When** I change an item quantity  
**Then** the item's total cost is adjusted, in real-time  

*Basket-003*  
**As a** user  
**I want** to view my current basket total  
**So that** I can see what I'm going to have to pay  

**Given** I am on the basket page  
**When** I view the page  
**Then** I can see a total cost, accounting for all items and quantities  

*Basket-004*  
**As a** user  
**I want** to remove all items from my basket  
**So that** I can start over  

**Given** I am on the basket page  
**When** I click the "clear" button  
**Then** all items are reset to zero (but remain in the basket)  


### Approach

* I have decided to build this basket using React as it is prefered by MMT over jquery. 
* I have never used react before so first I decided to make practice app [learn-react](https://github.com/reenz/learn-react ) the TDD style to get the hang of it. While doing pratice app I faced some issues like running the tests and running the server which was not addressed in the tutorial so googled it and manged to make small 'Hello World' react app.
* I will take first first two user stories to get started.

### Test Dependencies
* jest ,babel-jest, babel-preset-env, babel-preset-react,react-test-renderer,enzyme ,enzyme-adapter-react-16

### Findings
* To make the component reusable,component should be parametrized by passing the data from outside the component(i.e I removed the hard coded product data from Product component)