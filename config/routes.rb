Rails.application.routes.draw do
  root   'static_pages#home'
  get    '/profile',    to: 'static_pages#profile'
  get    '/works',   to: 'static_pages#works'
  get    '/contact', to: 'static_pages#contact'
end