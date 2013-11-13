YatumblrPractice::Application.routes.draw do
  
  get "events/map"

  resources :posts

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get "topics/index"
  get "blog/index"
  get "home/index"

  get "info/about"
  get "info/terms"
  get "info/copyleft"
  get "info/sponsors"

  match "/map" => "events#map", :as => :map

  match "/topics" => "topics#index", :as => :topics
  match "/blog" => "blog#index", :as => :blog

  match "/about" => "info#about", :as => :about
  match "/terms" => "info#terms", :as => :terms
  match "/copyleft" => "info#copyleft", :as => :copyleft
  match "/sponsors" => "info#sponsors", :as => :sponsors
  
  root :to => "home#index"
end
