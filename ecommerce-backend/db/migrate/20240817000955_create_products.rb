class CreateProducts < ActiveRecord::Migration[7.2]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.text :description
      t.string :category

      t.timestamps
    end
  end
end
