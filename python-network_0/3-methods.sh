#!/usr/bin/env bash
# Takes in a URL and displays all HTTP methods the server will accept
curl -s -X OPTIONS "$1" -I | grep "^Allow:" | awk '{$1=""; print substr($0,2)}'
