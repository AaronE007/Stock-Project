class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    renderjson: UserSerializer.new(user), status: :created
  end 


  private

  def user_params
    params.permit(:username, :password)
  end

end
