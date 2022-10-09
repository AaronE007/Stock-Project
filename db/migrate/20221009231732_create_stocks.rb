class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :name
      t.integer :price_purchased_at
      t.string :info

      t.timestamps
    end
  end
end
