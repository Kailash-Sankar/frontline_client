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

Make sure the frontline-server repo is also running.
