<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/470/datas/original.png">

## Information

SimpliFarm takes live and forecasted weather data to create a two week projection of an area with respect to soil nutrition, water levels, temperature and commodity prices. The user first enters their zip code, soil PPM and total acreage, and SimpliFarm works to create an accurate model of how the farmer should cultivate their land to use as little resources as possible while keeping the soil PPM and hydration at an optimal level for the specific type of crop. This allows for healthy growth of a crop, while decreasing the level of water and fertilizer required.

SimpliFarm also reports daily and bi-weekly consumption and financial costs. We take into account humidity, which can affect the moisture levels that the crop is exposed to, along with sub-optimal temperatures, which can cause crop stress. SimpliFarm also uses a machine learning model to extrapolate data using linear regression to predict future trends in usage and consumption, which can help with planning what crop to plant. With several different possible plants, we're able to see what crop grows the best in a certain area. These data points are all compiled into a simple and extended report, along with a text message report to the user.

The inspiration for this project came from a common denominator of all human beings -- the necessity of food. For the billions of humans on this planet, we all necessitate the consumption of food, making it a crucial industry, with even a minor optimization having the potential to fill millions of mouths. This was the inspiration behind SimpliFarm, to use the exceptional amount of data available today, to determine the most sustainable route to farm tomorrow



## Stack

SimpliFarm's frontend is built using Next.js and React. The backend is written in Python, utilizing Flask for API delivery. We used Scikit-learn for our predictions using machine learning, specifically using a linear regression model. Weather and mapping was achieved through WeatherAPI and the Google Maps API respectively. Generation of natural language was accomplished with Cohere, and SMS delivery was done through Twilio.

<br>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/479/datas/original.png">
<br></br>

## Getting Started

If you want to try SimpliFarm and check it out, use these quick installation steps. Note to run this, you will need Node.js and Python3 installed, with the local Node and Python dependencies installed.

1. Clone our repository to your local machine. If you have git, you can do this quickly by running git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY in your shell.
2. Create a terminal instance in the `/client` folder of the project and run `npm install`.
3. Create a terminal instance in the `/server` folder and run `pip3 install -r requirements.txt`
4. In the client folder, run `npm run dev`
5. In the server terminal instance, run `python3 server.py`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Have a look around!

<br>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/257/476/datas/original.png">
<br></br>