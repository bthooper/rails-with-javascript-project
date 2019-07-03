class Play < ApplicationRecord

  has_and_belongs_to_many :playbooks

  validates :name, presence: true
  validates :playbooks, presence: true


end
