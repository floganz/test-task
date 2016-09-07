Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"

  resources :cards, :only => [:create, :update, :destroy]
  resources :lists, :only => [:create, :update, :destroy, :index]
end
