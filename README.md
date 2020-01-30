
# Katelyn Miles viagogo-test

## Visit the Deployed Link

<a target="_blank" href="https://viagogo-elton-john.netlify.com/"> Elton John Events</a>

## Run Locally

To run the viagogo-ticket-test locally, fork this repository and clone it down.

Download node.js if not already installed: https://nodejs.org/en/

In the project directory, you can run:

### `npm install`

and then 

### `npm start`

This runs the app in the development mode.<br />
If it doesn't open automatically, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Part 3

Having all of the cities listed as in Part 2 is visually cumbersome. The user has to scan the extensive options to ultimately select the city they are looking for. 

A more optimized filter would be to implement a search bar to allow the user to simply type in the city they are looking for and filter as the user types. The visual focus is clear - it saves the user time and allows them to immediately know if there is an event in the chosen city.

An advanced filter with multiple options could also be implemented if the user wishes to further narrow their search. This way location would not be the only filter option.

## Versions

Part 3 is currently displayed (search bar filter) - to view the other parts in the browser, uncomment the corresponding component in App.js (labeled by part). Make sure it is the only component uncommented in App.js besides "< Header />"

## Buy Tickets Link
The values provided for the "EventUrl" keys seems to be all for past dates - because of this, the user is re-routed to the viagogo page with all upcoming Elton John events. However, if the value contained an event url with an upcoming event id, it should route to the proper event page.

