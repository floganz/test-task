Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
  get "getData", to: "lists#getData"
  resources :cards, :lists, :only => [:create, :update, :destroy]
end
