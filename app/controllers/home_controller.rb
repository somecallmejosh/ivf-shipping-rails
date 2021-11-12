class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  before_action :check_signed_in
  def check_signed_in
    redirect_to shipments_path if signed_in?
  end
  def index
  end
end
