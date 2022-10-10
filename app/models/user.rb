class User < ApplicationRecord
  has_many :stocks
  has_many: sectors, through: :stocks
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
end
