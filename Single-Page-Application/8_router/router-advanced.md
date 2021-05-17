

# React-Router navigation

## Router history
In react-router gibt es das so-genannte history objekt, das uns ermöglicht bestimmte aktionen wie zur vorherigen seite zurück zu gehen.
wir können hiermit auch den benutzer an einer bestimmten stelle, oder basierend auf einem bestimmten wert auf der seite wo anders hin schicken. zum beispiel wenn er sich eingeloggt hat, um ihn zum dashboard zu schicken.

history.push(); ==> NotFound.js
GoBack => NotFound.js

## Router redirect

## Router navigations
- Creating a Navigation bar with `<NavLink activeClassName=""[...]"">`
- Using `<Link>` to navigate to a path
- Library clash: Using reactstrap `<NavLink>` with react-router `<NavLink>`
  https://github.com/reactstrap/reactstrap/issues/1285#issuecomment-446592497
- Redirecting components: `<Redirect>`"

## Router Parameter
- Route props: Accessing route params with the `match.params` prop"

https://reactrouter.com/web/api/history