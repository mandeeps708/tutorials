YatumblrPractice::Application.routes.draw do
  resources :posts

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get "topics/index"
  get "blog/index"
  get "home/index"

  get "info/about"
  get "info/terms"
  get "info/copyright"

  match "/topics" => "topics#index", :as => :topics
  match "/blog" => "blog#index", :as => :blog

  match "/about" => "info#about", :as => :about
  match "/terms" => "info#terms", :as => :terms
  match "/copyright" => "info#copyright", :as => :copyright
  
  root :to => "home#index"
end
