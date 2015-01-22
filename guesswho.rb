require 'HTTParty'

p "Hey, user. IP address, please?"
address = gets.chomp

url = HTTParty.get(address)

p "Here are some hints: "
p url

answer = true
while answer
  p "Which celebrity might this be?"
  guess = gets.chomp
  guess.gsub!(" ","%20")
  response = HTTParty.get("#{address}/#{guess}")

  if response["correct"]
    p guess.upcase
    p response["correct"]
    p "Go guess someone else's. New IP:"
    address = gets.chomp
    url = HTTParty.get(address)
  else response["incorrect"]
    p response["incorrect"]
    p "Want to guess again? Type Y/N."
    again = gets.chomp.upcase
    if again == "Y"
      answer = true
    elsif again == "N"
      p "So gimme another IP address then, quitter."
      address = gets.chomp
      url = HTTParty.get(address)
    end
  end
end
