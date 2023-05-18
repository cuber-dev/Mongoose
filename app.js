

const { connectDB } = require('./config/db-connect')

connectDB({
    query :{
        $or : [
            {
                name : "1"
            },
            {
                name : "2"
            }
        ]
    },
    action: "add-many"
})      