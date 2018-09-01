const axios = require('axios');


function getPersonData(personId) {
  return axios.get(`https://swapi.co/api/people/${personId}`)
    .then((response) => {
      const person = response.data;
      const newObj = {
        name: person.name,
        height: person.height,
        gender: person.gender,
        skinColor: person.skin_color,
        eyeColor: person.eye_color,
        hairColor: person.hair_color,
      };

      return newObj;
    })
    .catch((error) => {
      console.error(error.response.status, error.response.statusText);
    });
}


export function getData() {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return Promise.all(ids.map(id => getPersonData(id)))
}