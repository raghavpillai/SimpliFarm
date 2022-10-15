import math
import src.modules.weather as weather

def get_temp_stress(max_temp: int, min_temp: int, local_max: float, local_min: float):
    # Measure temperature stress, humidity
    midpoint = (max_temp+min_temp)/2

    # Max
    max_distance_from_midpoint = abs(midpoint-local_max)
    max_proportion = max_distance_from_midpoint / (midpoint/2)
    max_final = pow(max_proportion, 3) / 1.5

    # Min
    min_distance_from_midpoint = abs(midpoint-local_min)
    min_proportion = min_distance_from_midpoint / (midpoint/2)
    min_final = pow(min_proportion, 3) / 1.5

    return math.ceil((max_final + min_final)/2 * 100.0) / 100.0


def water_score(base_ppm: int, target_ppm: int, base_water: int, rainfall: float, humidity: float):
    # Assume we need 5mm of rain per day to maintain PPM
    # 2mm of rain is 100% extra
    ppm_needed = target_ppm - base_ppm
    humidity_multiplier = ((-0.017*humidity)+1.88)
    water_needed = (base_water - rainfall) * (humidity_multiplier)
    
    values = {
        "fert": 0,
        "water": water_needed,
        "new_ppm": target_ppm * (1+ pow( (1-humidity_multiplier),6))
    }

    if ppm_needed > 0:
        values["fert"] += ppm_needed/1000 # grams, 10-20-10 fertilizer contains 10 percent nitrogen, 20 percent phosphorous and 10 percent potassium by weight
    else:
        values["water"] += ppm_needed/water_needed
    
    if values["new_ppm"] > target_ppm*1.01:
        values["fert"] += pow( (abs(target_ppm - values["new_ppm"]) * 0.1), 2)

    return values