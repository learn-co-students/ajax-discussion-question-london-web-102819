document.addEventListener("DOMContentLoaded", () => {
  const profilePic = document.querySelector('img');
  const email = document.querySelector("#email");
  const dob = document.querySelector("#date_of_birth");
  const city = document.querySelector("#city");
  const street = document.querySelector("#street");
  const state = document.querySelector("#state");
  const postcode = document.querySelector("#postcode");
  const phone = document.querySelector("#phone");
  const cell = document.querySelector("#cell");
  const fullname = document.getElementById("fullname");

  
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then(displayPerson)


  function displayPerson(json) {

    const results = json.results[0];

    personName = [results.name.title, results.name.first, results.name.last].join(" ");

    profilePic.src = results.picture.large;
    email.innerHTML = results.email;
    fullname.innerHTML = personName;
    city.innerHTML = results.location.city;
    state.innerHTML = results.location.state;
    postcode.innerHTML = results.location.postcode;
    dob.innerHTML = results.dob.date.slice(0,10);
    street.innerHTML = results.location.street.number + " " + results.location.street.name;
    phone.innerHTML = results.phone;
    cell.innerHTML = results.cell;
    
  }
});
