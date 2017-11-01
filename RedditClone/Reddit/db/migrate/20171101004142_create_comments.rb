class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :author
      t.string :post

      t.timestamps
    end
  end
end
