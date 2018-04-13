class PostsController < ApplicationController
  def new


  end  


  def create
  @post = Post.create(post_params)

  if @post.save

  else
    flash[:errors] = @post.errors.full_messages

  end

end
