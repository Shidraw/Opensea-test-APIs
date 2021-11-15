import requests

url = "https://api.opensea.io/api/v1/events?only_opensea=false&offset=0&limit=20"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)