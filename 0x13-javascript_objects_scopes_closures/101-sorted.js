#!/usr/bin/node
const dict = require('./101-data').dict;

const newDict = {};
for (const userId in dict) {
  const occ = dict[userId];
  if (!newDict[occ]) {
    newDict[occ] = [];
  }
  newDict[occ].push(userId);
}
console.log(newDict);
