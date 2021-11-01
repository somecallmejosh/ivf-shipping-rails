class AddDetailsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone_number, :string
    add_column :users, :street_address, :string
    add_column :users, :street_address_2, :string
    add_column :users, :street_address_3, :string
    add_column :users, :city, :string
    add_column :users, :state_region, :string
    add_column :users, :postal_code, :string
    add_column :users, :country, :string
    add_column :users, :discount, :integer
    add_column :users, :default_pickup_instructions, :string
    add_column :users, :default_delivery_instructions, :string
    add_column :users, :business_name, :string
  end
end
