import src.modules.weather as weather
import src.modules.analyzer as analyzer
import src.modules.model as model

WATER_PRICE = 0.005
FERTILIZER_PRICE = 0.002

crops: dict = {
    "Wheat": {
        "target_ppm": 50,
        "min_temp": 54,
        "max_temp": 78,
        "base_water": 4.5
    },
    "Cotton": {
        "target_ppm": 80,
        "min_temp": 70,
        "max_temp": 100,
        "base_water": 2.5
    },
    "Corn": {
        "target_ppm": 40,
        "min_temp": 60,
        "max_temp": 95,
        "base_water": 6
    },
    "Soybean": {
        "target_ppm": 30,
        "min_temp": 65,
        "max_temp": 90,
        "base_water": 5
    },
    "Rice": {
        "target_ppm": 10,
        "min_temp": 70,
        "max_temp": 90,
        "base_water": 10
    }
}

def get_yield_info(zip: str, crop: str, acres: str, ppm: str) -> dict:
    forecast: dict = weather.get_forecast(zip)
    current_ppm: int = int(ppm)
    
    # Given by crop
    target_ppm: int = crops[crop]["target_ppm"]
    base_water: int = crops[crop]["base_water"]
    max_temp: int = crops[crop]["max_temp"]
    min_temp: int = crops[crop]["min_temp"]

    forecast["days"] = []
    
    total_water: int = 0
    total_fert: int = 0
    forecast["total_score"] = 100
    
    x_arr = []
    y_stress_arr = []
    y_water_arr = []
    y_fert_arr = []
    for index, day in enumerate(forecast["forecast"]):
        ppm_score: dict = analyzer.water_score(current_ppm, target_ppm, base_water, day["precip"], day["humidity"])
        stress_score: float = analyzer.get_temp_stress(max_temp, min_temp, day["max_f"], day["min_f"])
        current_ppm: float = ppm_score["new_ppm"]

        forecast["days"].append({"ppm": ppm_score, "stress": stress_score})

        total_water += ppm_score["water"]
        total_fert += ppm_score["fert"]

        x_arr.append(index)
        y_stress_arr.append(stress_score)
        y_water_arr.append(ppm_score["water"])
        y_fert_arr.append(ppm_score["fert"])

        forecast["total_score"] = analyzer.clamp(forecast["total_score"] - ( pow(stress_score, 1.2) * 20), 0, 100)
    
    forecast["total_price"] = (total_water * WATER_PRICE) + (total_fert + FERTILIZER_PRICE)
    forecast["used_water_sf"] = total_water # liters
    forecast["used_fert_sf"] = total_fert # kilograms
    forecast["total_used_water"] = total_water * 4046.86 * int(acres)
    forecast["total_used_fert"] = total_fert * 4046.86 * int(acres)

    forecast["predicted_stress"] = model.create_linear_regression(x_arr, y_stress_arr)
    forecast["predicted_water"] = model.create_linear_regression(x_arr, y_water_arr)
    forecast["predicted_fert"] = model.create_linear_regression(x_arr, y_fert_arr)
    
    return forecast