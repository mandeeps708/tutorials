require 'sinatra'
require 'sinatra/reloader' if development?
require 'slim'
require 'sass'

get('css/styles.css'){ scss :styles }

get '/' do
  slim :home
end

get '/about' do
  @title = "All About This Website"
  slim :about
end

get '/contact' do
	@title = "Contact Us"
  slim :contact
end

not_found do
	@title = "I don't think this is where you are supposed to be"
  slim :not_found
end

set :public_folder, 'public'

set :views, 'views'