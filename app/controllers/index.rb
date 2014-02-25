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
  if player1.valid?
    session[:player_one] = player1.name
    if player2.valid?
      session[:player_two] = player2.name
      player1.save
      player2.save
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


post '/game_over' do
  # p params

  content_type :json
  if params[:name] == "#player_1"
    p params
    session[:player_one].to_json
  elsif params[:name] == "#player_2"
    p params
    session[:player_two].to_json
  end

  #find winner by name


  #save game info to both players
  #game info = winner true or false
  #game time
end

