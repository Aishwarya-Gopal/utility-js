echo "You'll need node and npm installed on your system, this script assumes you have it"
npm install -i --no-fund
npm audit fix --no-fund
npm test