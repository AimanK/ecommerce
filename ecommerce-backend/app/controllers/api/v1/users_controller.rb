class Api::V1::UsersController < ApplicationController
            def show
                @user = User.find(param[:id])
                    render json: @user
            rescue ActiveRecord::RecordNotFound
                    render json: { error: "User not found" }, status: :not_found
            end

            def create
                @user = User.new(user_params)
                if @user.save
                    render json: @user, status: :created
                else
                    render json: @user.errors, status: :unprocessable_entity
                end
            end

            def update
                @user = User.find(params[:id])
                
                if @user.update(user_update_params)
                    render json: @user
                else
                    Rails.logger.error @user.errors.full_messages.join(", ")
                    render json: @user.errors, status: :unprocessable_entity
                end
            end

            def destroy
                @user = User.find(params[:id])
                @user.destroy
                head :no_content
            end


            private
             # Strong params for user creation
            def user_params
                params.require(:user).permit(:username, :email, :password, :password_confirmation)
            end

            # Strong params for user update, allowing only username and password
            def user_update_params
                params.require(:user).permit(:username, :password, :password_confirmation)
            end
end
