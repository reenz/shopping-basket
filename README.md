# MMT Digital Front-end Test

This is a simple React app which displays user's basket. User can alter the quantity and accordingly item price and total amount to be paid gets updated. If user changes his mind and wants to start over again then he can reset everything to zero.

### Basket

![Basket](https://i.imgur.com/Lo3dAET.png)

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

* I have decided to build this basket using React framework given that:
    * It was preferred by MMT Digital
    * It provides a declarative way of creating Javascript user interfaces
    * Can be used to create web apps as well as mobile apps using react-native 
* Testing was done using Enzyme and Jest.
* I have never used React before so first I decided to make practice app [learn-react](https://github.com/reenz/learn-react ) the TDD style to get the hang of it. While developing this practice app, I faced couple of issues related to version mismatch of enzyme  running the tests and running the server which was not addressed in the tutorial so googled it and managed to make small 'Hello World' React app.
* I took small steps to reach MVP by tackling one user story at time as it can be seen from my commit history.
* For a user story to be marked as achieved I did TDD and tested well on the browser manually as a user just to be sure it works as expected.

### Test Dependencies

* jest
* babel-jest
* babel-preset-env
* babel-preset-react
* react-test-renderer-enzyme
* enzyme-adapter-react-16

### Reflection

* Starting out with this challenge, I found it a bit difficult since I was new to React. But as I started chipping at the problem and learning React, things started falling in place. I have now become a bit more comfortable with react syntax and testing and look forward to continuing this learning.
* To make my component reusable, I realized that it should be parameterized by passing the data as props; this would help me when integrating with external APIs for pulling product data and rendering them.
* Testing using Jest and Enzyme was quite new for me. I used them for the first time in this challenge and it involved lot of learning experience.
* Overall, it was both interesting and challenging to work on this tech test. I am happy with what I achieved as part of my first cut.
* I do realize that few more things need to happen to make this a production quality app like handling different currencies, addressing Progressive Web App checklist and so on.

### Next steps

* Add an option of deleting a particular item
* Now my product data is hard-coded, if I had the time I would find a way to get live API and pull the item's content and title from that
* More testing
* More styling

### Resources

* [React Official Documentation](https://reactjs.org/docs/hello-world.html)
* [Enzyme Documentation](http://airbnb.io/enzyme/docs/api/shallow.html)
* [Unit Testing with Jest and Enzyme](https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45)