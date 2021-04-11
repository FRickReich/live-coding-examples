/* Logik:

        Promise | async/await
Scope:  nur der promise chain ist asynchron | die komplette funktion ist asynchron
Logik:  mehrere promises nutzen Promise.all(); | Mehrere promises können mit einfachen variablen erstellt werden
Error:  .then();, .catch();, .finally(); | .try();, .catch();, .finally();

async/await ist eine neuer methode asynchronen code zu schreiben, zwar ist async/await eigentlich nur ein wrapper um callbacks und promises herum, aber es macht den code einfacher zu schreiben, und verhält sich komfortabler.
*/

// Ein beispiel:

// Promise:
const users = 
[
    {
        firstName: "Max",
        lastName: "Mustermann",
        age: 25
    },
    {
        firstName: "James",
        lastName: "Bond",
        age: 43
    }
];

const getUsers = () =>
{
    setTimeout(() =>
    {
        users.forEach(user =>
        {
            console.log(user.firstName + " " + user.lastName);
        });
    }, 1000); // eine sekunde
}

const addUser = (user) =>
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            users.push(user);

            resolve();
        }, 2000);
    });
}

const runUserDB = async () =>
{
    await addUser({ firstName: "Michael", lastName: "Knight", age: 35 });

    getUsers();
}

runUserDB();
