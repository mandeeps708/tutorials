DfndrrDev::Application.routes.draw do   
  get "dashboard/index"
  get "blog/index"
  get "info/contact"
  get "home/index"
  get "info/about"

  # map.root :controller => "home", :action => "index" 
  root :to => 'home#index'

  match "/about" => "info#about", :as => :about
  match "/contact" => "info#contact", :as => :contact
  match "/dashboard" => "dashboard#index", :as => :dashboard
  match "/blog" => "blog#index", :as => :blog
end
