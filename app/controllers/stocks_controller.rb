class StocksController < ApplicationController
  
  def index
    render json: Stock.all  
  end 

  def create
    stock = current_user.stocks.create!(stock_params)
    render json: stock, status: :created
  end

  private 

  def recipe_params
    params.permit(:name, :price_purchased_at, :number, :info)
  end 


end
