import requests

URL = "http://api.weatherapi.com/v1/forecast.json"
KEY = "c6183838408a4882994185553221510"

def get_forecast(zip: int):
    r = requests.get(URL, params={"key":KEY, "q":zip, "days":14})
    #print(r.json())
    obj = r.json()
    weather = {}
    weather["name"] = obj["location"]["name"]
    weather["state"] = obj["location"]["region"]
    weather["country"] = obj["location"]["country"]

    weather["forecast"] = []
    for day in obj["forecast"]["forecastday"]:
        newday = {}
        newday["max_f"] = day["day"]["maxtemp_f"]
        newday["min_f"] = day["day"]["mintemp_f"]
        newday["precip"] = day["day"]["totalprecip_mm"]
        newday["humidity"] = day["day"]["avghumidity"]
        weather["forecast"].append(newday)
    
    return weather
