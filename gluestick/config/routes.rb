Gluestick::Application.routes.draw do
  resources :pastes

  get "application/index"
  post "application/save"

  root :to => 'pastes#index'
end
