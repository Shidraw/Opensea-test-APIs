const options = {method: 'GET', headers: {Accept: 'application/json'}};

let url = "https://api.opensea.io/api/v1/events?only_opensea=false&offset=0&limit=20"
let asset_contract_address = "&asset_contract_address=0x11450058d796b02eb53e65374be59cff65d3fe7f"
let token_id = "&token_id=5391";
let next_request = url + asset_contract_address + token_id;

// TODO : Keep "last_update" variable updated every time the user clicks on the "Refresh" button
// If there is any event that happened after the "last_update" date :
// => notify the user with a pop-up saying there's new events regarding the chosen token
// date format from API : created_date: "2021-11-15T13:39:54.712196"
let last_update = "madate";

fetch(next_request, options)
    .then(response => response.json())
    .then(response => console.log(response.asset_events))
    .catch(err => console.error(err));

function myFunction () {
  let myArray = [];

  let temp = fetch(next_request, options)
    .then(response => response.json())
    .then(response => response.asset_events)
    .then(response => {
      // This is where the date process should happen, to check current event's date and compare it with last_update
      for (let i = 0; i<response.length;i++){
        console.log("Event n°" + i)
        console.log(response[i])
        myArray.push(response[i]);
      }
    }
    )
    .catch(err => console.error(err));

    return myArray;
}

const myFuncResult = myFunction();
console.log("myFunc : " + myFuncResult)

/*
async function fetchData() {
  try {
      const response = await fetch(next_request, options);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error);
  }
}
*/
