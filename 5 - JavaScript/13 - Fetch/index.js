// FETCH
// what is fetch?
// how do we use it?
// fetch is not part of JS - its in WEB APIS

// WHAT IS AN API?
// A way to interface with a server
// Application Programming Interface - API
// in the context of web
// A web application we can access (through HTTP request) and we recieve a response

// Making a web request
// returns promise<response>; , is an object with alot of info

const myFetch = fetch("https://randomuser.me/api/");
console.log(myFetch);
myFetch.then((response) => response.json()).then((data) => console.log(data));

async function fetchUser() {
    const response = await fetch("https://randomuser.me/api/");

    const { results } = await response.json();
    const { title, first, last } = results[0].name;
    console.log(results);
    document.querySelector("h2").innerText = `${title} ${first} ${last}`;
}
fetchUser();

// do keep in mind if you make a loop and use the await, it will just await till it is done rather than doing all of the request then waiting if they are all done
// use await promise.all(promiseArray); as promise.all waits for every promise
