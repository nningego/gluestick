class CreatePastes < ActiveRecord::Migration
  def change
    create_table :pastes do |t|
      t.string :content

      t.timestamps
    end
  end
end
