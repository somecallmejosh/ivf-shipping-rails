class RemoveFieldsFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :first_name, :string
    remove_column :users, :last_name, :string
    remove_column :users, :phone_number, :string
    remove_column :users, :street_address, :string
    remove_column :users, :street_address_2, :string
    remove_column :users, :street_address_3, :string
    remove_column :users, :city, :string
    remove_column :users, :state_region, :string
    remove_column :users, :postal_code, :string
    remove_column :users, :country, :string
    remove_column :users, :discount, :string
    remove_column :users, :default_pickup_instructions, :string
    remove_column :users, :default_delivery_instructions, :string
    remove_column :users, :business_name, :string
  end
end
