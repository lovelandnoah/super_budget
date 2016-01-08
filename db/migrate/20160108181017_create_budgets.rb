class CreateBudgets < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.float :money

      t.timestamps null: false
    end
  end
end
