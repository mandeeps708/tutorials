require 'sinatra'

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

set :public_folder, 'assets'

set :views, 'templates'