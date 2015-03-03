Given(/^I visit sign up page$/) do
  visit root_path
  click_link "sign_up"
end

When(/^I fill user sign up form with invalid parameters$/) do
  expect(page).to have_css "#sign_up_form"
end

Then(/^I should see errors on sign up form$/) do
  pending # express the regexp above with the code you wish you had
end
