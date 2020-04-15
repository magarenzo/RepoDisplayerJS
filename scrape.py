from bs4 import BeautifulSoup
import requests

page = requests.get("https://github.com/magarenzo")
soup = BeautifulSoup(page.content)