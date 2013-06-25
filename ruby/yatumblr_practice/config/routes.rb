YatumblrPractice::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get "topics/index"
  get "blog/index"
  get "home/index"

  match "/topics" => "topics#index", :as => :topics
  match "/blog" => "blog#index", :as => :blog
  
  root :to => "home#index"
end
