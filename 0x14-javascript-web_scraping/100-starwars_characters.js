#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(body).characters;
    for (const charUrl of characters) {
      request(charUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.log(charError);
        } else {
          console.log(JSON.parse(charBody).name);
        }
      });
    }
  }
});
