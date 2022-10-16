#!/usr/bin/env python
# Module handling routing of requests from Flask app

import json
from typing import Dict
from flask import current_app as app
import src.modules.actions as actions

def _default_index() -> str:
    """
    Default index
    """
    return "Hi"

def _main_api(zip: str, crop: str, acres: str, ppm: str) -> str:
    """
    Main API function
    """
    ret = actions.get_yield_info(zip, crop, acres, ppm)
    return json.dumps(ret)

routes: Dict = {
    "/": _default_index,
    "/api/<zip>/<crop>/<acres>/<ppm>": _main_api
}

def create_routes():
    """
    Create url rules and add to app
    """
    for page_name in routes:
        with app.app_context():
            app.add_url_rule(page_name, view_func=routes[page_name])