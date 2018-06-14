class Api::BlogsController < ApplicationController

  def index
    render json: Blogs.all 
  end
end
