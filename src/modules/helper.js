// grab main tag displaying astronauts items
const astronautList = document.getElementById('astronaut');

// create arrow function to loop through and display austraunauts lists from API
export const displayAstronauts = (astronauts) => {
    astronautList.innerHTML = '';
    astronauts.forEach((astronaut) => {
      // append div to main tag
      astronautList.insertAdjacentHTML('beforeend', `<div class='person'><img class='person-img' src= '${astronaut.image}'> <div class='title-area'><h2>${astronaut.name}</h2> <i class="heart fa-regular fa-heart"></i> </div> <button>Comments</button><button>Reservations</button></div>`);
    });
  };

//get all Austronauts currently in Space from API
export const getAllAstronauts = async () => {
    try {
      const req = await fetch(`https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json`);
      const data = await req.json();
  
      if (!req.ok) {
        return data;
      }
  
      const astronauts = data.people;
      console.log(astronauts);
      displayAstronauts(astronauts);
      return astronauts;
    } catch (error) {
      return error;
    }
  };