Rails.application.routes.draw do
  root 'pages#home'
  get 'chapter_2', to: 'pages#chapter_2'
  get 'chapter_3', to: 'pages#chapter_3'
  get 'chessy', to: 'pages#chessy'
end
