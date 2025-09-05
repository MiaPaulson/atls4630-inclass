import './style.css';
// get API link, log the response of getting it - below we find that the response is json (will usually be)
// fetch("https://meowfacts.herokuapp.com/").then(response => console.log(response));
// below returns the response as json and logging it
fetch("https://meowfacts.herokuapp.com/").then(response => response.json()).then(json => console.log(json));

// for API : {} means object [] means array


const baseURL = "https://meowfacts.herokuapp.com/"


const fetchCatFactButton = document.getElementById("fetchCatFact");
const catFactTarget = document.getElementById("catFactTarget");


// bc inside asynch function, do awaits
fetchCatFactButton.addEventListener("click", async () => {
    const response = await fetch(baseURL);
    const json = await response.json()
    // bc json is an object with a data value in it as an array, grab the first element as array
    // json.data[0] DEPENDS ON SHAPE OF API!!!! here essentially json.key[arrayindex]
    catFactTarget.innerText = json.data[0];
});

// network tab (by console tab) can help see errors! :)

// can get particular things from API - like multiple cat facts, cat fact with ID 3, etc.
// add to URL with ? for first parameter, all others are &

const multipleCount = document.getElementById("multipleCount");
const multipleFacts = document.getElementById("multiple");
const multipleAnswers = document.getElementById("multipleAnswers");

multipleFacts.addEventListener("click", async () => {
    try {
    const count = multipleCount.value;
    //console.log(count);

    // make sure can't be empty string/negative, so just terminate it!
    if (count < 1) {
        return;
    }

    const response = await fetch(`${baseURL}?count=${count}&lang=esp`);

    // show us what the error is
    if (!response.ok){
        const text = await response.text();
        throw new Error(text);
    }

    const json = await response.json();
    // innerHTML can work here since making it empty
    // making it empty so that doesn't add new items to previous calls, but erases each time
    multipleAnswers.innerHTML = "";
    //console.log(json);

    // printing out the facts
    for (const catFact of json.data) {
        // option 1: add the answers with li since the original tag is ul - bad option!
        // .innerHTML opens up to cross-site scripting - can bring viruses!!! (XSS)
        // multipleAnswers.innerHTML += `<li>${catFact}</li>`;

        // innerText is always safe!
        // createElement("the_html_type_you_want")
        const li = document.createElement("li");
        li.innerText = catFact;
        // put the new element we created as child of current element on the site already
        multipleAnswers.appendChild(li);
    }
}
    catch (e) {
        console.error(e);
    }
})