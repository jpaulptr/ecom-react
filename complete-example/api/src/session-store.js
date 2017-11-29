const path = require('path');
const randToken = require('rand-token');
const config = require(path.resolve('./src/config/default.js')).defaults;
const sessions = [];

exports.checkSession = (token) => {
    const session = sessions.find(element=>element.token===token);
  
    // Check and Reset the token time
    if(session){
        let time = new Date(session.time);
        let temp = new Date();

        if (temp < time) {
            temp.setDate(temp.getDate() + 1);
        }
        
        const diff = temp - time;

        console.log('time has expired', diff > config.authentication.timeOut)
        if(diff > config.authentication.timeOut){
            return false;
        }
        session.time = new Date();
        return true;
    }

    return false;
}

exports.addSession = (userId) => {
    const token = randToken.generate(16);
    sessions.push ({
        token: token,
        time: new Date(),
        userId,
    })

    return token;
}