Rails.application.routes.draw do
  root 'welcome#index'

  namespace :api do
    namespace :v1 do
      resources :stats, only: [:index, :create], defaults: { format: 'json' } do

      end
    end
  end
end
