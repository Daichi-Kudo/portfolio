class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :Organisation
      t.string :phone
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end
