const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const controls = document.getElementById("controls");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const optCar = document.getElementById("optCar");
const optSUV = document.getElementById("optSUV");
const optTruck = document.getElementById("optTruck");
const optNoPref = document.getElementById("optNoPref");
const optGas = document.getElementById("optGas");
const optHybrid = document.getElementById("optHybrid");
const optElec = document.getElementById("optElec");
const optNoPref2 = document.getElementById("optNoPref2");
const optBudget1 = document.getElementById("optBudget1");
const optBudget2 = document.getElementById("optBudget2");
const optBudget3 = document.getElementById("optBudget3");
const optBudget4 = document.getElementById("optBudget4");
const optBudget5 = document.getElementById("optBudget5");

const userPreferences = {}

startBtn.addEventListener("click", function() {
    intro.classList.add("hide");
    question1.classList.remove("hide");
});
optCar.addEventListener("click", function() {
    question1.classList.add("hide");
    question2.classList.remove("hide");
    userPreferences.type = "car";
})
optSUV.addEventListener("click", function() {
    question1.classList.add("hide");
    question2.classList.remove("hide");
    userPreferences.type = "suv";
})
optTruck.addEventListener("click", function() {
    question1.classList.add("hide");
    question2.classList.remove("hide");
    userPreferences.type = "truck";
})
optNoPref.addEventListener("click", function() {
    question1.classList.add("hide");
    question2.classList.remove("hide");
})
optGas.addEventListener("click", function() {
    question2.classList.add("hide");
    question3.classList.remove("hide");
    userPreferences.engine = "gas"
})
optHybrid.addEventListener("click", function() {
    question2.classList.add("hide");
    question3.classList.remove("hide");
    userPreferences.engine = "hybrid"
})
optElec.addEventListener("click", function() {
    question2.classList.add("hide");
    question3.classList.remove("hide");
    userPreferences.engine = "electric"
})
optNoPref2.addEventListener("click", function() {
    question2.classList.add("hide");
    question3.classList.remove("hide");
})




// Load the JSON data (example if it's in a separate file)
fetch('data/data.json')
    .then(response => response.json())
    .then(vehicles => {
        // User's preference
        const userPreference = "car";

        // Filter vehicles based on the 'type'
        const filteredVehicles = vehicles.filter(vehicle => vehicle.type === userPreference);

        console.log(filteredVehicles);
        // Output: Only vehicles with type "car"
    })
    .catch(error => console.error('Error fetching vehicle data:', error));
