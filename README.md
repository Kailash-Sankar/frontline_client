# Frontline app client

Volunteering service managment

## To setup locally

- Clone the repo
- npm install
- npm start

## docker setup

- clone repo
- docker build -t frontline_client:latest .
- docker run -d --restart=always --name=frontline_client -p 0.0.0.0:3000:80 frontline_client:latest

## alfred config

it's a hacked up cli util to avoid typing large docker commands one by one.
https://github.com/Kailash-Sankar/alfred

- clone repo
- setup alfred
- add config

  frontline_client: {
  path: `<path_to_repo>`,
  name: 'frontline_client',
  bind: '0.0.0.0:3000:80',
  type: 'standard',
  },

- alfred --serve frontline_client --dryrun
- alfred --serve frontline_client

Make sure the frontline-server repo is also running.
