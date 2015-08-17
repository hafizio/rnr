Rails.application.routes.draw do
  root 'pages#home'
  get 'chapter_2', as: 'pages#chapter_2'
  get 'chapter_3', as: 'pages#chapter_3'
end
