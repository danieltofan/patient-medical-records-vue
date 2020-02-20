# patient-medical-records-vue

## Description

The problem presented was implemented in Vue.js using the latest version of Vue CLI to generate the skeleton project.
Bootstrap-vue was added for layout and to provide the components used: navbar, select, button, table, spinner.
Vue-moment was added to format dates using moment.js, Vuex was added to provide a store for maintaining state.
For simplicity, linting and testing tools were left out.

### All requirements described in problem.txt were implemented.

### Strategy:
- The Vuex store is the single source of truth and maintains the state of the loading indicator as well as provides reactive properties that the app uses.
- A single component was used, as the problem is simple enough to not warrant multiple components. In a production app, the code would be broken down in smaller components.
- When a new patient record is loaded, the component dispatches a store action, which loads the data from the API and commits mutations that change the state.
- The App component takes advantage of reactive properties of the store (via getters) as well as internal computed properties.
- CSS was preferred for simplicity but SCSS or Stylus could be used for greater flexibility.

### Assumptions made:
- The Ajax calls always succeed and there is no need for error checking, for simplicity
- Selecting the null option in the select box ("Select Patient") does not clear the data table, as it is not a requirements
- Changing the patient name requires a click on Show to load the new data, does not update the table on change
- The view updates really quickly, it may be necessary to throttle the network in Chrome/Firefox dev tools to see the loader spinning
- DOB was already formatted in the API data so no additional formatting was necessary
- Not all styles were preserved as in the sample solution, as they were not deemed necessary; Bootstrap styles are used throughout, including for the spinner

### Enhancements:
- The loader is displayed superimposed on the table container in order to save space and make the app look better
- While loading new data, the text color in the table is faded and blurred temporarily to move focus away from the data and emphasize the loading spinner
- The table has additional formatting for a more pleasant look, including units for height and weight
- Transitions were used for showing/hiding the loader as well as table data, and subtle transitions were added to the table hover, both for a more pleasant l&f
- The entire app is responsive, including the data table, following a mobile-first design pattern; no media queries were included since the information is sufficiently visible on small screen sizes


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
