## Inspiration

The inspiration for this project came from a common denominator of all human beings -- the necessity of food. For the billions of humans on this planet, we all necessitate the consumption of food, making it a crucial industry, with even a minor optimization having the potential to fill millions of mouths. This was the inspiration behind SimpliFarm, to use the exceptional amount of data available today, to determine the most sustainable route to farm tomorrow

## What is this

SimpliFarm takes live and forecasted weather data to create a two week projection of an area with respect to soil nutrition, water levels, temperature and commodity prices. The user first enters their zip code, soil PPM and total acreage, and SimpliFarm works to create an accurate model of how the farmer should cultivate their land to use as little resources as possible while keeping the soil PPM and hydration at an optimal level for the specific type of crop. This allows for healthy growth of a crop, while decreasing the level of water and fertilizer required.

SimpliFarm also reports daily and bi-weekly consumption and financial costs. We take into account humidity, which can affect the moisture levels that the crop is exposed to, along with sub-optimal temperatures, which can cause crop stress. SimpliFarm also uses a machine learning model to extrapolate data using linear regression to predict future trends in usage and consumption, which can help with planning what crop to plant. With several different possible plants, we're able to see what crop grows the best in a certain area. These data points are all compiled into a simple and extended report, along with a text message report to the user.

## Our Motivations

While architecting SimpliFarm, we focused on three main principles -- intuitiveness, accessibility and sustainability.

Intuitiveness can be seen with every aspect of our stack, from our simple, yet functional design language, to the distribution of our farming reports. The nature of the project required a design that was truly intuitive, allowing anyone of any technical-savviness to be able to utilize this product.

Accessibility goes hand in hand with our intuitive design. By utilizing Next.js to create small bundle sizes, we can guarantee that no matter how poor the internet connection or how remote one is, we're able to deliver a consistent user experience. This, along with our responsive design allowing for operation on both desktop and mobile devices hits home our desire to create an accessible experience.

Sustainability of course is at the heart of our project, with our desire to create something that could truly create a better tomorrow. With attention to detail, considering a variety of factors including humidity, rainfall, temperatures, dilution and more, we are able to create a utility that cuts down on water and fertilizer consumption, and allows for a greater yield of product.

## Tech Stack

How we built it
SimpliFarm's frontend is built using Next.js and React. The backend is written in Python, utilizing Flask for API delivery. We used Scikit-learn for our predictions using machine learning, specifically using a linear regression model. Weather and mapping was achieved through WeatherAPI and the Google Maps API respectively. Generation of natural language was accomplished with Cohere, and SMS delivery was done through Twilio.

Thanks for reading, and we hope you enjoyed hearing about SimpliFarm as much as we enjoyed building it!

## Contributors

Nam Truong - Front End\
Rishabh Vemparala - Full Stack\
Raghav Pillai - Back End\
Scott Tran - Front End\

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.