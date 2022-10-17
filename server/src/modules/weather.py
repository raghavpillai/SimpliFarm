import requests
import os
from dotenv import load_dotenv

load_dotenv()

WEATHER_URL: str = "http://api.weatherapi.com/v1/forecast.json"
WEATHER_KEY: str = os.getenv("WEATHER_KEY")

GOOGLE_URL: str = "https://maps.googleapis.com/maps/api/staticmap"
GOOGLE_KEY: str = os.getenv("GOOGLE_KEY")

def get_forecast(zip: int) -> dict:
    weather_req = requests.get(WEATHER_URL, params={
        "key": WEATHER_KEY,
        "q": zip,
        "days": 14
    })
    weather_obj: str = weather_req.json()
    weather: dict = {}
    weather["name"] = weather_obj["location"]["name"]
    weather["state"] = weather_obj["location"]["region"]
    weather["country"] = weather_obj["location"]["country"]

    center: str = str(weather_obj["location"]["lat"]) + "," + str(weather_obj["location"]["lon"])
    link: str = f"{GOOGLE_URL}?center={center}&zoom=12&size=700x700&format=png&maptype=satellite&key={GOOGLE_KEY}"
    weather["image"] = link

    weather["forecast"] = []
    for day in weather_obj["forecast"]["forecastday"]:
        newday: dict = {}
        newday["max_f"] = day["day"]["maxtemp_f"]
        newday["min_f"] = day["day"]["mintemp_f"]
        newday["precip"] = day["day"]["totalprecip_mm"]
        newday["humidity"] = day["day"]["avghumidity"]
        weather["forecast"].append(newday)
    
    return weather
