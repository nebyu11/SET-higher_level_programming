#!/usr/bin/env bash
# Sends a GET request with an X-School-User-Id header set to 98 and displays the body
curl -s -H "X-School-User-Id: 98" "$1"
