Rails.application.routes.draw do

  get 'shipments', to: 'static_pages#shipment_list'
  get 'shipments/edit', to:'static_pages#shipment_edit'
  get 'shipments/new', to: 'static_pages#shipment_new'
  get 'contacts', to: 'static_pages#address_book_list'
  get 'contacts/edit', to: 'static_pages#address_book_edit'
  get 'contacts/new', to: 'static_pages#address_new'
  get 'profile', to: 'static_pages#profile'
  get 'profile/edit', to: 'static_pages#profile_edit'
  devise_for :users
  get '/', to: 'home#index'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
