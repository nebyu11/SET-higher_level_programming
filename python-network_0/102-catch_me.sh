#!/usr/bin/env bash
# Makes a request to 0.0.0.0:5000/catch_me that causes the server to respond with "You got me!"
# Cannot use echo, cat, etc. to display the result - curl handles output directly
curl -s -X PUT 0.0.0.0:5000/catch_me
