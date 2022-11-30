const gameID = process.env.GAMEID;

// grab main tag displaying astronauts items
const astronautList = document.getElementById('astronaut');

const showPopup = (astronaut) => {
  document.getElementById('overlay-project').style.display = 'block';
}

// create arrow function to loop through and display austraunauts lists from API
export const displayAstronauts = (astronauts) => {
  astronautList.innerHTML = '';
  astronauts.forEach((astronaut) => {
    // append div to main tag
    astronautList.insertAdjacentHTML('beforeend', `<div class='person'><img class='person-img' src= '${astronaut.image}' alt='${astronaut.name}-image'> <div class='title-area'><h2>${astronaut.name}</h2> <i class="heart fa-regular fa-heart" id="${astronaut.id}"></i> </div> <button class="comment-${astronaut.id}">Comments</button><button>Reservations</button></div>`);
  });
};

export const displayAstronautsLikes = (likes) => {
  likes.forEach((like) => {
    document.getElementById(`${like.item_id}`).innerHTML(`: ${like.likes}`);
  });
}
document.querySelector('.comment-`${astronaut.id}`').addEventListener('click', () => {
  document.getElementById('overlay-project').style.display = 'block';
});

// get all Austronauts currently in Space from API
export const getAllAstronauts = async () => {
  try {
    const req = await fetch('https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json');
    const data = await req.json();

    if (!req.ok) {
      return data;
    }

    const astronauts = data.people;
    displayAstronauts(astronauts);
    getAllAstronautsLikes();
    return astronauts;
  } catch (error) {
    return error;
  }
};

// get all Likes currently in Space from API
export const getAllAstronautsLikes = async () => {
  try {
    const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameID}/likes`);
    const data = await req.json();

    if (!req.ok) {
      return data;
    }

    const likesData = data;
    displayAstronautsLikes(likesData);
    return likesData;
  } catch (error) {
    return error;
  }
};

// create new API
export const createNewApp = async () => {
    try {
      const req = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = req;
  
      if (!req.ok) {
        return result;
      }
      console.log(result);
      return result;
    } catch (error) {
      return error;
    }
  };
  

