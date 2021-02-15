// https://www.javascript.com/learn/conditionals

const testValue = 5;

// If-Statement:
    // if the condition is true, this block will be executed
    if(testValue === 5)
    {
        'testValue ist 5';
    }

// Else-Statement:
    //  block of code inside of "else" statement will be executed if the condition is false
    const today = "tuesday";

    if (today === "monday")
    {
        'today is monday';
    }
    else
    {
        'today is not monday';
    }

// Else-If-Statement:
    // block of code inside of "else if" block will be executed if the condition is matched.
    if (today === "monday")
    {
        console.log('today is monday');
    }
    else if (today === "tuesday")
    {
        console.log('today is tuesday');
    }
    else
    {
        console.log('today is some other day');
    }

    // || und && nicht gergessen!