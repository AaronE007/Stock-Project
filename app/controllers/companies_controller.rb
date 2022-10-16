class CompaniesController < ApplicationController
  skip_before_action :authorized!, only: [:index]
  
  def create
    company = current_user.companies.create!(companies_params)
    render json: company, status: :created
  end

  def index 
    render json: Company.all
  end 


  def show 
    render json: @companies
  end

  
  private 

  def companies_params
    params.require(:company).permit(:name, :description)
  end

end
