const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  function fetchData(){
    let data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( res => res )
    console.log(data)   
}

fetchData()
  console.log("CONTENT LOADED!");
});
