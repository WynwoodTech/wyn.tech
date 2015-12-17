require 'sinatra'

get '/' do
  File.read(File.join('app', 'index.html'))
end
