const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  let data = fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => console.log(json.results[0]));

  return data
});
