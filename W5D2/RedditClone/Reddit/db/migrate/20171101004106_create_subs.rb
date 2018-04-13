class CreateSubs < ActiveRecord::Migration[5.1]
  def change
    create_table :subs do |t|
      t.string :title
      t.string :url
      t.string :content

      t.timestamps
    end
  end
end
