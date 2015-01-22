require 'httparty'

p "Hey, user. IP address, please?"
ip = gets.chomp

ip = HTTParty.get(ip)
body = JSON.parse(ip.body)
body.to_s
p "Which celebrity might this be?"
guess = gets.chomp
