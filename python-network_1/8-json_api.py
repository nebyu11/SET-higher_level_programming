#!/usr/bin/python3
"""Sends a POST request with a letter and displays search results"""
import requests
import sys

q = sys.argv[1] if len(sys.argv) > 1 else ""

r = requests.post('http://0.0.0.0:5000/search_user', data={'q': q})
try:
    json_data = r.json()
    if json_data:
        print("[{}] {}".format(json_data.get('id'), json_data.get('name')))
    else:
        print("No result")
except (ValueError, Exception):
    print("Not a valid JSON")
