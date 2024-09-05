# Weather Journal Web Page

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) as instructed by the tutor. The `server.js` file handles fetching data from the API and sending it to the frontend (`app.js`).

### How to Use:

1. Open your browser and enter: `localhost:8000`.
2. Input a city name and a note. The app will display the entered information along with the weather details for the city in a card/log.
3. Previous logs will also be displayed on the page.
4. To delete a log, simply click the 'x' in the top-right corner of the log.

### Error Handling:

- The server handles spelling or network errors gracefully and does not crash in these cases.
