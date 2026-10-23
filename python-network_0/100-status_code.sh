#!/usr/bin/env bash
# Sends a request and displays only the status code of the response
# No pipe, redirect, semicolon, or && allowed
curl -s -o /dev/null -w "%{http_code}" "$1"
