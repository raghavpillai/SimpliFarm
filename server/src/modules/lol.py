import weather
import analyzer

def create_item(zip: int):
    forecast = weather.get_forecast(zip)
    
    current_ppm = 150
    target_ppm = 250
    base_water = 20

    max_temp = 100
    min_temp = 32

    forecast["instructions"] = {}
    
    for index, day in enumerate(forecast["forecast"]):
        ppm_score = analyzer.water_score(current_ppm, target_ppm, base_water, day["precip"], day["humidity"])
        
        stress_score = analyzer.get_temp_stress(max_temp, min_temp, day["max_f"], day["min_f"])

        current_ppm = ppm_score["new_ppm"]
        forecast[index] = {}
        forecast[index]["ppm"] = ppm_score
        forecast[index]["stress"] = stress_score
    
    print(forecast)


create_item(75063)