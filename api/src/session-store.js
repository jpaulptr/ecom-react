const randToken = require('rand-token');
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

        console.log(diff > 1000 * 60 * 2)
        if(diff > 1000 * 60 * 2){
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