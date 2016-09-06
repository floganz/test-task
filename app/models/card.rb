class Card < ApplicationRecord
  has_one :list

  validates :name, :content, :list_id, presence: true
end
