# PLT- Basic eCommerce mobile app (React Native) 

Built usung Expo Basic Template (Vanilla Javascript) - I would prefer Typescript, but am picking up Typescript, so for speed today am using plain old JS.

##  GENERAL NOTE on Typescript and Clean Architecture: 

Building toward a Clean Architecture (to discuss in depth at interview if desired, ref Unc Bob) Typescript Interfaces "should" be used. Please consider use of Typescript as a general refactoring for future.  


## Implementation of Requirements:
 
There are a few basic shopping requirements
A user should be able to:

1) View a list of products, with their price/info
DONE

2) Add products to a basket
DONE

3) Navigate to a basket screen
DONE

4) Edit quantity/remove items from the basket screen
DONE

5) integrates the product and menu data from this DB
NOT DONE: require more information from customer. Menus do not relate to product data. WOuld need to associate the menu categories to products. No such mapping avalable. I have left as a simple Main (shop) menu and Checkout (cart) menu.
 


## Testing via Jest / React Native Testing Library

Time has not allowed full unit tests. I have added some tests to deminstrate pattern.
basic unit tests are self documentating.

Of more interest is the testing of the ShopScreen.  By using a Presenter component to wrap te ShopScreen and pass data and commands (Redux Actions) teh ShopScreen becomes unit testable.

As a REFACTOR, all other screen would be implemented to same pattern.


## Production ENV variables

In this app given time constraints, values are hard coded (such a base url to data source). I would use dotenv to configure externally.  HAppy to discuss using difierent ENVs for Expo Release Channels.



## To install the project:

$ npm i

## To run the project, navigate to the install directory and run one of the following npm commands.

- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios
- npm run web

## Notes on Clean Architecture

This app is strongly guided by Uncle Bob's Clean Architecture.
[Robert Martin's Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

A key aspect of Clean Architecture is building to Interfaces. In this respect Typescript should be used. In my vanilla Javascript, without Interfaces, I have resorted to provding "default" values for params to demonstrate the expected object structure.  I am STRONGLY motivated to build this in Typescript.


