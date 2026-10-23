#!/usr/bin/python3
"""Displays X-Request-Id header value from a URL response using requests"""
import requests
import sys

url = sys.argv[1]

r = requests.get(url)
print(r.headers.get('X-Request-Id'))
