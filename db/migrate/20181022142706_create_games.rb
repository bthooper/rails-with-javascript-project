class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :opponent_id
      t.date :date
      t.string :location

      t.timestamps
    end
  end
end
