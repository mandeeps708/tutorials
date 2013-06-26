require 'test_helper'

class InfoControllerTest < ActionController::TestCase
  test "should get copyright" do
    get :copyright
    assert_response :success
  end

end
