import requests

WEATHER_URL = "http://api.weatherapi.com/v1/forecast.json"
WEATHER_KEY = "c6183838408a4882994185553221510"

GOOGLE_URL = "https://maps.googleapis.com/maps/api/staticmap"
GOOGLE_KEY = "AIzaSyDxxa0eH4EqpfA3PHi_ZgD_uwBs_k_1IBo"

def get_forecast(zip: int):
    weather_req = requests.get(WEATHER_URL, params={
        "key": WEATHER_KEY,
        "q": zip,
        "days": 14
    })
    weather_obj = weather_req.json()
    weather = {}
    weather["name"] = weather_obj["location"]["name"]
    weather["state"] = weather_obj["location"]["region"]
    weather["country"] = weather_obj["location"]["country"]

    center = str(weather_obj["location"]["lat"]) + "," + str(weather_obj["location"]["lon"])
    link = f"{GOOGLE_URL}?center={center}&zoom=12&size=700x700&format=png&maptype=satellite&key={GOOGLE_KEY}"
    weather["image"] = link

    weather["forecast"] = []
    for day in weather_obj["forecast"]["forecastday"]:
        newday = {}
        newday["max_f"] = day["day"]["maxtemp_f"]
        newday["min_f"] = day["day"]["mintemp_f"]
        newday["precip"] = day["day"]["totalprecip_mm"]
        newday["humidity"] = day["day"]["avghumidity"]
        weather["forecast"].append(newday)
    
    return weather
