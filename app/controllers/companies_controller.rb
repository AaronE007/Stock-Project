class CompaniesController < ApplicationController
  
  def create
    stock = current_user.companies.create!(companies_params)
    render json: company, status: :created
  end

  def show 
    render json: @companies
  end

  
  private 

  def companies_params
    params.permit(:name, :description)
  end

end
