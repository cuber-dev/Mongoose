

const { connectDB } = require('./config/db-connect')

connectDB({
    action: "read"
})      