var indexRouter = require('./home.routes');
var usersRouter = require('./users.routes');


/**
 * Will define routes at one place for Express Application
 * @param {Express Application} app 
 * @returns Express Application
 */
const defineRoutes = (app) => {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);

  return app
}

module.exports = defineRoutes