let value = 5;

try
{
    value = countValue(10);
}
catch(error)
{
    console.log(error.message);
}
finally
{
    value = 25;
}

console.log(value);