class GameSerializer < ActiveModel::Serializer
  attributes :id, :date, :location
  
  has_one :opponent
  belongs_to :user
end
