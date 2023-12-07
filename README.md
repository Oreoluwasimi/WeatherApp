# Weather App

A simple weather app that allows users to check the weather for a specific city.
Developed using Vanilla JavaScript, ES6, HTML5, and CSS3.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [API Key](#api-key)
- [Configuration](#configuration)

## Features

- Check the current weather for a specific city.
- Display temperature, humidity, wind speed, and weather icon.
- Handle errors gracefully when the city is not found.
- Include a delete button to remove a selected input.

## Prerequisites

- Node.js installed
- API key and URL from OpenWeatherMap [Link](https://openweathermap.org)

## API Key

- You can obtain your API key by signing up on OpenWeatherMap's website .
- Make sure to keep your API key private and not expose it publicly.
  * Create a config.js file in the root directory and add your API key.
  * Use the module feature in ES6 to import your API key into your app.js file.
  * Add your config.js to your .gitignore file.

## Configuration

Your `config.js` file should look like this:
```
export const apiKey = 'your-api-key';
```

