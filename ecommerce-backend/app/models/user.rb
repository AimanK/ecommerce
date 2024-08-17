class User < ApplicationRecord
    has_secure_password
    
    validates :password, presence: true, length: { minimum: 6 }, confirmation: true
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
    validates :username, presence: true
end
