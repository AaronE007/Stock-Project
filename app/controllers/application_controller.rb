class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :no_route
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  before_action :authorized!
  wrap_parameters format: []

end
