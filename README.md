# Frontline app client
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/15a9d95d956743fdbf55e81fbfbe1b21)](https://app.codacy.com/manual/Kailash-Sankar/frontline_client?utm_source=github.com&utm_medium=referral&utm_content=Kailash-Sankar/frontline_client&utm_campaign=Badge_Grade_Settings) [![Known Vulnerabilities](https://snyk.io/test/github/Kailash-Sankar/frontline_client/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Kailash-Sankar/frontline_client?targetFile=package.json) ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/kailashsankar/frontline_client)

Manage volunteers, requests, supporters and kind donations.
Currently hosted at [karnatakafightscorona.org](https://karnatakafightscorona.org/#/)

If you want to use the app for a differnt cause or authority, update the home page and associated components.


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
    
  Note: you can automate the manaul steps for dev environments with alfred
	it's a hacked up cli util to avoid typing large docker commands one by one,
	help guide is in the repo: https://github.com/Kailash-Sankar/alfred

## Server 
   The instructions for setting up the server are here, [frontline_server](https://github.com/Kailash-Sankar/frontline_server)

## Contributors ✨
[Contribution Guidelines](CONTRIBUTING.md)

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://wolfs-bane.herokuapp.com/"><img src="https://avatars0.githubusercontent.com/u/3972209?v=4" width="100px;" alt=""/><br /><sub><b>Kailash Sankar</b></sub></a><br /><a href="https://github.com/Kailash-Sankar/frontline_client/commits?author=Kailash-Sankar" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kishorkumarj"><img src="https://avatars1.githubusercontent.com/u/3972218?v=4" width="100px;" alt=""/><br /><sub><b>Kishor K Jagadeesan</b></sub></a><br /><a href="https://github.com/Kailash-Sankar/frontline_client/commits?author=kishorkumarj" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rtkanan"><img src="https://avatars3.githubusercontent.com/u/1004509?v=4" width="100px;" alt=""/><br /><sub><b>Kannan Nagarajan</b></sub></a><br /><a href="#projectManagement-rtkanan" title="Project Management">📆</a></td>
    <td align="center"><a href="http://www.spykk.com"><img src="https://avatars2.githubusercontent.com/u/63699386?v=4" width="100px;" alt=""/><br /><sub><b>SPYKK APP LABS</b></sub></a><br /><a href="#projectManagement-SPYKKAPPLABS" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/RajeeshVK"><img src="https://avatars3.githubusercontent.com/u/54164341?v=4" width="100px;" alt=""/><br /><sub><b>Rajeesh V K</b></sub></a><br /><a href="#design-RajeeshVK" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/vivekprocoder"><img src="https://avatars1.githubusercontent.com/u/1491268?v=4" width="100px;" alt=""/><br /><sub><b>vivek yadav</b></sub></a><br /><a href="#infra-vivekprocoder" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits
The home page widget data is from [api.covid19india.org](https://api.covid19india.org/)
