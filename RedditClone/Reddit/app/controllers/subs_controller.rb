class SubsController < ApplicationController
  def new

  end

  def create
    @sub = Sub.create(sub_params)

    if @sub.save

    else
      flash[:errors] = @sub.errors.full_messages
      
    end

  end


end
