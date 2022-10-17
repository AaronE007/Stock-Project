class StocksController < ApplicationController
  before_action :find_stock, only [:update, :destroy]

  def index
    render json: Stock.all  
  end 

  def create
    stock = Stock.create!(stock_params)
    render json: stock, status: :created
  end

  def update
    if current_user.stocks.includes(@stock)
      @stock&.update!(post_params)
      render json: stock
    else
      no_route
    end 
  end 

  def show
    stock = find_stock
    no_route unless current_user.stocks.include? stock
    render json: stock
  end

  def destroy
    current_user.stock.destroy
    render json: {message: "Stock deleted"}
  end 

  private 

  def find_stock 
    @stock = Stock.find(params[:id])
  end 

  def stock_params
    params.require(:stock).permit(:name, :price_purchased_at, :number, :info)
  end 

end
