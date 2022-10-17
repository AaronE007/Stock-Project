class CompaniesController < ApplicationController
  skip_before_action :authorized!, only: [:index]
  
  def create
    company = Company.create!(companies_params)
    render json: company, status: :created
  end

  def index 
    companies = Company.all
    render json: companies 
  end 

  def show 
    company = Company.find(params[:id])
    render json: company
  end

  private 

  def companies_params
    params.require(:company).permit(:name, :description)
  end

end
