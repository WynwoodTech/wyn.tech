require 'sinatra'

set :public_folder, 'app'
set :port, 8080
set :bind, '0.0.0.0'

get '/' do
  File.read(File.join('app', 'index.html'))
end
