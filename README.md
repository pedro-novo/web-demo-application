# Demo Application

This application serves as a showcase of my current FE skills. This project was built in 2-3 days. It was deployed using vercel and the demo can be seen [here](https://twilio-demo-application.vercel.app/).

For this project I've used:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [TailwindCSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [i18n](https://www.i18next.com)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)


## How to Run the app

To run the app locally, you must first install all dependencies:

```bash
   yarn install
```

After doing so, just run:

```bash
   yarn start
```

## What I want to highlight about this project

### Directory Structure
As there is no convention in React on how to structure your project, I see this as a good skill to showcase.

Inside the `/src` directory, it boils down to:
- `/modules` - all the different modules/pages (`/common` stores everything being shared between the different modules). Each module has its own scope and is composed by:
   - `/components`
   - `/core` - models, constants, enums, etc.
   - `/hooks` - custom hooks.
   - `/utils`
   - `index.ts` - exports everything from this module that needs to be exposed to the outside.
- `/router` -  everything related to the router, including `components`, `enums`, `layout`.
- `/services` - services of the application, which basically consists in a class, composed only by static methods that make the API call and return the data.
- `/setup` - this stores everything that it's related to some setup that the application might need, like `axios`, `store`, etc. (this could also store the `router` and `i18n` configuration).
- `i18n` - i18n configuration and translations.


### Compound Pattern

A basic implementation of the Compound Pattern, as shown in the [Accordion](https://github.com/pedro-novo/twilio-demo-application/blob/master/src/modules/common/components/accordion/accordion.tsx).


### React Query Custom Hook Implementation

[Custom Hook](https://github.com/pedro-novo/twilio-demo-application/blob/master/src/modules/common/queries/users/use-get-user-by-id.ts) that wraps React Query, for improved organizion and readability.


### Reducer Implementation

A simple reducer [implementation](https://github.com/pedro-novo/twilio-demo-application/blob/master/src/modules/contact/reducer/contact-reducer.ts) to group logic related to the same state.


### ContextAPI

Using React native solution to share state between multiple components, avoiding prop drilling hell, as shown [here](https://github.com/pedro-novo/twilio-demo-application/blob/master/src/modules/contact/context/contact-context.tsx).


### Routing

Using React Router Dom, to simplify all the [routing](https://github.com/pedro-novo/twilio-demo-application/blob/master/src/App.tsx) related tasks.


### Error & Loading Handling

Error handling - if the API request fails, an error toast will be displayed and the user redirected to *Home Page*.

Loading Handling - while waiting on API response, a *Loading Skeleton* will be displayed in place of the data.


### Translations

The application already includes translations for english, spanish and portuguese. It can be interacted using the right upmost dropdown.

### Styling skills

I also wanted to display some basic styling skills, including animations. I've used some components library to speed up the development process.



## How to test it?

#### Homepage
Components layout, styles, and basic animations on the nav bar and dropdowns of the second section (where the iphone is displayed).


#### Wizard/Contact
Simple wizard/stepper which can be accessed by clicking the top right corner button *Contact Sales*.

It has some simple validations to allow user to move back and forth in the stepper (which can be seen in the [code](https://github.com/pedro-novo/twilio-demo-application/blob/master/src/modules/contact/components/wizard-stepper/wizard-stepper.tsx)).


#### Userslist/User
Used a [public API](https://jsonplaceholder.typicode.com/) to fetch some data and display it in a table and in a details page.

Can be accessed by clicking any of the shortcut buttons (Developers, Marketers, Product Owners or Sales & Support) under the hero image.
The user details page can be accessed by pressing the *Edit* button on any of the rows of the users table.