Rails.application.routes.draw do
  get 'static_pages/home'

  get 'static_pages/profile'

  get 'static_pages/works'

  get 'static_pages/contact'

  root 'static_pages/home'
end
