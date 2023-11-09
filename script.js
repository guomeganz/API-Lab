function getFakeNameFromApi() {
  event.preventDefault(); // This prevents the form from reloading the page!
  var url = buildApiUrl(); // Call the buildApiUrl() function to get the URL.
  
  // @TODO: Fill in this function to do the following:
  
  // 2. Make an AJAX call to the API and save the generated name in a variable.
  
  // 3. Call the displayFakeName() function from within your onreadystatechange function, and pass in the generated name.
  
  console.log("If you see this in the console, the getFakeNameFromApi() function was called.")
}

function buildApiUrl() {
  var baseUrl = 'https://cse204.work/name/superhero/';
  
  // @TODO: Modify this function so that it gets the first name and last name from the form 
  // using the document.getElementById() function and the .value property.
  
  var firstName = ''; // Get this via DOM from the first-name input
  var lastName = ''; // Get this via DOM from the last-name input
  
  // Here we build the URL. You don't have to modify the rest of this function.
  var finishedUrl = baseUrl + firstName + '/' + lastName;
  
  // Return the finished URL:
  console.log(finishedUrl); // Sanity check! Did your URL come out the way you expected it to?
  return finishedUrl;
}

function displayFakeName(name) {
  // @TODO: Modify this function so that it displays the name variable in the #result div.
  // Use DOM methods to take the `name` variable and set the innerHTML property of #result.
  
  // Bootstrap provides a "d-none" class (it stands for "display: none") that's used to hide a div.
  // Make sure you remove the Bootstrap "d-none" helper class so that the div is displayed. Try using .classList.remove() on your DOM element.
}

// Below we use addEventListener() to bind the getFakeNameFromApi() function to the submit event of the #name-form form.
const formElement = document.getElementById("name-form");
formElement.addEventListener("submit", getFakeNameFromApi, false);
