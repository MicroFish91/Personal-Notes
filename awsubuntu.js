// EC2 - save aws generated keygen then run:
// ssh -i "april-2021-cohort.pem" ubuntu@ec2-52-27-249-135.us-west-2.compute.amazonaws.com

// sudo apt-get update
// sudo apt-get install
// sudo reboot

// curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
// export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

// nvm install --lts
// npm install -g pm2
// sudo apt install nginx

// sudo vi /etc/nginx/sites-available/default
/* 
  type 'i' to insert text into vi editor 
  comment out (under location) using '#' => try_files $uri $uri/ =404
  under add "proxy_pass http://localhost:3000;"
  then hit ESC and type ":wq"
*/

// sudo nginx -t
// sudo service nginx restart

/* git comes with ubuntu */
// git clone

// ssh-keygen -t rsa -b 4096 -C "github email goes here"
// cat ~/.ssh/id_rsa.pub

// npm install
// npm install sequelize-cli -g

// sudo apt-get install postgresql -y
// sudo su - postgres
// createuser matt
// createdb blogProject_database
// psql
// ALTER user matt with encrypted password 'pw goes here';
// grant all privileges on database "blogProject_database" to matt;
// \q
// exit

/* navigate to config file and change config file or add .env file and change using 'sudo vi filename' ; end with :wq */

// sudo systemctl start nginx
// sudo reboot

// pm2 start app.js
// exit


// navigate to security groups on aws website
// edit inbound rules
// Add Rule - type: http, source: 0.0.0.0/0 (all ips can visit); save rule

// Public IPv4 DNS
// URL Here takes to website