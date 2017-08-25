# get-tweets

1. [Caution](#caution)
1. [Installation](#installation)
1. [Server](#server)

## Caution

Ensure that you read the [API Docs](https://dev.twitter.com/docs), most importantly the [rate limiting and black listing](https://dev.twitter.com/rest/public/rate-limiting).

## Installation

Copy the repo.

```bash
mkdir -p ~/GitHub/caseconsulting && cd $_
git clone git@github.com:caseconsulting/get-tweets-api.git
cd get-tweets-api
```

Install packages.

```bash
yarn install
```

Create an .env file. See the [sample](env.example) for more information.

```bash
cp env.example .env
vim .env
```


## Server

```bash
yarn start
```

## Heroku

Create the application.

```bash
heroku apps:create case-get-tweets
```

```bash
heroku config:set CONSUMER_KEY=111111111
heroku config:set CONSUMER_SECRET=111111111
heroku config:set ACCESS_TOKEN_KEY=111111111
heroku config:set ACCESS_TOKEN_SECRET=111111111
```
