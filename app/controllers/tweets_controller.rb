class TweetsController < ApplicationController
  def index
    @tweets = Tweet.order("created_at DESC")
  end

  def create
    p "_________________"
    @tweet = Tweet.new(content: params[:content], username: params[:username])
    if @tweet.save
      redirect_to root_url
      # respond_to do |f|
      #   f.html { redirect_to root_url }
      #   f.js
      # end
    else
      render plain: "Error saving tweet", status: 422
    end
  end

end
