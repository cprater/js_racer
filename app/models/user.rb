class User < ActiveRecord::Base

  has_many :games

  validates_uniqueness_of :name
  validates :name, presence: true
  validates_length_of :name, minimum: 3, maximum: 3, allow_blank: false

end
