class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.boolean :win
      t.integer :time
      t.belongs_to :user

      t.timestamps
    end
  end
end
