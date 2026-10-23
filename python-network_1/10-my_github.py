#!/usr/bin/python3
"""Uses GitHub API with Basic Auth to display user id"""
import requests
import sys

username = sys.argv[1]
password = sys.argv[2]

r = requests.get('https://api.github.com/user',
                 auth=(username, password))
json_data = r.json()
print(json_data.get('id'))
