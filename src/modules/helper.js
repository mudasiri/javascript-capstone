import countHomeItems from './counter.js';
import countComments from './countComments.js';

const gameID = process.env.GAMEID;
const commentForm = document.getElementById('comment-submit');

// get comments of an astronaut
const createCommentsSection = (usercomments) => {
  const commentDiv = document.getElementById('comments-data');
  usercomments.forEach((comment) => {
    commentDiv.insertAdjacentHTML('beforeend', `<b class="comm">${comment.creation_date} : ${comment.username} : ${comment.comment} </b><br>`);
    countComments();
  });
};

export const getAllAstronautComments = async (astronautId) => {
  try {
    const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameID}/comments?item_id=${astronautId}`);
    const data = await req.json();
    if (!req.ok) {
      return data;
    }
    const commentData = data;
    createCommentsSection(commentData);
    return commentData;
  } catch (error) {
    return error;
  }
};

export const addNewComment = async (newComment) => {
  try {
    const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameID}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    });

    if (!req.ok) {
      return req.status;
    }
    getAllAstronautComments(newComment.item_id);
    return req;
  } catch (error) {
    return error;
  }
};

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const comment = document.getElementById('comment');
  const itemComment = document.getElementById('item-id');

  const newComment = {
    item_id: itemComment.value,
    username: name.value,
    comment: comment.value,
  };
  name.value = '';
  comment.value = '';
  itemComment.value = '';

  addNewComment(newComment);
});

// grab main tag displaying astronauts items
const astronautList = document.getElementById('astronaut');

// function to Post Like
export const addNewLike = async (newLike) => {
  try {
    const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameID}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLike),
    });

    if (!req.ok) {
      return req.status;
    }
    const prevLikeTag = document.getElementById(`${newLike.item_id}`);
    const previosLikeCount = Number(document.getElementById(`${newLike.item_id}`).innerText);
    prevLikeTag.innerHTML = previosLikeCount + 1;
    return req;
  } catch (error) {
    return error;
  }
};

// create arrow function to loop through and display austraunauts lists from API
export const displayAstronauts = (astronauts) => {
  astronautList.innerHTML = '';
  astronauts.forEach((astronaut) => {
    // append div to main tag
    astronautList.insertAdjacentHTML('beforeend', `<div class='person p-3 mb-2 bg-light text-white"'><img class='person-img' src= '${astronaut.image}' alt='${astronaut.name}-image'> <div class='title-area'><h2>${astronaut.name}</h2> <i class="heart fa-regular fa-heart" id="${astronaut.id}">0</i> </div> <button class="comment-${astronaut.id} btn btn-primary">Comments</button><button class="btn btn-primary">Reservations</button></div>`);
    document.getElementById(`${astronaut.id}`).addEventListener('click', () => {
      const newLike = {
        item_id: astronaut.id,
      };
      addNewLike(newLike);
    });
    document.querySelector(`.comment-${astronaut.id}`).addEventListener('click', () => {
      document.getElementById('overlay-project').style.display = 'block';
      document.querySelector('.popup-image').src = `${astronaut.image}`;
      document.querySelector('.popup-title').innerHTML = `${astronaut.name}`;
      document.querySelector('.country').innerHTML = `Country: ${astronaut.country}`;
      document.querySelector('.agency').innerHTML = `Agency: ${astronaut.agency}`;
      document.querySelector('.position').innerHTML = `Position: ${astronaut.position}`;
      document.querySelector('.spacecraft').innerHTML = `Spacecraft: ${astronaut.spacecraft}`;
      const itemInput = document.getElementById('item-id');
      itemInput.setAttribute('value', `${astronaut.id}`);
      getAllAstronautComments(astronaut.id);
    });
  });

  countHomeItems();
};

// create arrow function to loop through and display austraunauts lists from API
export const displayAstronautsLikes = (likes) => {
  likes.forEach((like) => {
    // append likes to each heart tag
    document.getElementById(`${like.item_id}`).innerHTML = `${like.likes}`;
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
