import src.modules.weather as weather
import src.modules.analyzer as analyzer

def get_yield_info(zip: str, crop: str, acres: str, ppm: str) -> dict:
    forecast: dict = weather.get_forecast(zip)
    current_ppm: int = int(ppm)
    
    # Given by crop
    target_ppm: int = 250
    base_water: int = 20
    max_temp: int = 100
    min_temp: int = 32

    forecast["days"] = []
    
    total_water: int = 0
    total_fert: int = 0
    
    for index, day in enumerate(forecast["forecast"]):
        ppm_score: dict = analyzer.water_score(current_ppm, target_ppm, base_water, day["precip"], day["humidity"])
        stress_score: float = analyzer.get_temp_stress(max_temp, min_temp, day["max_f"], day["min_f"])
        current_ppm: float = ppm_score["new_ppm"]

        forecast["days"].append({"ppm": ppm_score, "stress": stress_score})

        total_water += ppm_score["water"]
        total_fert += ppm_score["fert"]
    
    forecast["total_price"] = (total_water * 0.5) + (total_fert + 0.5)
    forecast["total_water"] = total_water
    forecast["total_fert"] = total_fert
    forecast["needed_water"] = total_water * int(acres)
    forecast["needed_fert"] = total_water * int(acres)
    return forecast