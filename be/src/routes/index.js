const UserRouter = require('./UserRouter')
const AdminRouter = require('./AdminRouter')
const routes = (app) =>{
    
    app.use('/user', UserRouter)
    app.use('/admin', AdminRouter)

}
module.exports = routes