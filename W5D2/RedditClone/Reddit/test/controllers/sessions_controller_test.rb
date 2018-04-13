require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get Users" do
    get sessions_Users_url
    assert_response :success
  end

end
