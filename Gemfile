source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Assets gems

gem 'bootstrap-sass'
gem 'angular-rails-templates'
source 'https://rails-assets.org' do
  gem 'rails-assets-angular'
  gem 'rails-assets-angular-ui-router'
  gem 'rails-assets-angular-local-storage'
  gem 'rails-assets-angular-permission'
end

group :development, :test do
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # LiveReload guard allows to automatically reload your browser when 'view' files are modified.
  gem 'guard-livereload', '~> 2.4', require: false
  gem 'rack-livereload'
end

group :test do
  gem 'cucumber-rails' # Para tests con BDD en las vistas
  gem 'capybara' # Herramienta para buscar elementos en el DOM durante los tests con cucumber
  gem 'selenium-webdriver' # Drive para trabajar con javascript en los tests
  gem 'rspec-expectations' # Expectations de rspec.
end
