class List < ApplicationRecord
  has_many :cards

  validates :name, presence: true

  # def self.getAll
  #   @lists = List.select("")    
  # end
end
