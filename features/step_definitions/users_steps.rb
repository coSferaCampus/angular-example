Given(/^I visit sign up page$/) do
  visit root_path
  click_link "sign_up"
end

When(/^I fill user sign up form with invalid parameters$/) do
  expect(page).to have_css "#sign_up_form"
  fill_in 'userEmail', with: 'wrong@emailcom'
  fill_in 'userPassword', with: 'foo'
  click_button "createUser"
end

When(/^I fill user sign up form with valid parameters$/) do
  expect(page).to have_css "#sign_up_form"
  fill_in 'userEmail', with: "hola#{rand(1_000_000)}}@email.com"
  fill_in 'userPassword', with: 'foobarfoo'
  click_button "createUser"
end

Then(/^I should see errors on sign up form$/) do
  expect(page).to have_css('.has-error')
end

Then(/^I should be in home info page$/) do
  expect(page).to have_css("customer-title")
end
