require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get shipment_list" do
    get static_pages_shipment_list_url
    assert_response :success
  end

  test "should get shipment_edit" do
    get static_pages_shipment_edit_url
    assert_response :success
  end

  test "should get shipment_new" do
    get static_pages_shipment_new_url
    assert_response :success
  end

  test "should get address_book_list" do
    get static_pages_address_book_list_url
    assert_response :success
  end

  test "should get address_book_edit" do
    get static_pages_address_book_edit_url
    assert_response :success
  end

  test "should get address_new" do
    get static_pages_address_new_url
    assert_response :success
  end

  test "should get profile" do
    get static_pages_profile_url
    assert_response :success
  end

  test "should get profile_edit" do
    get static_pages_profile_edit_url
    assert_response :success
  end
end
