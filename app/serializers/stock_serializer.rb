class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :info
end
