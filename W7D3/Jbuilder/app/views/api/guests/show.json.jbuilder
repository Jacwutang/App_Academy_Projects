json.partial! 'api/guests/guest', guest: @guest

# json.partial! 'api/guests/id/gifts' guest: @guest


json.gifts do
  json.array! @guest.gifts, :title, :description

end


# json.gifts do
#   json.array! @guest.gifts do |gift|
#     json.title gift.title
#     json.description gift.description
#   end
# end
