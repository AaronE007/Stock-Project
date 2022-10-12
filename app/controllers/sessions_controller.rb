class Api::SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    
    user = User.find_by_username(params[:username])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: UserSerializer.new(user), status: :accepted
    else 
      render json: { errors: ["Invalid Username or Password"] }, status: :unauthorized
  end 

  def delete
    session.delte(:user_id)
    head :no-content
  end 

end 
