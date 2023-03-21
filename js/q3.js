const name = "Maxwell Lee";
const countries = [
  { name: "Mexico", year: 2010 },
  { name: "US", year: 2000 },
];

const data = {
  name: name,
  countries: countries
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data.message))
  .catch(error => console.error(error));