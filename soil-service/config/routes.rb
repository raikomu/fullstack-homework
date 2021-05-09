Rails.application.routes.draw do
  resources :fields, only: [:index]
  resources :crops, only: [:index]

  post 'humus_balances', to: 'humus_balances#get_balances'
end
