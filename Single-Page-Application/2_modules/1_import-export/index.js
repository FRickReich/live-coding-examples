// 1. die mit default export exportierte klasse, funktion oder variable können wir auf der importierenden ebene nennen wie wir wollen.
// Eine standard-konvention ist, sie bei klassen so zu nennen, wie die klasse heisst. also in unserem fall "App". dies ist ein sogenannter namespace.

// wir können sie aber auch anders nennen:
import UnsereApp from './app.js';
// 3. wir importieren die funktion aus der utils.js
import { makePage } from './utils.js';

// 5. wir importieren die variablen aus der user.js, indem wir sie mit einem sternchen "alle" holen, wie in css, und nennen sie dann wie wir wollen:
import * as User from './user.js';

// 2. jetzt können wir unsere klasse nutzen, wie wir es gewohnt sind.
const app = new UnsereApp(25)
const newValue = app.createNewValue();
console.log(newValue);

// 4. wir nutzen unsere importierte funktion:
makePage(newValue);

// 6. jetzt können wir die variablen aus der user.js nutzen, als wenn sie zu einer klasse namens User gehören würden.
console.log(User.firstName + " " + User.lastName);
