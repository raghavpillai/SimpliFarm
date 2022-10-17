<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/470/datas/original.png">

## About SimpliFarm

### Overview
SimpliFarm takes live, forecasted weather data and current commodty prices to create a two week projection of an area with respect to your farm data(zip code, soil nutrition(PPM), total acreage, and crop type). SimpliFarm works to create an accurate model of how the farmer should cultivate their land to use as little resources as possible while keeping the soil PPM and hydration at an optimal level for the specific type of crop. This allows for healthy growth of a crop, while decreasing the level of water and fertilizer required leading to a more sustainable future of farming.

### Calculations
SimpliFarm also reports daily and bi-weekly consumption and financial costs. We take into account humidity, which can affect the moisture levels that the crop is exposed to, along with sub-optimal temperatures, which can cause crop stress. SimpliFarm also uses a machine learning model to extrapolate data using linear regression to predict future trends in usage and consumption, which can help with planning what crop to plant. With several different possible plants, we're able to see what crop grows the best in a certain area. These data points are all compiled into a simple and extended report, along with a text message report to the user.

### Inspiration
The inspiration for this project came from a common denominator of all human beings -- the necessity of food. For the billions of humans on this planet, we all necessitate the consumption of food, making it a crucial industry, with even a minor optimization having the potential to fill millions of mouths. This was the inspiration behind SimpliFarm, to use the exceptional amount of data available today, to determine the most sustainable route to farm tomorrow.

## Tech Stack
* Next.js  
  Main framework to create the website
* Firebase  
  Stores user farm data and takes care of the login account system
* Flask
  Used for API delivery
* Scikit-learn  
  For our predictions using machine learning, specifically the linear regression model
* Weather API & Google API  
  Achieved weather data and mapping fetching respectively
* Co:here AI  
  Generation of natural language from our results
* Twilio  
  Achieves SMS delivery of our results straight to your phone

<br>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/479/datas/original.png">
<br></br>

## Getting Started

If you want to try SimpliFarm and check it out, use these quick installation steps. Note to run this, you will need Node.js and Python3 installed, with the local Node and Python dependencies installed.

1. Clone repository  
  Use the command `git clone https://github.com/raghavpillai/SimpliFarm.git` in your terminal
2. Set up API keys  
   1. Create API keys for WeatherAPI, Google Maps, Twilio, and CoHere
   2. Create a Firebase project and get its API keys
   3. Rename the `TEMPLATE.env.local` to `.env.local` in the root directory and input the corresponding keys in here
3. Install dependencies
   * In the `/client` folder in your terminal, run `npm isntall`
   * In the `/server` folder in your terminal, run `pip3 install -r requirements.txt`
4. Running the project
   * In the client folder, run `npm run dev`
   * In the server terminal instance, run `python3 server.py`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Have a look around!

<br>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/476/datas/original.png">
<br></br>

View the website without running the project [here](/readMeAssets/README.md)  