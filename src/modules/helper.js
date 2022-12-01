const gameID = process.env.GAMEID;

// grab main tag displaying astronauts items
const astronautList = document.getElementById('astronaut');

// create arrow function to loop through and display austraunauts lists from API
export const displayAstronauts = (astronauts) => {
  astronautList.innerHTML = '';
  astronauts.forEach((astronaut) => {
    // append div to main tag
    astronautList.insertAdjacentHTML('beforeend', `<div class='person'><img class='person-img' src= '${astronaut.image}' alt='${astronaut.name}-image'> <div class='title-area'><h2>${astronaut.name}</h2> <i class="heart fa-regular fa-heart" id="${astronaut.id}"></i> </div> <button class="comment-${astronaut.id}">Comments</button><button>Reservations</button></div>`);

    document.querySelector(`.comment-${astronaut.id}`).addEventListener('click', () => {
      document.getElementById('overlay-project').style.display = 'block';
      document.querySelector('.popup-image').src = `${astronaut.image}`;
      document.querySelector('.popup-title').innerHTML = `${astronaut.name}`;
      document.querySelector('.country').innerHTML = `Country: ${astronaut.country}`;
      document.querySelector('.agency').innerHTML = `Agency: ${astronaut.agency}`;
      document.querySelector('.position').innerHTML = `Position: ${astronaut.position}`;
      document.querySelector('.spacecraft').innerHTML = `Spacecraft: ${astronaut.spacecraft}`;
      const comments = document.createElement('p');
      comments.setAttribute( 'id' , );
      // create arrow function to loop through and display austraunauts lists from API
      
      document.getElementById('comments').innerHTML = ``;


    });
  });
};

// create arrow function to loop through and display austraunauts lists from API
export const displayAstronautsLikes = (likes) => {
  likes.forEach((like) => {
    // append likes to each heart tag
    document.getElementById(`${like.id}`).innerHTML(`: ${like.likes}`);
  });
};

const displayAstronautsComments = (comments) => {
  comments.forEach((comment) => {
    // append comments to each astronaut
    document.getElementById(`comment${comment.id}`).innerHTML(`: ${comment.comments}`);
  });
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

// get all comments currently in Space from API
export const getAllAstronautsComments = async () => {
  try {
    const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameID}/comments`);
    const data = await req.json();

    if (!req.ok) {
      return data;
    }

    const commentsData = data;
    displayAstronautsComments(commentsData);
    return commentsData;
  } catch (error) {
    return error;
  }
};

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
    getAllAstronautsComments();
    return astronauts;
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
    return result;
  } catch (error) {
    return error;
  }
};
