#!/usr/bin/node
const fs = require('fs');

const fileA = process.argv[2];
const fileB = process.argv[3];
const fileDest = process.argv[4];

if (fileA && fileB && fileDest) {
  const contentA = fs.readFileSync(fileA, 'utf-8');
  const contentB = fs.readFileSync(fileB, 'utf-8');
  fs.writeFileSync(fileDest, contentA + contentB);
}
