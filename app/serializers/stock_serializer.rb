class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :info

  belongs_to :user
  belongs_to :company
end
