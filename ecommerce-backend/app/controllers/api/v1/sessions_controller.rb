class Api::V1::SessionsController < ApplicationController
    def create
      user = User.find_by(email: params[:user][:email])
      if user&.authenticate(params[:user][:password])
        render json: { id: user.id, email: user.email, username: user.username }, status: :ok
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end


    def destroy
        session.delete(:user_id)
        head :no_content
    end
  end
  