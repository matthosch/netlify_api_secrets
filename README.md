[![Netlify Status](https://api.netlify.com/api/v1/badges/1c25312d-7f0e-4d18-b176-052fe46a4c77/deploy-status)](https://app.netlify.com/sites/adoring-rosalind-4c1626/deploys)

# Serverless Proxy for Securing API Keys

[Live Demo](https://adoring-rosalind-4c1626.netlify.app/) 

Based on [NunoCPNP/protectapisecrets](https://github.com/NunoCPNP/protectapisecrets) project by Nuno Pereira

This project displays the most popular movies from MovieDB's API. Normally we would have to include the API key for our client side code. Instead, we're utilizing [Netlify functions](https://www.netlify.com/products/functions/) to proxy our request and prevent exposing our API key to the public. Shout out to [Netlify](https://www.netlify.com/) for making this deployment workflow super easy.

![Screen Shot 2020-11-17 at 8 46 34 PM](https://user-images.githubusercontent.com/12053461/99476514-4cd55200-2916-11eb-9dcf-dd0877f4c4db.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run lambda-serve`

Runs the function code locally to call the MovieDB API. Locally this is proxied on localhost:9000, in production it will the hit the ./netlify/functions endpoint.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
