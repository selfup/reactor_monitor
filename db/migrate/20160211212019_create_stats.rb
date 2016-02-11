class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
      t.string :running
      t.string :power_out
      t.string :power_in
      t.string :resources_left
      t.string :up_time
      t.string :down_time
      t.string :time_until_out_of_fuel

      t.timestamps null: false
    end
  end
end
