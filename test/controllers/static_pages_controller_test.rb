require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get static_pages_index_url
    assert_response :success
  end

  test "should get show" do
    get static_pages_show_url
    assert_response :success
  end

  test "should get edit" do
    get static_pages_edit_url
    assert_response :success
  end

  test "should get update" do
    get static_pages_update_url
    assert_response :success
  end

  test "should get create" do
    get static_pages_create_url
    assert_response :success
  end

  test "should get destroy" do
    get static_pages_destroy_url
    assert_response :success
  end

  test "should get new" do
    get static_pages_new_url
    assert_response :success
  end

end
