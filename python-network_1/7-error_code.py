#!/usr/bin/python3
"""Sends a request and handles HTTP status >= 400 using requests"""
import requests
import sys

url = sys.argv[1]

r = requests.get(url)
if r.status_code >= 400:
    print("Error code: {}".format(r.status_code))
else:
    print(r.text)
