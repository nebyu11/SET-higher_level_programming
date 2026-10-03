#!/usr/bin/node
const request = require('request');
request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const todos = JSON.parse(body);
    const completedTasks = {};
    for (const todo of todos) {
      if (todo.completed === true) {
        if (completedTasks[todo.userId] === undefined) {
          completedTasks[todo.userId] = 1;
        } else {
          completedTasks[todo.userId]++;
        }
      }
    }
    console.log(completedTasks);
  }
});
