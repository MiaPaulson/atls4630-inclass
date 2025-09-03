throw
throw ‘some error’;
Or even better:
throw new Error(‘some error’);


try...catch
try {
    throw "some error";
}
catch (e) {
    console.log(e);
}