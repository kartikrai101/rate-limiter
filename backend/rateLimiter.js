const moment = require('moment');
const connection = require('./database');

const RATE_LIMIT_DURATION_IN_SECONDS = 60;
const NUMBER_OF_REQUEST_ALLOWED = 5;

module.exports = {
    rateLimiter: async (req, res, next) => {
        const userId = req.headers["user_id"];
        const currentTime = moment().unix();

        let isPresent;
        connection.query('SELECT * FROM User WHERE user_id='+userId, (err, rows) => {
            if(err){
                console.log(err);
            }else{
                if(rows.length === 0){
                    // means that the current user is not present in the database

                    // so, we need to insert this user in the database
                    const newUserID = req.headers["user_id"];
                    const createdAt = currentTime;
                    const count = 1;

                    const data = [newUserID, createdAt, count];

                    connection.query('INSERT INTO User (user_id, createdAt, count) VALUES(?)', [data], (err, rows) => {
                        if(err){
                            console.log(err);
                        }else{
                            console.log("New user added to Database!", rows);
                        }
                    })

                    return next();
                }else{
                    // means that the current user is present in the database
                    
                    // fetch that user and check the conditions of rate limiting
                    connection.query('SELECT * FROM User WHERE user_id=' + userId, (err, rows) => {
                        if(err){
                            console.log("Error fetching user details");
                        }else{
                            const creationTime = rows[0].createdAt;
                            const prevCount = rows[0].count;
                            
                            const difference = currentTime - creationTime;
                            if((difference < RATE_LIMIT_DURATION_IN_SECONDS) && (prevCount < NUMBER_OF_REQUEST_ALLOWED)){
                                // permission granted & update the count value in db
                                const updatedData = [userId, rows[0].createdAt, prevCount+1];
                                connection.query(`UPDATE User SET count=${prevCount+1} WHERE user_id=${userId}` , (err, rows) => {
                                    if(err)
                                        console.log(err);
                                    else{
                                        console.log("User updated!");
                                    }
                                })
                                return next();
                            }else{
                                // check if difference > rate limit duration
                                if(difference > RATE_LIMIT_DURATION_IN_SECONDS){
                                    const updatedData = [userId, creationTime, 1]
                                    connection.query(`UPDATE User SET createdAt=${currentTime}, count=${1} WHERE user_id=${userId}`, (err, rows) => {
                                        if(err){
                                            console.log("User has entered a new time slot, but got some error!");
                                        }else{
                                            console.log("User updated: entered new time slot!");
                                        }
                                    })
                                    return next();
                                }else{
                                    console.log("Limit Reached!!!!")
                                    return res.status(429).json({
                                        "success": false,
                                        "message": "Too many requests!"
                                    })
                                }
                            }
                            //console.log(currentTime - creationTime, prevCount);
                        }
                    })
                }
            }
        })
        //return next();
    }
}