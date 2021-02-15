// wir können arrays und objekte auch gemeinsam nutzen,
// solche objektbäume werden in javascript sehr oft benutzt:

// zum beispiel könnten wir eine array anlegen, in die wir objekte legen:
const books =
[
	{ autor: 'Arthur Conan Doyle', title: 'Sherlock Holmes' },
	{ autor: 'Ian Flemming', title: 'James Bond' },
	{ autor: 'J. R. R. Tolkien' , title: 'Der Hobbit' },
]

books.forEach ((book, i) => {
	console.log(`Book ${i + 1}: Autor:`, book.autor, '- Title: ' + book.title);
});

console.log("=".repeat(50));

// Ein etwas erweitertes beispiel:
const users =
[
    {
        id: 1,
        firstName: "Max",
        lastName: "Mustermann",
        roles: 
        {
            admin: true,
            moderator: false,
        },
        email:
        [
            "max@example.com",
            "test@test.de"
        ]
    },
    {
        id: 2,
        firstName: "James",
        lastName: "Bond",
        roles: 
        {
            admin: false,
            moderator: true,
        },
        email: []
    },
    {
        id: 3,
        firstName: "Michael",
        lastName: "Knight",
        roles: 
        {
            admin: false,
            moderator: true,
        },
        email: 
        [
            "knight@foundation.com",
            "kitt@knight-industries.org"
        ]
    }
];

users.forEach ((user) =>
{
    console.log(user.firstName + `(${ user.id }):`);

    console.log("- Email: " + user.email[0]);

    if(user.roles.admin === true)
    {
        console.log("- Admin");
    }

    console.log();
});
