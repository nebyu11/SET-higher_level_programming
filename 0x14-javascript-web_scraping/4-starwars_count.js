#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const results = JSON.parse(body).results;
    let count = 0;
    for (const film of results) {
      for (const character of film.characters) {
        if (character.endsWith('/18/') || character.endsWith('/18')) {
          count++;
          break;
        }
      }
    }
    console.log(count);
  }
});
