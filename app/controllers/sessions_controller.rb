class SessionsController < ApplicationController
  skip_before_action :authorized!, only: :create

  def create
    
    user = User.find_by_username(params[:username])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :accepted
    else 
      render json: { errors: ["Invalid Username or Password"] }, status: :unauthorized
  end 

  def destroy
    session.clear
    head :no_content
  end 

end 
