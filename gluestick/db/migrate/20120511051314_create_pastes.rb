class CreatePastes < ActiveRecord::Migration
  def change
    create_table :pastes do |t|
      t.text :content

      t.timestamps
    end
  end
end
