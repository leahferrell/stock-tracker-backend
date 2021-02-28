# Stonk Tracker Backend

Hobby Project to keep track of some interesting stocks

## How to run

1. Fork and clone this project
2. `npm install`
3. Copy the file `config.json.template` to `config.json` and fill in the missing fields as needed (do not encode strings)
4. `npm run start`

## APIs used

### TD Ameritrade

This is used for real time ticker quotes and price history

Follow this [guide](https://developer.tdameritrade.com/content/getting-started) to setup a developer account. Once you are able to generate an oAuth2 token, then update the config.json. Do not upload this file to github.
