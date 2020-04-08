# Frontline app client

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/15a9d95d956743fdbf55e81fbfbe1b21)](https://app.codacy.com/manual/Kailash-Sankar/frontline_client?utm_source=github.com&utm_medium=referral&utm_content=Kailash-Sankar/frontline_client&utm_campaign=Badge_Grade_Settings) [![Known Vulnerabilities](https://snyk.io/test/github/Kailash-Sankar/frontline_client/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Kailash-Sankar/frontline_client?targetFile=package.json) ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/kailashsankar/frontline_client)

Manage volunteers, requests, supporters and kind donations.

## To setup locally
    git clone <repo>
    npm install
    npm start

## install from docker hub
	docker pull kailashsankar/frontline_client:latest
	docker run -d --restart=always --name=frontline_client -p 0.0.0.0:3000:80 kailashsankar/frontline_client:latest

## docker build
	docker build -t frontline_client:latest .
	docker run -d --restart=always --name=frontline_client -p 0.0.0.0:3000:80 frontline_client:latest

## alfred config

	# it's a hacked up cli util to avoid typing large docker commands one by one.
	# help guide is in the repo: https://github.com/Kailash-Sankar/alfred

	# create config like below or customize the steps in alfred services
	frontline_client: {
		path: `<path_to_repo>`,
		name: 'frontline_client',
		bind: '0.0.0.0:3000:80',
		type: 'standard',
	 }

	alfred --serve frontline_client --dryrun
	alfred --serve frontline_client

NOTE: The instructions for setting up the server are in it's readme.md
