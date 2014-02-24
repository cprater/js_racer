get '/' do
  erb :index
end

get '/game' do
  erb :game_play
end

#####################################################


post '/create_user1' do
  player1 = User.find_or_initialize_by_name(params[:player1].upcase)
  player2 = User.find_or_initialize_by_name(params[:player2].upcase)
  if player1.save
    session[:player_one] = player1.name
    if player2.save
      session[:player_two] = player2.name
      redirect '/game'
    else
      @player2_error = true
      erb :index
    end
  else
    @player1_error = true
    erb :index
  end
end



# post '/game_over' do
#   #find winner by name
#   #save game info to both players
#   #game info = winner true or false
#   #game time
# end

