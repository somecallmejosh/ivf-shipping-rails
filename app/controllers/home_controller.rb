class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    redirect_to shipments_path if signed_in?
  end
end
