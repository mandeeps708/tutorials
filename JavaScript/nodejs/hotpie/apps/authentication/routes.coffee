
routes = (app) ->

	app.get '/login', (req, res) ->
		res.render "views/login",
			title: 'Login'
			stylesheet: 'login'

module.exports = routes