Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  resources :tweets, only: [:index, :create]

  root 'tweets#index'
  post '/tweets', to: 'tweets#create'
end
