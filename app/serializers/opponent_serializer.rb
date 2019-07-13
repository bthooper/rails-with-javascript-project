class OpponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :mascot

  has_many :games
end
