class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create 
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end 

  def show
    user = current_user
    if user
    render json: user
    else 
      render json: {error: "Not Authorized"}, status: :unauthorized
    end 
  end 

  private

  def user_params
    params.permit(:username, :password)
  end

end
