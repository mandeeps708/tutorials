YatumblrPractice::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get "topics/index"
  get "blog/index"
  get "home/index"

 root :to => "home#index"
 match "/blog" => "blog#index", :as => :blog
 match "/topics" => "topics#index", :as => :topics
end
