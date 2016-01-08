class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :name
      t.float :amount
      t.string :categories
      t.date :due_date
      t.belongs_to :budget, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
