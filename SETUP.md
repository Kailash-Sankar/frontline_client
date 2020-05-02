# Client Setup (without docker)

      git clone <repo>
      npm install

      # build the repo
      npm run build

      # install nginx in local machine

      # copy the nginx configuration
      cp default.conf /etc/nginx/conf.d/

      # copy the build output, production ready files
      cp -R ./dist/* /usr/share/nginx/html/

      # restart nginx
      service nginx restart

      # check if client is loading, default nginx 80 port

      # setup reverse proxy to connect client and server
      # edit the default.conf file and add below condition to the same server block
      # 3080 is the server port
      location /api/ {
        proxy_pass http://0.0.0.0:3080/api/;
      }

      # restart and test
      # check nginx logs for debug info if required

## Pulling updates

    # cd to repo folder
    git pull origin master

    # install dependency updates
    npm install

    # build app
    npm run build

    # copy code to nginx folder
    # or rsync
    cp -R ./dist/* /usr/share/nginx/html/

    # restart nginx
    service nginx restart
