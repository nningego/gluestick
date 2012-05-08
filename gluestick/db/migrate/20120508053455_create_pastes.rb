class CreatePastes < ActiveRecord::Migration
  def change
    create_table :pastes do |t|
      t.string :content
      t.timestamp :create_ts

      t.timestamps
    end
  end
end
