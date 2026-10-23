#!/usr/bin/env bash
# Sends a JSON POST request with file contents as the body and displays the response
curl -s -X POST -H "Content-Type: application/json" -d @"$2" "$1"
