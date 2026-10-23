#!/usr/bin/env bash
# Sends a DELETE request to the URL passed as first argument and displays the body of the response
curl -s -X DELETE "$1"
