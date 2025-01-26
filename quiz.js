const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const controls = document.getElementById("controls");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const cardsContainer = document.getElementById("cards-container");
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
const optLux = document.getElementById("optLux");
const optSport = document.getElementById("optSport");
const optBasic = document.getElementById("optBasic");
const optOutdoor = document.getElementById("optOutdoor");
const optNoPref3 = document.getElementById("optNoPref3");

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
optBudget1.addEventListener("click", function() {
    question3.classList.add("hide");
    question4.classList.remove("hide");
    userPreferences.price = 35000;
})
optBudget2.addEventListener("click", function() {
    question3.classList.add("hide");
    question4.classList.remove("hide");
    userPreferences.price = 50000;
})
optBudget3.addEventListener("click", function() {
    question3.classList.add("hide");
    question4.classList.remove("hide");
    userPreferences.price = 60000;
})
optBudget4.addEventListener("click", function() {
    question3.classList.add("hide");
    question4.classList.remove("hide");
    userPreferences.price = 75000;
})
optBudget5.addEventListener("click", function() {
    question3.classList.add("hide");
    question4.classList.remove("hide");userPreferences.price = 15000;
})
optNoPref3.addEventListener("click", function() {
    question4.classList.add("hide");
    cardsContainer.classList.remove("hide");
})
optLux.addEventListener("click", function() {
    question4.classList.add("hide");
    cardsContainer.classList.remove("hide");
    userPreferences.trim = "luxary";
    fetchAndFilterVehicles(userPreferences)
        .then(filteredVehicles => {
            displayVehicleCards(filteredVehicles);
        });
})
optSport.addEventListener("click", function() {
    question4.classList.add("hide");
    cardsContainer.classList.remove("hide");
    userPreferences.trim = "sport";
    fetchAndFilterVehicles(userPreferences)
        .then(filteredVehicles => {
            displayVehicleCards(filteredVehicles);
        });
})
optBasic.addEventListener("click", function() {
    question4.classList.add("hide");
    cardsContainer.classList.remove("hide");
    userPreferences.trim = "basic";
    fetchAndFilterVehicles(userPreferences)
        .then(filteredVehicles => {
            displayVehicleCards(filteredVehicles);
        });
})
optOutdoor.addEventListener("click", function() {
    question4.classList.add("hide");
    cardsContainer.classList.remove("hide");
    userPreferences.trim = "outdoor";
    fetchAndFilterVehicles(userPreferences)
        .then(filteredVehicles => {
            displayVehicleCards(filteredVehicles);
        });
})



async function fetchAndFilterVehicles(userPreferences) {
    try {
        const response = await fetch('data/data.json');
        const vehicles = await response.json();

        // Filter vehicles based on user preferences
        const filteredVehicles = vehicles.filter(vehicle => {
            // Check price
            if (userPreferences.maxPrice && vehicle.price >= userPreferences.maxPrice) {
                return false;
            }

            // Check type
            if (userPreferences.type && vehicle.type !== userPreferences.type) {
                return false;
            }

            // Check engine
            if (userPreferences.engine && vehicle.engine !== userPreferences.engine) {
                return false;
            }

            // Check trim
            if (userPreferences.trim && vehicle.trim !== userPreferences.trim) {
                return false;
            }

            // All conditions passed
            return true;
        });

        return filteredVehicles;
    } catch (error) {
        console.error('Error fetching vehicle data:', error);
        return [];
    }
}

function displayVehicleCards(vehicles) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ""; // Clear previous results

    vehicles.forEach(vehicle => {
        const cardHTML = `
      <div class="card">
        <img src="${vehicle.image}" alt="${vehicle.model}" class="card-image">
        <div class="card-title">
          <h2>${vehicle.model}</h2>
        </div>
        <div class="card-item-container">
          <div class="card-item card-item-left">
            <div class="card-item-big">
              $${vehicle.price.toLocaleString()}
            </div>
            <div class="card-item-small">
              Base MSRP
            </div>
          </div>
          <div class="card-item">
            <div class="card-item-big">
              ${vehicle.mileage}
            </div>
            <div class="card-item-small">
              Estimated MPG
            </div>
          </div>
          <div class="card-item card-item-right">
            <div class="card-item-big">
              ${vehicle.seats}
            </div>
            <div class="card-item-small">
              Seats
            </div>
          </div>
        </div>
        <button class="card-button">
          <a href="${vehicle.link}" target="_blank" style="text-decoration: none; color: inherit;">
            Build Your ${vehicle.model} now!
          </a>
        </button>
      </div>
    `;
        container.innerHTML += cardHTML;
    });
}
