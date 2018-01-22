class TweetsController < ApplicationController
  def index
    @tweets = Tweet.order("created_at DESC")
  end

  def create
    @tweet = Tweet.new(content: params[:tweet][:content], username: params[:tweet][:username])
    if @tweet.save
      respond_to do |f|
        f.html { redirect_to root_url }
        f.js
      end
    else
      render plain: "Error saving tweet", status: 422
    end
  end

end
